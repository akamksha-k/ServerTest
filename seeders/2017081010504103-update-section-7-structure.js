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
            number: '7.',
            text:
              'Discontinuation of Study Intervention and Participant Discontinuation/Withdrawal',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '7.1',
            text: 'Discontinuation of Study Intervention',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'discont_study_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '7.1.1',
            text: 'Temporary Discontinuation',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'temp_discont_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '7.1.2',
            text: 'Rechallenge',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Rechallenge_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '7.2',
            text: 'Participant Discontinuation/Withdrawal from the Study',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'partici_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '7.3',
            text: 'Lost to Follow Up',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'lost_follow_fullText',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '7',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 7 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '7',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 7 structure');
        });
    });
  },
};
