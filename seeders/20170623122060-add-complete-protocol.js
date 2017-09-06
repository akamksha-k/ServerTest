'use strict';
const models = require('../models');
const Template = models.Template;
const State = models.State;
const Protocol = models.Protocol;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let attributes = {
      shortTitle: 'EEDEV-3456 Multiple Ascending Dose Study',
      number: 'DV625B00071',
      title:
        'A phase I, open-label, multicenter study to assess the safety, tolerability, pharmacokinetics and preliminary anti-tumour activity of multiple ascending doses of EEDEV-3456 in patients with Triple Negative Breast Cancer',
      sponsorId: 1,
      amendmentNumber: '',
      therapeuticArea: 'Oncology',
      drugProjectId: 'EEDEV-3456 Breast and Lung Cancer',
      compoundNumber: 'EEDEV-3456',
      regulatoryAgencyNumbers: '',
      developmenetPhase: 'Phase I',
      indication: 'Breast Cancer',
      trialTypeId: 1,
      createdBy: 1,
      createdAt: new Date(),
      startedAt: new Date(),
      endedAt: new Date(),
      studyNickName: 'EEDEV-3456 Multiple Ascending Dose Study',
      targetEndDate: '2018-07-25 00:00:00',
    };

    return State.find({
      where: {
        state: 'Completed',
      },
    }).then(state => {
      attributes['stateId'] = state.id;
      return Template.find({
        where: {
          sponsorId: null,
          version: '1.0',
        },
      }).then(template => {
        attributes['TemplateId'] = template.id;
        return Protocol.createFromTemplate(attributes).then(protocol => {
          return console.log(`Created protocol ${protocol.id}`);
        });
      });
    });
  },

  down: function(queryInterface, Sequelize) {
    return Protocol.destroy({
      where: {
        shortTitle: 'Ortho Test',
      },
    });
  },
};
