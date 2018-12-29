'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Burgers', [
    { burger_name: 'Cheese burger', createdAt: Date.now(), updatedAt: Date.now()},
    {
      burger_name: 'Double cheese burger', createdAt: Date.now(), updatedAt: Date.now()
    },
    {
      burger_name: 'Bacon burger', createdAt: Date.now(), updatedAt: Date.now()
    }

  ], {});


  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.dropTable('Burgers');
  }
};
