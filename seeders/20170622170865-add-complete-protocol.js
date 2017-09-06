'use strict';
const models = require('../models');
const Template = models.Template;
const State = models.State;
const Protocol = models.Protocol;

module.exports = {
  up: function(queryInterface, Sequelize) {
    let attributes = {
      shortTitle: 'Ortho Test',
      number: 'Ortho1002',
      title: '',
      sponsorId: 1,
      amendmentNumber: '',
      therapeuticArea: 'OrthoPedic',
      drugProjectId: 'OrthoPedic1001',
      compoundNumber: 'Ortho_xyz_1001',
      regulatoryAgencyNumbers: '',
      developmenetPhase: '',
      indication: '',
      trialTypeId: 1,
      createdBy: 1,
      createdAt: new Date(),
      startedAt: new Date(),
      endedAt: new Date(),
      studyNickName: 'Ortho Test',
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
