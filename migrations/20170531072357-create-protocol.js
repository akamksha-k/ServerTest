'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Protocols', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      title: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      number: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      sponsorId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      therapeuticArea: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      drugProjectId: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      compoundNumber: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      stateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      amendmentNumber: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      shortTitle: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      legalRegisteredAddress1: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      legalRegisteredAddress2: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      legalRegisteredAddress3: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      legalRegisteredAddress4: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      regulatoryAgencyNumbers: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      developmenetPhase: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      indication: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      trialTypeId: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      TemplateId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      SourceProtocolId: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      startedAt: {
        allowNull: true,
        type: Sequelize.DATE,
      },
      endedAt: {
        allowNull: true,
        type: Sequelize.DATE,
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
    return queryInterface.dropTable('Protocols');
  },
};
