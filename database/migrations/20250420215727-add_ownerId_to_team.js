'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Teams','ownerId', Sequelize.UUID);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Teams','ownerId', Sequelize.UUID);
  }
};