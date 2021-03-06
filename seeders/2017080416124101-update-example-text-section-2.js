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
            formLabel: 'Introduction',
            name: 'introduction_fullText',
            value: '',
            exampleText:'<p>XXX is a novel, potent, and selective long-acting inhaled β2 adrenoreceptor agonist that is being developed for once-daily treatment of asthma and COPD.</p>',
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
            formLabel: 'Background',
            name: 'background_fullText',
            value: '',
            exampleText:'<p>Antibiotic resistance has been widely publicized and poses a serious threat to public health worldwide. Research efforts in recent years have become increasingly geared towards discovering and developing new classes of antibiotics with modes of action distinct from those of established agents and activity against resistant strains.</p>',
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
