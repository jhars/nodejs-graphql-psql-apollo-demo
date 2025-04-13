'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.dropTable('StatLineLastSeason');

  },
  async down(queryInterface, Sequelize) {
    await queryInterface.sequelize.query('CREATE EXTENSION IF NOT EXISTS "uuid-ossp";')
    await queryInterface.createTable('StatLineLastSeason', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.literal('uuid_generate_v4()')
      },
      playerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      season: {
        type: Sequelize.STRING
      },
      gamesPlayed: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      points: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      scoringPoints: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      goals: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      onePointGoals: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      twoPointGoals: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      assists: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      shots: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      shotPct: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      shotsOnGoal: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      shotsOnGoalPct: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      twoPointShots: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      twoPointShotPct: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      twoPointShotsOnGoal: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      twoPointShotsOnGoalPct: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      turnovers: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      causedTurnovers: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      groundBalls: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      touches: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      totalPasses: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      faceoffPct: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      faceoffsWon: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      faceoffsLost: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      faceoffs: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      saa: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      saves: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      savePct: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      scoresAgainst: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      twoPointGoalsAgainst: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      numPenalties: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      pim: {
        type: Sequelize.DOUBLE,
        allowNull: true
      },
      powerPlayGoals: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      powerPlayShots: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      powerPlayGoalsAgainst: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      shortHandedGoals: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      shortHandedShots: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      unassistedGoals: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      assistedGoals: {
        type: Sequelize.INTEGER,
        allowNull: true
      },
      createdAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal('NOW()'),
      },
      updatedAt: {
        allowNull: false,
        type: "TIMESTAMP",
        defaultValue: Sequelize.literal('NOW()'),
      }
    });
  }
};