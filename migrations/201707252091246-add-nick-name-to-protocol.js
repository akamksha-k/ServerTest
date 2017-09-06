'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface
      .addColumn('Protocols', 'studyNickName', {
        type: Sequelize.STRING,
        allowNull: true,
      })
      .then(() => {
        return queryInterface.sequelize.query(
          `UPDATE "Protocols" SET "studyNickName" = "number"`
        );
      });
  },
  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn('Protocols', 'studyNickName');
  },
};
