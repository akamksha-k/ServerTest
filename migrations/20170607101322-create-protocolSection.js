'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('ProtocolSections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      order: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ProtocolId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      TemplateSectionId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      ParentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      content: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      StateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      AuthorId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ReviewerId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedBy: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('ProtocolSections');
  },
};
