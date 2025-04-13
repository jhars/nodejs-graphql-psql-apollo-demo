'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.renameColumn('StatLines','playerStatisticsId', 'statisticsId');

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.renameColumn('StatLines','statisticsId', 'playerStatisticsId');
  }
};
