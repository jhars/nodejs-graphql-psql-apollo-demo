'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Statistics', 'statLineLastSeasonId', {
      type: Sequelize.UUID,
      references: {
        model: 'StatLines',
        key: 'id'
      }
    })

    await queryInterface.changeColumn('Statistics', 'statLineWeek10Id', {
      type: Sequelize.UUID,
      references: {
        model: 'StatLines',
        key: 'id'
      }
    })

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.changeColumn('Statistics', 'statLineLastSeasonId', {
      type: Sequelize.UUID
    })

    await queryInterface.changeColumn('Statistics', 'statLineWeek10Id', {
      type: Sequelize.UUID
    })
  }
};
