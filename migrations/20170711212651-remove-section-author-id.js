'use strict';

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.removeColumn('ProtocolSections', 'AuthorId');
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.addColumn('ProtocolSections', 'AuthorId', {
      type: Sequelize.INTEGER,
      allowNull: true,
    });
  },
};
