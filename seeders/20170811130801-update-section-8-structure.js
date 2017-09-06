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
            number: '8.',
            text: 'Study Assessments and Procedures',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'Study_Intervention_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.1.',
            text: 'Efficacy Assessments ',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'efficacy_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.',
            text: 'Safety Assessments',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'safety_assessments_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.1',
            text: 'Physical Examinations',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'physical_exam_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.2',
            text: 'Vital Signs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'vital_signs_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.3',
            text: 'Electrocardiograms',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'electrocardiograms_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.4',
            text: 'Clinical Safety Laboratory Assessments',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'clinic_safety_lab_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.2.5',
            text: 'Suicidal Risk Monitoring',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'suicidal_risk_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3',
            text: 'Adverse Events and Serious Adverse Events',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'adverse_events_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.1',
            text:
              'Time Period and Frequency for Collecting AE and SAE Information',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'collect_ae_sae_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.2',
            text: 'Method of Detecting AEs and SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'meathod_detect_sae_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.3',
            text: 'Follow-up of AEs and SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'followUp_sae_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.4',
            text: 'Regulatory Reporting Requirements for SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'regulatory_req_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.5',
            text: 'Pregnancy',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'pregnancy_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.6',
            text: 'Cardiovascular and Death Events',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'cardio_death_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.7',
            text:
              'Disease-Related Events and/or Disease-Related Outcomes Not Qualifying as AEs or SAEs',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'disease_sae_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.3.8',
            text: 'Medical Device Incidents (Including Malfunctions)',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'medical_device_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.4',
            text: 'Treatment of Overdose',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'overdose_treatmnt_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.5',
            text: 'Pharmacokinetics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'pharmacokinetics_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.6',
            text: 'Pharmacodynamics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'pharmacodynamics_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.7',
            text: 'Genetics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'genetics_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.8.',
            text: 'Biomarkers',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'biomarkers_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '8.9',
            text: 'Medical Resource Utilization and Health Economics',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'resource_utilization_fullText',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '8',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 8 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '8',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 8 structure');
        });
    });
  },
};
