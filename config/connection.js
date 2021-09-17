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
  database: 'dcss0qle32guoj',
  username: 'zlpxyafjsynnlb',
  password: '11823af517496d201423e19f7345193a77e3f8140d939e910a7fe124d64aedab',
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
