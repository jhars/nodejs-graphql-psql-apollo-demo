'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
      await queryInterface.removeColumn('Statistics','statLineLastSeasonId', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineCurrentSeasonId', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek01Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek02Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek03Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek04Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek05Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek06Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek07Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek08Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek09Id', Sequelize.UUID);
      await queryInterface.removeColumn('Statistics','statLineWeek10Id', Sequelize.UUID);

  },
  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Statistics','statLineLastSeasonId', {
      allowNull: false,
      primaryKey: false,
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()')
    });
    await queryInterface.addColumn('Statistics','statLineCurrentSeasonId', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek01Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek02Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek03Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek04Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek05Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek06Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek07Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek08Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek09Id', Sequelize.UUID);
    await queryInterface.addColumn('Statistics','statLineWeek10Id', Sequelize.UUID);
  }
};
