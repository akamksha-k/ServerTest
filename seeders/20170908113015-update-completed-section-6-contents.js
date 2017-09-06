'use strict';
const models = require('../models');
const TemplateSection = models.TemplateSection;
const ProtocolSection = models.ProtocolSection;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let sectionContent = {
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
              '<p><strong>Investigational Product</strong>:</p><ul><li><strong>Study Intervention Name</strong>: EEDEV-3456</li><li><strong>Dosage Formulation</strong>: Tablet</li><li><strong>Unit Dose Strength</strong>: 50 mg or 100 mg</li><li><strong>Route of Administration</strong>: Oral</li><li><strong>Dosing Instructions</strong>: Once Daily</li><li><strong>Packaging and Labelling</strong>: Study Intervention will be provided in boxes of 28 tablets. Each box will be labeled as required per country requirement.</li><li><strong>Manufacturer</strong>: CogGen</li></ul>',
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
            value:
              '<ol><li>The investigator or designee must confirm appropriate temperature conditions have been maintained during transit for all study intervention received and any discrepancies are reported and resolved before use of the study intervention.</li><li>Only participants enrolled in the study may receive study intervention and only authorized site staff may supply or administer study intervention. All study intervention must be stored in a secure, environmentally controlled, and monitored (manual or automated) area in accordance with the labeled storage conditions with access limited to the investigator and authorized site staff.</li><li>The investigator, institution, or the head of the medical institution (where applicable) is responsible for study intervention accountability, reconciliation, and record maintenance (ie, receipt, reconciliation, and final disposition records).</li><li>Further guidance and information for the final disposition of unused study interventions are provided in the Study Reference Manual.</li></ol>',
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
            value:
              '<p><strong><ins>Use of IVRS / IWRS:</ins></strong></p><ul><li>All participants will be centrally assigned to randomized study intervention using an Interactive Voice/Web Response System (IVRS/IWRS). Before the study is initiated, the telephone number and call-in directions for the IVRS and/or the log in information &amp; directions for the IWRS will be provided to each site.</li><li>Study intervention will be dispensed at the study visits summarized in SoA.</li><li>&nbsp;Returned study intervention should not be re-dispensed to the participants.</li></ul><p><strong><ins>Blind Break:</ins></strong></p><ul><li>The IVRS/IWRS will be programmed with blind-breaking instructions. In case of an emergency, the investigator has the sole responsibility for determining if unblinding of a participants’s treatment assignment is warranted. Participant safety must always be the first consideration in making such a determination. If the investigator decides that unblinding is warranted, the investigator should make every effort to contact the sponsor prior to unblinding a participant’s treatment assignment unless this could delay emergency treatment of the participant. If a participant’s treatment assignment is unblinded, the sponsor must be notified within 24 hours after breaking the blind. The date and reason that the blind was broken must be recorded in the source documentation and case report form, as applicable.</li><li>As a back-up, a sealed envelope that contains the study intervention assignment for each participant will be provided to the investigator. The sealed envelope will be retained by the investigator (or representative) in a secured area. Once the study is complete, all envelopes (sealed and opened) must be inventoried and returned to the sponsor.</li></ul>',
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
            value:
              '<p>The administration of all study drugs should be recorded in the appropriate sections of the CRF. Treatment compliance will be assured by reconciliation of site drug accountability logs.</p>',
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
              '<p>Any medication or vaccine (including over-the-counter or prescription medicines, vitamins, and/or herbal supplements) that the participant is receiving at the time of enrollment or receives during the study must be recorded along with:</p><ul><li>Reason for use</li><li>Dates of administration including start and end dates</li><li>Dosage information including dose and frequency</li></ul><p>The Medical Monitor should be contacted if there are any questions regarding concomitant or prior therapy.</p><p>Participants must abstain from taking prescription or nonprescription drugs (including vitamins and dietary or herbal supplements) within 7 days (or 14 days if the drug is a potential enzyme inducer) or 5 half-lives (whichever is longer) before the start of study intervention until completion of the follow-up visit, unless, in the opinion of the investigator and sponsor, the medication will not interfere with the study.&nbsp;</p>',
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
            value:
              '<p>If moderate or severe AE are consistently observed across participants in a cohort or if unacceptable pharmacological effects, reasonably attributable to EEDEV-3456 in the opinion of the investigator are observed in more than 5% of the participants in a cohort, then dose escalation will be temporarily halted and no further participants will be dosed until a full safety review of the study has taken place. Relevant reporting and discussion with the Medical Monitor, relevant CogGen personnel, and the IRB/IEC will take place before resumption of dosing.If the same SAE occurs in more than 25 participants in a cohort, then dose escalation will be temporarily halted and no further participants will be dosed until a full safety review of the data has taken place. Relevant reporting and discussion with the Medical Monitor, relevant CogGen personnel, and the IRB/IEC will take place before resumption of dosing.The above criteria will apply even if measured PK parameters are below the pre-specified PK stopping criteria, and every effort will be made to take a blood sample at the time of the AE for PK analysis.</p>',
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
            value:
              '<p>If the Study is terminated or discontinued, any patient who, in the Investigator’s opinion, would continue to receive benefit from their assigned, may continue to receive their assigned treatment for as long as they are still gaining clinical benefit.  EEDEV-3456 would continue to be supplied to relevant Investigators and Patients under the compassionate use program.</p>',
          },
        },
      ],
    };

    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '6',
      },
    }).then(templateSection => {
      return templateSection.getProtocolSections().then(sections => {
        const sectionIDs = sections.map(section => {
          return section.id;
        });
        return ProtocolSection.update(
          { content: sectionContent },
          { where: { id: sectionIDs } }
        ).then(() => {
          return console.log(
            `Updated content for ${sections.length} sections (${sectionIDs}`
          );
        });
      });
    });
  },

  down: function(queryInterface, Sequelize) {
    return TemplateSection.find({
      where: {
        TemplateId: 1,
        number: '6',
      },
    }).then(templateSection => {
      return templateSection.getProtocolSections().then(sections => {
        const sectionIDs = sections.map(section => {
          return section.id;
        });
        return ProtocolSection.update(
          { content: templateSection.structure },
          { where: { id: sectionIDs } }
        ).then(() => {
          return console.log(
            `Updated content for ${sections.length} sections (${sectionIDs}`
          );
        });
      });
    });
  },
};
