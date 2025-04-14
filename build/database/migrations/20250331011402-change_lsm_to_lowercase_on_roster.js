'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.renameColumn('Rosters', 'LSM', 'lsm');
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.renameColumn('Rosters', 'lsm', 'LSM');
    }
};
