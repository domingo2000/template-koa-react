'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.createTable('user_tricks', { 
            user_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'users',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            trick_id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                references: {
                    model: 'tricks',
                    key: 'id'
                },
                onDelete: 'CASCADE',
            },
            created_at: Sequelize.DATE,
            updated_at: Sequelize.DATE
        });
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.dropTable('user_tricks');
    }
};
