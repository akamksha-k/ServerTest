'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'States',
      [
        {
          id: 1,
          state: 'Not-Started',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 2,
          state: 'In-Progress',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          id: 3,
          state: 'Completed',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('States', null, {});
  },
};
