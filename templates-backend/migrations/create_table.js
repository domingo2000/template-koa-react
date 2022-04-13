'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('resources', { 
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      }, 
      //foo_id: {
      //  type: Sequelize.INTEGER,
      //  primaryKey: true,
      //  references: {
      //    model: 'foos',
      //    key: 'id'
      //  },
      //  onDelete: 'CASCADE',
      //},
      //bar_id: {
      //  type: Sequelize.INTEGER,
      //  primaryKey: true,
      //  references: {
      //    model: 'bars',
      //    key: 'id'
      //  },
      //  onDelete: 'CASCADE',
      //},
      name: Sequelize.STRING,
      created_at: Sequelize.DATE,
      updated_at: Sequelize.DATE
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('resources');
  }
};
