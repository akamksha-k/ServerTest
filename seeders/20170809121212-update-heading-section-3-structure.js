'use strict';
const models = require('../models');
const TemplateSection = models.TemplateSection;
module.exports = {
  up: function(queryInterface, Sequelize) {
    let sectionStructure = {
      segments: [
        {
          type: 'Heading',
          options: {
            number: '3.1.',
            text: 'Objectives and Endpoints',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: '',
            value:
              '<ul><li><strong><u>Primary</u></strong></li><ul><li><strong><u>Primary Objective</u>:</strong> </li><li><strong><u>Primary Endpoint</u>:</strong> </li></ul><li><strong><u>Secondary Objectives</u></strong></li><ul><li><strong><u>Secondary Objective 1:</u></strong></li><li><strong><u>Secondary Endpoint 1:</u></strong> </li><li><strong><u>Secondary Objective 2:</u></strong></li><li><strong><u>Secondary Endpoint 2:</u></strong></li><li><strong><u>Secondary Objective 3:</u></strong></li><li><strong><u>Secondary Endpoint 3:</u></strong></li><li><strong><u>Secondary Objective 4</u>: </strong></li><li><strong><u>Secondary Endpoint 4:</u></strong></li><li><strong><u>Secondary Objective 5</u>:</strong></li><li><strong><u>Secondary Endpoint 5</u>:</strong> </li></ul><li><strong><u>Safety</u></strong></li><ul><li><strong><u>Safety Objective 1</u>: </strong></li><li><strong><u>Safety Endpoint 1</u>: </strong></li></ul><li><strong><u>Exploratory</u> </strong></li><ul><li><strong><u>Exploratory Objective 1</u>: </strong></li><li><strong><u>Exploratory Endpoint 1</u>: </strong></li><li><strong><u>Exploratory Objective 2</u>: </strong></li><li><strong><u>Exploratory Endpoint 2</u>: </strong></li><li><strong><u>Exploratory Objective 3</u>: </strong></li><li><strong><u>Exploratory Endpoint 3</u>: </strong></li></ul></ul>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '3',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 3 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '3',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 3 structure');
        });
    });
  },
};
