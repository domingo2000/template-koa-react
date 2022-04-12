'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('foo_bars', [{
      fooId: 1,
      barId: 1,
      created_at: new Date(),
      updated_at: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('foo_bars', null, {});
  }
};
