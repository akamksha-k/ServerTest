'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface
      .changeColumn('Protocols', 'title', {
        type: Sequelize.STRING(4096),
        allowNull: true,
      });
  },
  down: function(queryInterface, Sequelize) {
     queryInterface
      .changeColumn('Protocols', 'title', {
        type: Sequelize.STRING,
        allowNull: true,
      });
  },
};
