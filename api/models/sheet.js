
const Sequelize = require('sequelize');
const sequelize = require('../../config/database');

const hooks = {};

const tableName = 'sheet';

const Sheet = sequelize.define('Sheet', {
    name: {
        type: Sequelize.STRING,
    },
    code: {
        type: Sequelize.STRING,
    },
    category: {
        type: Sequelize.STRING,
    },
    category_code: {
        type: Sequelize.STRING,
    },
    purchase_price: {
        type: Sequelize.STRING,
    },
    sale_price: {
        type: Sequelize.STRING,
    },
    quantity: {
        type: Sequelize.STRING,
    },
    company_id: {
        type: Sequelize.STRING,
    },
    image: {
        type: Sequelize.STRING,
    }
}, { hooks, tableName });


module.exports = Sheet;



