'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Rosters','goalie', 'goalieID');
    await queryInterface.renameColumn('Rosters','defense1', 'defense1ID');
    await queryInterface.renameColumn('Rosters','defense2', 'defense2ID');
    await queryInterface.renameColumn('Rosters','midfield1', 'midfield1ID');
    await queryInterface.renameColumn('Rosters','midfield2', 'midfield2ID');
    await queryInterface.renameColumn('Rosters','fo', 'foID');
    await queryInterface.renameColumn('Rosters','lsm', 'lsmID');
    await queryInterface.renameColumn('Rosters','attack1', 'attack1ID');
    await queryInterface.renameColumn('Rosters','attack2', 'attack2ID');
    await queryInterface.renameColumn('Rosters','bench1', 'bench1ID');
    await queryInterface.renameColumn('Rosters','bench2', 'bench2ID');
    await queryInterface.renameColumn('Rosters','bench3', 'bench3ID');
    await queryInterface.renameColumn('Rosters','bench4', 'bench4ID');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Rosters','goalieID', 'goalie');
    await queryInterface.renameColumn('Rosters','defense1ID', 'defense1');
    await queryInterface.renameColumn('Rosters','defense2ID', 'defense2');
    await queryInterface.renameColumn('Rosters','midfield1ID', 'midfield1');
    await queryInterface.renameColumn('Rosters','midfield2ID', 'midfield2');
    await queryInterface.renameColumn('Rosters','foID', 'fo');
    await queryInterface.renameColumn('Rosters','lsmID', 'lsm');
    await queryInterface.renameColumn('Rosters','attack1ID', 'attack1');
    await queryInterface.renameColumn('Rosters','attack2ID', 'attack2');
    await queryInterface.renameColumn('Rosters','bench1ID', 'bench1');
    await queryInterface.renameColumn('Rosters','bench2ID', 'bench2');
    await queryInterface.renameColumn('Rosters','bench3ID', 'bench3');
    await queryInterface.renameColumn('Rosters','bench4ID', 'bench4');
  }
};
