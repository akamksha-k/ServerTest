'use strict';
const models = require('../models');
const Template = models.Template;
const State = models.State;
const Protocol = models.Protocol;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let attributes = {
      shortTitle: 'EEDEV-3456 in First and Second Line Treatment of NSCLC',
      number: 'DV625A00061',
      title:
        'A non-randomized, parallel assignment, phase II trial to assess safety and efficacy of EEDEV-3456 in first line treatment of Non-Small Cell Luncg Cancer with active EGFR mutation, and second line treatment after acquired resistance with T790M mutation',
      sponsorId: 1,
      amendmentNumber: 0,
      therapeuticArea: 'Oncology',
      drugProjectId: 'EEDEV-3456 Breast and Lung Cancer',
      compoundNumber: 'EEDEV-3456',
      regulatoryAgencyNumbers: '',
      developmenetPhase: 'Phase II',
      indication: 'Non-Small Cell Lung Cancer',
      trialTypeId: 1,
      createdBy: 1,
      createdAt: new Date(),
      startedAt: new Date(),
      endedAt: new Date(),
      studyNickName: 'EEDEV-3456 in First and Second Line Treatment of NSCLC',
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
