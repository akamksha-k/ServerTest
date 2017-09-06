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
            value:
              '<p><strong>Study intervention is defined as any investigational intervention(s), marketed product(s), placebo, or medical device(s) intended to be administered to a study participant according to the study protocol.</strong></p>',
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
            value:
              '<p><strong>Investigational Product</strong>:</p><ul><li><strong>Study Intervention Name:</strong>&nbsp;&nbsp;</li><li><strong>Dosage formulation:   </strong></li><li><strong>Unit dose strength(s)/Dosage level(s):   </strong></li><li><strong>Route of Administration :   </strong></li><li><strong>Dosing instructions:</strong></li><p>[number of tablets to be taken, when and any specific restrictions (eg, to take with or without food)]&nbsp;&nbsp;</p><li><strong>Packaging and Labeling</strong></li><p>Study Intervention will be provided in [container]. Each [container] will be labeled as required per country requirement.&nbsp;&nbsp;&nbsp;</p><li><strong>Manufacturer   </strong></li><li><strong>[Device:]</strong></li></ul>',
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
            value:
              '<ol><li>The [sponsor] manufactured medical devices (or devices manufactured for [sponsor] by a third party) provided for use in this study are [list here].</li><li>Other medical devices (not manufactured by or for [sponsor]) provided for use in this study are [list here].</li><li>Instructions for medical device use are provided [cross reference the location of such information].</li><li>XX medical device incidents, including those resulting from malfunctions of the device, must be detected, documented, and reported by the investigator throughout the study. (see Section 8.3.8).</li></ol>',
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
            value:
              '<ol><li>The investigator or designee must confirm appropriate temperature conditions have been maintained during transit for all study intervention received and any discrepancies are reported and resolved before use of the study intervention.</li><li>Only participants enrolled in the study may receive study intervention and only authorized site staff may supply or administer study intervention. All study intervention must be stored in a secure, environmentally controlled, and monitored (manual or automated) area in accordance with the labeled storage conditions with access limited to the investigator and authorized site staff.</li><li>The investigator, institution, or the head of the medical institution (where applicable) is responsible for study intervention accountability, reconciliation, and record maintenance (ie, receipt, reconciliation, and final disposition records).</li><li>Further guidance and information for the final disposition of unused study interventions are provided in the [Study Reference Manual or other specified location].&nbsp;</li></ol>',
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
            value: '<p></p>',
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
            value:
              '<p>Any medication or vaccine (including over-the-counter or prescription medicines, vitamins, and/or herbal supplements) that the participant is receiving at the time of enrollment or receives during the study must be recorded along with:</p><ul><li>Reason for use</li><li>Dates of administration including start and end dates</li><li>Dosage information including dose and frequency</li></ul><p>The Medical Monitor should be contacted if there are any questions regarding concomitant or prior therapy.</p><p>Participants must abstain from taking prescription or nonprescription drugs (including vitamins and dietary or herbal supplements) within 7 days (or 14 days if the drug is a potential enzyme inducer) or 5 half-lives (whichever is longer) before the start of study intervention until completion of the follow-up visit, unless, in the opinion of the investigator and sponsor, the medication will not interfere with the study.</p><p>[Paracetamol/Acetaminophen], at doses of [ 2 grams/day], is permitted for use [any time during the study; only during the screening period; etc.]. Other concomitant medication may be considered on a case-by-case basis by the [investigator in consultation with the] Medical Monitor [if required].</p>',
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
            value:
              '<p>The study site [will/will not] supply [specify type] rescue medication that will be [provided by the sponsor/obtained locally]. The following rescue medications may be used:</p><ol><li>&nbsp;XXX</li><li>YYY</li></ol><p>Although the use of rescue medications is allowable [at any time during the study], the use of rescue medications should be delayed, if possible, for at least [insert timeframe] following the administration of study intervention. The date and time of rescue medication administration as well as the name and dosage regimen of the rescue medication must be recorded.</p>',
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
            value:
              '<p>In case a dose reduction is necessary, the study intervention will be administered as follows: [insert text or a table describing changes].</p>',
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
