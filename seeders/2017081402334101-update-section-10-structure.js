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
            number: '10.',
            text: 'Supporting Documentation and Operational Considerations',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1',
            text:
              'Appendix 1: Regulatory, Ethical, and Study Oversight Considerations',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.1',
            text: 'Regulatory and Ethical Considerations',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'regulatory_ethical_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.2',
            text: 'Financial Disclosure',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'financial_disclosure_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.3',
            text: 'Informed Consent Process',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'informed_consent_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.4',
            text: 'Data Protection',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'data_protection_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.5',
            text: 'Committees Structure',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'committees_structure_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.6',
            text: 'Dissemination of Clinical Study Data',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'dissemination_study_data_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.7',
            text: 'Data Quality Assurance',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'data_qual_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.8',
            text: 'Source Documents',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'source_doc_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.9',
            text: 'Study and Site Closure',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'study_site_closure_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.1.10',
            text: 'Publication Policy',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'publication_policy_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.2',
            text: 'Appendix 2: Clinical Laboratory Tests',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'clinical_lab_test_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.3',
            text:
              'Appendix 3: Adverse Events: Definitions and Procedures for Recording, Evaluating, Follow-up, and Reporting',
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
            number: '10.4',
            text:
              'Appendix 4: Contraceptive Guidance and Collection of Pregnancy Information',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'preg_info_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.5',
            text: 'Appendix 5: Genetics',
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
            number: '10.5',
            text: 'Appendix 6: Abbreviations',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'abbr_fullText',
            value: '',
          },
        },
        {
          type: 'Heading',
          options: {
            number: '10.7',
            text: 'Appendix 7: Protocol Amendment History',
          },
        },
        {
          type: 'FullText',
          options: {
            formLabel: '',
            name: 'amendment_hist_fullText',
            value: '',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '10',
      },
    }).then(section => {
      return section
        .update({
          structure: sectionStructure,
        })
        .then(() => {
          return console.log('Updated section 10 structure');
        });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '10',
      },
    }).then(section => {
      return section
        .update({
          structure: null,
        })
        .then(() => {
          return console.log('Updated section 10 structure');
        });
    });
  },
};
