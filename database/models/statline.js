'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatLine extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      this.belongsTo(models.Statistics, {
       foreignKey: 'statLineLastSeasonId',
        foreignKey: 'playerStatisticsId',
        as: 'statLineLastSeason',
        // inverse: {
        //   as: 'week10'  
        // }
      })

      // this.belongsTo(models.Statistics, {
      //   foreignKey: 'statLineWeek10Id',
      //   as: 'statLineWeek10',
      //   // inverse: {
      //   //   as: 'week10'  
      //   // }
      // })

      //==================================
      // this.belongsTo(models.Statistics, {
      // // this.hasOne(models.Statistics, {
      //   foreignKey: 'playerStatisticsId',
      //   // targetKey: 'playerStatisticsId',
      //   // as: 'stat',
      //   inverse: {
      //     as: 'week10'  
      //   }
      // })

      // this.belongsTo(models.Statistics, {
      // // this.hasOne(models.Statistics, {
      //   foreignKey: 'statLineLastSeasonId',
      //   // as: 'statLineLastSeason',
      //   inverse: {
      //     as: 'lastSeason'
      //   }
      // })
    }
  }
  StatLine.init({
    playerId: DataTypes.INTEGER,
    playerStatisticsId: DataTypes.UUID,
    season: DataTypes.STRING,
    weekNumber: DataTypes.INTEGER,
    gamesPlayed: DataTypes.INTEGER,
    points: DataTypes.INTEGER,
    scoringPoints: DataTypes.INTEGER,
    goals: DataTypes.INTEGER,
    onePointGoals: DataTypes.INTEGER,
    twoPointGoals: DataTypes.INTEGER,
    assists: DataTypes.INTEGER,
    shots: DataTypes.INTEGER,
    shotPct: DataTypes.DOUBLE,
    shotsOnGoal: DataTypes.INTEGER,
    shotsOnGoalPct: DataTypes.DOUBLE,
    twoPointShots: DataTypes.INTEGER,
    twoPointShotPct: DataTypes.DOUBLE,
    twoPointShotsOnGoal: DataTypes.INTEGER,
    twoPointShotsOnGoalPct: DataTypes.DOUBLE,
    turnovers: DataTypes.INTEGER,
    causedTurnovers: DataTypes.INTEGER,
    groundBalls: DataTypes.INTEGER,
    touches: DataTypes.INTEGER,
    totalPasses: DataTypes.INTEGER,
    faceoffPct: DataTypes.DOUBLE,
    faceoffsWon: DataTypes.INTEGER,
    faceoffsLost: DataTypes.INTEGER,
    faceoffs: DataTypes.INTEGER,
    saa: DataTypes.DOUBLE,
    saves: DataTypes.INTEGER,
    savePct: DataTypes.DOUBLE,
    scoresAgainst: DataTypes.INTEGER,
    twoPointGoalsAgainst: DataTypes.INTEGER,
    numPenalties: DataTypes.INTEGER,
    pim: DataTypes.DOUBLE,
    powerPlayGoals: DataTypes.INTEGER,
    powerPlayShots: DataTypes.INTEGER,
    powerPlayGoalsAgainst: DataTypes.INTEGER,
    shortHandedGoals: DataTypes.INTEGER,
    shortHandedShots: DataTypes.INTEGER,
    unassistedGoals: DataTypes.INTEGER,
    assistedGoals: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'StatLine',
  });
  return StatLine;
};