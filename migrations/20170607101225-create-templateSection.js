'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('TemplateSections', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      TemplateId: {
        type: Sequelize.INTEGER,
        allowNull: false,
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
      //1 for Medic, 2 for Statistician, 3 for StudyManagers & it should be null if it is subsection.. No Seperate Section Type table is required for MVP
      sectionTypeId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      ParentId: {
        type: Sequelize.INTEGER,
        allowNull: true,
      },
      structure: {
        type: Sequelize.JSONB,
        allowNull: true,
      },
      createdBy: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        type: Sequelize.DATE,
        allowNull: false,
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
    return queryInterface.dropTable('TemplateSections');
  },
};
