'use strict';
const models = require('../models');
const TemplateSection = models.TemplateSection;
module.exports = {
  up: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '9',
      },
    }).then(section => {
      return section
        .update({
          sectionTypeId: 2,
        })
        .then(() => {
          return console.log('Updated section 9 section Type Id');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '9',
      },
    }).then(section => {
      return section
        .update({
          sectionTypeId: null,
        })
        .then(() => {
          return console.log('Updated section 9 section Type Id');
        });
    });
  },
};
