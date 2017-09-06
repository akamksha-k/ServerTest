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
            number: '2.',
            text: 'Introduction',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'introduction_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '2.1',
            text: 'Study Rationale',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'study_rationale_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '2.2',
            text: 'Background',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'background_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '2.3',
            text: 'Benefit/Risk Assessment',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'benefit_risk_assessment_fullText',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '2',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 2 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '2',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 2 structure');
        });
    });
  },
};
