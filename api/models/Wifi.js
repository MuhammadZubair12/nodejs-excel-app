const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'wifi';

const Wifi = sequelize.define('Wifi', {
  ssid: {
    type: Sequelize.STRING,
  }
}, { hooks, tableName });


module.exports = Wifi;
