'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('user_tricks', [{
            user_id: 1,
            trick_id: 1,
            created_at: new Date(),
            updated_at: new Date(),
        }], {});

        await queryInterface.bulkInsert('user_tricks', [{
            user_id: 1,
            trick_id: 2,
            created_at: new Date(),
            updated_at: new Date(),
        }], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('user_tricks', null, {truncate: true, restartIdentity: true});
    }
};
