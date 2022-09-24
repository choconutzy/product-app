'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('Categories', [
      {
        id: 1,
        name: 'Sembako',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 2,
        name: 'Daging',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 3,
        name: 'Sayur',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 4,
        name: 'Snack',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 5,
        name: 'Minuman',
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id: 6,
        name: 'Camilan',
        created_at: new Date(),
        updated_at: new Date(),
      },
    ])
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Categories', null, {})
  }
};
