'use strict';
const models = require('../models');
const Template = models.Template;
const State = models.State;
const Protocol = models.Protocol;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let attributes = {
      shortTitle: 'Pharmacokinetics of EEDEV-3456',
      number: 'DV625A0001',
      title:
        'A phase Ib, open-label, multi-center study to assess the safety and pharmacokinetics of EEDEV-3456 administered to healthy volunteers',
      sponsorId: 1,
      amendmentNumber: 0,
      therapeuticArea: 'Oncology',
      drugProjectId: 'EEDEV-3456 Breast and Lung Cancer',
      compoundNumber: 'EEDEV-3456',
      regulatoryAgencyNumbers: '',
      developmenetPhase: 'Phase I',
      indication: 'Lung Cancer',
      trialTypeId: 1,
      createdBy: 1,
      createdAt: new Date(),
      startedAt: new Date(),
      endedAt: new Date(),
      studyNickName: 'Pharmacokinetics EEDEV-3456',
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
