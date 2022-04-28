'use strict';

module.exports = {
    async up (queryInterface, Sequelize) {
        await queryInterface.bulkInsert('tricks', [{
            name: 'Backflip',
            description: 'Flip your backside',
            created_at: new Date(),
            updated_at: new Date(),
        }], {});

        await queryInterface.bulkInsert('tricks', [{
            name: 'Frontflip',
            description: 'Flip your frontside',
            created_at: new Date(),
            updated_at: new Date(),
        }], {});
    },

    async down (queryInterface, Sequelize) {
        await queryInterface.bulkDelete('tricks', null, {truncate: true, cascade: true, restartIdentity: true});
    }
};
