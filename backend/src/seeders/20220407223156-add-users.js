'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {

        await queryInterface.bulkInsert('users', [{
            name: 'John Doe',
            created_at: new Date(),
            updated_at: new Date(),
        }], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('users', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
