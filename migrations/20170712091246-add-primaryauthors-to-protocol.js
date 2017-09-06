'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface
      .addColumn('Protocols', 'MedicId', {
        type: Sequelize.INTEGER,
        allowNull: true,
      })
      .then(() => {
        queryInterface.addColumn('Protocols', 'StatisticianId', {
          type: Sequelize.INTEGER,
          allowNull: true,
        });
      });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Protocols', 'MedicId').then(() => {
      queryInterface.removeColumn('Protocols', 'StatisticianId');
    });
  },
};
