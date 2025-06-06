'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.addIndex('Statistics', ['playerId'], {
      unique: true
    })
  },

  async down (queryInterface, Sequelize) {
    queryInterface.removeIndex('Statistics', ['playerId'])
  }
};

//JH-NOTE: these should have await, could cause issues on production environment...
