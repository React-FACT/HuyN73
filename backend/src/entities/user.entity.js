const { BaseEntity } = require('./bases/base.entity');
const { Sequelize } = require('sequelize');

class User extends BaseEntity {
    username = { type: Sequelize.STRING(50) };
    password = { type: Sequelize.STRING(50) };
    firstName = { type: Sequelize.STRING(100) };
    lastName = { type: Sequelize.STRING(100) };
    email = { type: Sequelize.STRING(250) };
    address = { type: Sequelize.STRING(250) };
    phoneNumber = { type: Sequelize.STRING(50) };
    role = { type: Sequelize.INTEGER };
    status = { type: Sequelize.INTEGER };
}
module.exports = { User };
