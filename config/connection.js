const development = {
  database: 'attendence-app',
  username: 'postgres',
  password: '12345',
  host: 'localhost',
  dialect: 'postgres',
};

const testing = {
  database: 'attendence-app',
  username: 'postgres',
  password: '12345',
  host: 'localhost',
  dialect: 'postgres',
};

const production = {
  database: 'demcurrida6b6j',
  username: 'phwhffkjabwblg',
  password: '9414e22e6d03db6fb6dfdb29b417011a813abfa15f2a7f7a68cf8f3d2ce47fcd',
  host: 'ec2-54-196-133-177.compute-1.amazonaws.com',
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
