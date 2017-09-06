'use strict';
const models = require('../models');
const Template = models.Template;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return Template.create({
      sponsorId: null,
      version: '1.0',
      createdBy: 1,
      createdAt: new Date(),
    })
      .then(() => {
        console.log(`Added Template`);
      })
      .catch(error => {
        console.log(`ERROR ${error}`);
      });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Templates', null, {});
  },
};
