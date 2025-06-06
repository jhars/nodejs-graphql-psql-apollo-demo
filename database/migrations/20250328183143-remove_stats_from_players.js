'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Players','gamesPlayed', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','points', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','scoringPoints', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','goals', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','onePointGoals', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','twoPointGoals', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','assists', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','shots', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','shotPct', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','shotsOnGoal', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','shotsOnGoalPct', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','twoPointShots', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','twoPointShotPct', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','twoPointShotsOnGoal', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','twoPointShotsOnGoalPct', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','turnovers', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','causedTurnovers', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','groundBalls', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','touches', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','totalPasses', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','faceoffPct', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','faceoffsWon', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','faceoffsLost', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','faceoffs', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','saa', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','saves', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','savePct', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','scoresAgainst', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','twoPointGoalsAgainst', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','numPenalties', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','pim', Sequelize.DOUBLE);
    await queryInterface.removeColumn('Players','powerPlayGoals', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','powerPlayShots', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','powerPlayGoalsAgainst', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','shortHandedGoals', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','shortHandedShots', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','unassistedGoals', Sequelize.INTEGER);
    await queryInterface.removeColumn('Players','assistedGoals', Sequelize.INTEGE);
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.addColumn('Players','gamesPlayed', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','points', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','scoringPoints', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','goals', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','onePointGoals', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','twoPointGoals', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','assists', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','shots', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','shotPct', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','shotsOnGoal', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','shotsOnGoalPct', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','twoPointShots', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','twoPointShotPct', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','twoPointShotsOnGoal', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','twoPointShotsOnGoalPct', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','turnovers', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','causedTurnovers', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','groundBalls', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','touches', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','totalPasses', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','faceoffPct', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','faceoffsWon', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','faceoffsLost', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','faceoffs', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','saa', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','saves', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','savePct', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','scoresAgainst', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','twoPointGoalsAgainst', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','numPenalties', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','pim', Sequelize.DOUBLE);
    await queryInterface.addColumn('Players','powerPlayGoals', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','powerPlayShots', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','powerPlayGoalsAgainst', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','shortHandedGoals', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','shortHandedShots', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','unassistedGoals', Sequelize.INTEGER);
    await queryInterface.addColumn('Players','assistedGoals', Sequelize.INTEGE);
  }
};
