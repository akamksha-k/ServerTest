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
            number: '5.',
            text: 'Study Population',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Study Population',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.1',
            text: 'Inclusion Criteria',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Inclusion Criteria',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.2',
            text: 'Exclusion Criteria',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Exclusion Criteria',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3',
            text: 'Lifestyle Considerations',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Lifestyle Considerations',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3.1',
            text: 'Meals and Dietary Restrictions',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Meals and Dietary Restrictions',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3.2',
            text: 'Caffeine, Alcohol and Tobacco',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Caffeine, Alcohol and Tobacco',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.3.3',
            text: 'Activity',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Activity',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '5.4',
            text: 'Screen Failures',
          },
        },
        {
          type: 'FullText',
          options: {
            text: 'Screen Failures',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '5',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 5 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '5',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 5  structure');
        });
    });
  },
};
