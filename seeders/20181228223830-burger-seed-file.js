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
   return queryInterface.bulkInsert('Customers', [
    { name: 'Fabian', createdAt: new Date(), updatedAt: new Date()},
    {
      name: 'Josue', createdAt: new Date(), updatedAt: new Date()
    },
    {
      name: 'Vivian', createdAt: new Date(), updatedAt: new Date()
    }

  ], {}).then(function () { 
     return queryInterface.bulkInsert('Burgers', [
    { burger_name: 'Cheese burger', createdAt: new Date(), updatedAt: new Date(),CustomerId:1},
    {
      burger_name: 'Double cheese burger', createdAt: new Date(), updatedAt: new Date(),CustomerId:2
    },
    {
      burger_name: 'Bacon burger', createdAt: new Date(), updatedAt: new Date(),CustomerId:3
    }

  ], {});
  
  })
  },down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */

   return queryInterface.dropTable('Burgers');
  }
};
