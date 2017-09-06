'use strict';
const models = require('../models');
const TemplateSection = models.TemplateSection;
const ProtocolSection = models.ProtocolSection;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let sectionStructure = {
      segments: [
        {
          type: 'Heading',
          options: {
            number: '4.',
            text: 'Study Design',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Study Design',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.1',
            text: 'Overall Design',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Overall Design',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.2',
            text: 'Scientific Rationale for Study Design',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Scientific Rationale for Study Design',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.3',
            text: 'Justification for Dose',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'Justification for Dose',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '4.4',
            text: 'End of Study Definition',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: 'End of Study Definition',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '4',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 4 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '4',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 4  structure');
        });
    });
  },
};
