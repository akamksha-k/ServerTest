'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface
      .addColumn('Protocols', 'targetEndDate', {
        type: Sequelize.DATE,
        allowNull: true,
      })
      .then(() => {
        let eoy = new Date(new Date().getFullYear(), 11, 31);
        return queryInterface.sequelize.query(
          `UPDATE "Protocols" SET "targetEndDate" = ?`,
          { replacements: [eoy] }
        );
      });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Protocols', 'targetEndDate');
  },
};
