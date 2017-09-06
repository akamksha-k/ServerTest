'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Users',
      [
        {
          username: 'Jill',
          firstname: 'Jill',
          lastname: 'Dening',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Jane',
          firstname: 'Jane',
          lastname: 'Fritz',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Michelle',
          firstname: 'Michelle',
          lastname: 'Hagans',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Ann',
          firstname: 'Ann',
          lastname: 'Jones',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Brandon ',
          firstname: 'Brandon ',
          lastname: 'Littell',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Sara',
          firstname: 'Sara',
          lastname: 'Sanzo',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Max',
          firstname: 'Max',
          lastname: 'Wade',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          username: 'Kat',
          firstname: 'Kat',
          lastname: 'Walker',
          password: 'password',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {});
  },
};
