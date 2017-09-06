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
            number: '6.',
            text: 'Study Intervention',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Study_Intervention_fullText',
            value: '<p></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.1',
            text: 'Study Intervention(s) Administered',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'study_Intervention_administered_fullText',
            value: '<p><strong>Investigational Product</strong>:</p><ul><li><strong>Study Intervention Name</strong>:</li><li><strong>Dosage Formulation</strong>: </li><li><strong>Unit Dose Strength</strong>:</li><li><strong>Route of Administration</strong>:</li><li><strong>Dosing Instructions</strong>:</li><li><strong>Packaging and Labelling</strong>:</li><li><strong>Manufacturer</strong>: </li></ul>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.1.1',
            text: 'Medical Devices',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'medical_devices_fullText',
            value: '<p></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.2.',
            text: 'Preparation/Handling/Storage/Accountability',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'preparation_fullText',
            value: '<p></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.3.',
            text: 'Measures to Minimize Bias: Randomization and Blinding',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'measures_fullText',
            value: '<p>,/p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.4.',
            text: 'Study Intervention Compliance',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'intervention_compliance_fullText',
            value: '<p></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.5.',
            text: 'Concomitant Therapy',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'preparation_fullText',
            value: '<p></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.5.1',
            text: 'Rescue Medicine',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'preparation_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.6.',
            text: 'Dose Modification',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'dose_modification_fullText',
            value: '<p></p>',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '6.7.',
            text: 'Intervention after the End of the Study',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'intervention_fullText',
            value: '<p></p>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '6',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 6 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '6',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 6 structure');
        });
    });
  },
};
