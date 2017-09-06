'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('States', {
        id: {
        allowNull: false,
        autoIncrement: false,
        primaryKey: true,
        type: Sequelize.INTEGER,
        },
        state: {
        type: Sequelize.STRING,
        allowNull: false,
        },
        createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        },
        updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('States');
  },
};
