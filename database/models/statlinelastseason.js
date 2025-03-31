'use strict';
const { uuid } = 'uuidv4';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class StatLineLastSeason extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  StatLineLastSeason.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()')
    },
    playerId: DataTypes.INTEGER,
    season: DataTypes.STRING,
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
    modelName: 'StatLineLastSeason',
    freezeTableName: true
  });
  //JH-NOTE: do i really even need this?
  // this.addHook('beforeSave', async (StatLineLastSeason) => {
  //   return StatLineLastSeason.id = uuid();
  // });
  return StatLineLastSeason;
};