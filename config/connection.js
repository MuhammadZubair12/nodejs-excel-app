const development = {
  database: 'excellapp',
  username: 'postgres',
  password: 'c00822631',
  host: 'localhost',
  dialect: 'postgres',
};

const testing = {
  database: 'excellapp',
  username: 'postgres',
  password: 'c00822631',
  host: 'localhost',
  dialect: 'postgres',
};

// const production = {
//   database: 'excellapp',
//   username: 'postgres',
//   password: 'c00822631',
//   host: 'localhost',
//   dialect: 'postgres',
// };

const production = {
  database: 'd3747kpl01ei9j',
  username: 'htdkkfbomiqhtk',
  password: 'c62f5af41e7b5dba254deec4862ea195027f768591ff08c3818e1f4a4f3bcb14',
  host: 'ec2-34-227-120-94.compute-1.amazonaws.com',
  dialect: 'postgres',
};

// const production = {
//   database: process.env.DB_NAME,
//   username: process.env.DB_USER,
//   password: process.env.DB_PASS,
//   host: process.env.DB_HOST || 'localhost',
//   dialect: 'postgres',
// };

module.exports = {
  development,
  testing,
  production,
};
