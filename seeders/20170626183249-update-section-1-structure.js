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
            number: '1.',
            text: 'Protocol Summary',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '1.1',
            text: 'Synopsis',
          },
        },
        {
          type: 'MetaData',
          options: {
            formLabel: 'Protocol Title:',
            field: 'title',
          },
        },
        {
          type: 'MetaData',
          options: {
            formLabel: 'Short Title:',
            field: 'shortTitle',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Rationale:',
            value: '',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Objectives and Endpoints',
            value: '',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Overall Design:',
            value: '',
          },
        },
        {
          type: 'FullText',
          options: {
            exampleText: true,
            formLabel: 'Number of Participants:',
            value: 'Approximately X participants will be screened to achieve X randomly assigned to study intervention and X evaluable participants for an estimated total of X evaluable participants per intervention group. <p/> A maximum of X participants will be randomly assigned to study intervention such that approximately Y evaluable participants complete the study.',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Intervention Groups and Duration:',
            value: '',
          },
        },
        {
          type: 'RadioButton',
          options: {
            formLabel: 'Data Monitoring Committee:',
            authorInstructions: '',
            availableOptions: ['Yes', 'No'],
            value: 'Yes',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '1.2',
            text: 'Schema',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Schema',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '1.3',
            text: 'Schedule of Activities (SoA)',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Activities',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '1',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 1 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '1',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 1 structure');
        });
    });
  },
};
