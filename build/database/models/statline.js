'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class StatLine extends Model {
        static associate(models) { }
    }
    StatLine.init({
        playerId: DataTypes.INTEGER,
        statisticsId: DataTypes.UUID,
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
