'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface
      .changeColumn('Protocols', 'studyNickName', {
        type: Sequelize.STRING,
        allowNull: false,
      })
      .then(() => {
        return queryInterface.changeColumn('Protocols', 'targetEndDate', {
          type: Sequelize.DATE,
          allowNull: false,
        });
      });
  },

  down: function(queryInterface, Sequelize) {
    queryInterface
      .changeColumn('Protocols', 'studyNickName', {
        type: Sequelize.STRING,
        allowNull: true,
      })
      .then(() => {
        return queryInterface.changeColumn('Protocols', 'targetEndDate', {
          type: Sequelize.DATE,
          allowNull: true,
        });
      });
  },
};
