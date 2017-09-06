'use strict';
const models = require('../models');
const State = models.State;

module.exports = {
  up: (queryInterface, Sequelize) => {
    return State.create({
        id: 5,
        state: 'Completed-With-Escalation',
        createdAt: new Date(),
        updatedAt: new Date(),
    })
      .then(() => {
        console.log(`State Template`);
      })
      .catch(error => {
        console.log(`ERROR ${error}`);
      });
  },

  down: (queryInterface, Sequelize) => {
    return States.destroy({
        where: {
          id: 5,
        },
      })
  },
};
