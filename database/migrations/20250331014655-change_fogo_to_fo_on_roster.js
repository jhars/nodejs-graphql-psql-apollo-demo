'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Rosters','fogo', 'fo');
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('Rosters','fo', 'fogo');
  }
};
