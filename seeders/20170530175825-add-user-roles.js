'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'UserRoles',
      [
        {
          UserId: 1,
          RoleId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 2,
          RoleId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          UserId: 3,
          RoleId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('UserRoles', null, {});
  },
};
