'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('table_name', 'column_name');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('table_name', 'column_name', Sequelize.STRING);
  }
};
