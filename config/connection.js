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
  database: 'd3g3r6cgassgs9',
  username: 'nhhcgzhtczjnld',
  password: 'd530e36e76537fa7cf5b78c23f5f789e74c7e1c803abe7c3e90195bdece4bcee',
  host: 'ec2-54-81-126-150.compute-1.amazonaws.com',
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
