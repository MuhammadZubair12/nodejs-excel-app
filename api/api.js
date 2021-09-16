/**
 * third party libraries
 */
const bodyParser = require('body-parser');
const express = require('express');
const helmet = require('helmet');
const http = require('http');
const mapRoutes = require('express-routes-mapper');
const cors = require('cors');

const User = require('./models/User');
const Attendence = require('./models/Attendence');

/**
 * server configuration
 */
const config = require('../config/');
const dbService = require('./services/db.service');
const auth = require('./policies/auth.policy');
const secret = require("./utils").secret;
const jwt = require('jsonwebtoken');

// environment: development, staging, testing, production
const environment = process.env.NODE_ENV;
/**
 * express application
 */
const app = express();
const server = http.Server(app);
const mappedOpenRoutes = mapRoutes(config.publicRoutes, 'api/controllers/');
const mappedAuthRoutes = mapRoutes(config.privateRoutes, 'api/controllers/');
const DB = dbService(environment, config.migrate).start();

// allow cross origin requests
// configure to only allow requests from certain origins
app.use(cors());

// secure express app
app.use(helmet({
  dnsPrefetchControl: false,
  frameguard: false,
  ieNoOpen: false,
}));

// parsing the request bodys
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const me = (req, res, next) => {
  if (req.headers && req.header("Authorization")) {
    var authorization = req.header("Authorization").split(" ")[1],
      decoded;
    try {
      decoded = jwt.verify(authorization, secret());
    } catch (e) {
      return res.status(401).send("unauthorized1");
    }
    var userId = decoded.id;
    // Fetch the user by id
    User.findOne({
      where: {
        id: userId,
      },
      raw: true,
    }).then(function (user) {
      // Do something with the user
      if (!user) res.status(401).send("unauthorized2");
      Attendence.findAll({
        where: {
          UserId: userId,
        },
        raw: true,
      }).then((attendence) => {
        req.me = user;
        req.me.attendence = attendence;
        next();
      });
      // req.me = user;
      // next();
    });
  } else {
    return res.status(401).send("unauthorized3");
  }
};

// secure your private routes with jwt authentication middleware
app.all('/private/*', (req, res, next) => auth(req, res, next));
app.all("/private/*", (req, res, next) => me(req, res, next));

// fill routes for express application
app.use('/public', mappedOpenRoutes);
app.use('/private', mappedAuthRoutes);

// server.listen(config.port, () => {
//   if (environment !== 'production' &&
//     environment !== 'development' &&
//     environment !== 'testing'
//   ) {
//     console.error(`NODE_ENV is set to ${environment}, but only production and development are valid.`);
//     process.exit(1);
//   }
//   return DB;
// });

server.listen(config.port, () => {
  console.info(
    `Server is running on ${environment} on port ${config.port
    } with routes ${JSON.stringify(config.privateRoutes)}`
  );
  if (
    environment !== "production" &&
    environment !== "development" &&
    environment !== "preview"
  ) {
    console.error(
      `NODE_ENV is set to ${environment}, but only production and development are valid.`
    );
    process.exit(1);
  }
  return DB;
});

