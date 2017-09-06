'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.removeColumn('ProtocolSections', 'ReviewerId');
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.addColumn('ProtocolSections', 'ReviewerId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
