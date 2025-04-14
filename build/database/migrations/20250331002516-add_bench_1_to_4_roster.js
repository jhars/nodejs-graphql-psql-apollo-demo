'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.addColumn('Rosters', 'bench1', Sequelize.INTEGER);
        await queryInterface.addColumn('Rosters', 'bench2', Sequelize.INTEGER);
        await queryInterface.addColumn('Rosters', 'bench3', Sequelize.INTEGER);
        await queryInterface.addColumn('Rosters', 'bench4', Sequelize.INTEGER);
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.removeColumn('Rosters', 'bench1', Sequelize.INTEGER);
        await queryInterface.removeColumn('Rosters', 'bench2', Sequelize.INTEGER);
        await queryInterface.removeColumn('Rosters', 'bench3', Sequelize.INTEGER);
        await queryInterface.removeColumn('Rosters', 'bench4', Sequelize.INTEGER);
    }
};
