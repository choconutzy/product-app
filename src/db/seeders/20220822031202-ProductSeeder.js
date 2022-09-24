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
     await queryInterface.bulkInsert('Products', [
      {
        id:1,
        name: 'Ayam 500gr',
        category_id: 2,
        price:20000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:2,
        name: 'Taro',
        category_id: 4,
        price:2000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:3,
        name: 'Kapal Api 25gr',
        category_id: 4,
        price:1000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:4,
        name: 'Beras 5kg',
        category_id: 1,
        price:50000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:5,
        name: 'Slai Olai',
        category_id: 6,
        price:20000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:6,
        name: 'Buncis 200gr',
        category_id: 3,
        price:1500,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:7,
        name: 'Terong 200gr',
        category_id: 3,
        price:2000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:8,
        name: 'Telur 250gr',
        category_id: 1,
        price:6000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:9,
        name: 'Coca cola 400ml',
        category_id: 5,
        price:7000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        id:10,
        name: 'Udang 200gr',
        category_id: 1,
        price:20000,
        desc:"this is lorem ipsum sdfhbuidfbuohefudusj",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('Products', null, {});
  }
};
