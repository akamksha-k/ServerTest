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
            text: 'Discontinuation of Study Intervention and Participant Discontinuation/Withdrawal',
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
            value: `
<p><strong>Liver Safety:</strong></p>
<p>Discontinuation of study intervention for abnormal liver function should be considered by the investigator when a participant meets one of the conditions outlined below, or if the investigator believes that it is in best interest of the participant. </p>
<p><strong>Cardiac Changes:</strong></p>
<p>If a clinically significant finding is identified (including, but not limited to changes from baseline in QT interval) after enrollment, the investigator or qualified designee will determine if the participant can continue in the study and if any change in participant management is needed. This review of the ECG printed at the time of collection must be documented. Any new clinically relevant finding should be reported as an AE.</p>
<p>See the SoA for data to be collected at the time of intervention discontinuation and follow-up and for any further evaluations that need to be completed.</p>
            `,
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
            value: `
<ul><li>A participant may withdraw from the study at any time at his/her own request, or may be withdrawn at any time at the discretion of the investigator for safety, behavioral, compliance, or administrative reasons.</li>
<li>If the participant withdraws consent for disclosure of future information, the sponsor may retain and continue to use any data collected before such a withdrawal of consent.</li>
<li>If a participant withdraws from the study, he/she may request destruction of any samples taken and not tested, and the investigator must document this in the site study records.</li>
<li>See SoA for data to be collected at the time of study discontinuation and follow-up and for any further evaluations that need to be completed.</li></ul>
            `,
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
            value: `
<p>A participant will be considered lost to follow-up if he or she repeatedly fails to return for scheduled visits and is unable to be contacted by the study site. The following actions must be taken if a participant fails to return to the clinic for a required study visit:</p>
<ul><li>The site must attempt to contact the participant and reschedule the missed visit as soon as possible and counsel the participant on the importance of maintaining the assigned visit schedule and ascertain whether or not the participant wishes to and/or should continue in the study.</li>
<li>Before a participant is deemed lost to follow up, the investigator or designee must make every effort to regain contact with the participant (where possible, 3 telephone calls and, if necessary, a certified letter to the participant’s last known mailing address or local equivalent methods). These contact attempts should be documented in the participant’s medical record.</li>
<li>Should the participant continue to be unreachable, he/she will be considered to have withdrawn from the study.</li></ul>
            `,
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
