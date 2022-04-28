'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('tricks', { 
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER,
            }, 
            name: Sequelize.STRING,
            description: Sequelize.STRING,
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('tricks');
    }
};
