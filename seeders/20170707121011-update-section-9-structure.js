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
            number: '9.1',
            text: 'Statistical Hypotheses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Statistical_Hypotheses_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.2',
            text: 'Sample Size Determination',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Sample_Size_Determination_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.3',
            text: 'Populations for Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Populations_for_Analyses_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4',
            text: 'Statistical Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'statistical_analyses_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4.1',
            text: 'Efficacy Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Efficacy_analyses_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4.2',
            text: 'Safety Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'safety_analyses_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.4.3',
            text: 'Other Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Other_analyses_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.5',
            text: 'Interim Analyses',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'interim_analyses_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '9.5.1',
            text: 'Data Monitoring Committee (DMC)',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'data_monitoring_committee_fullText',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '9',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 9 structure');
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
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 9 structure');
        });
    });
  },
};
