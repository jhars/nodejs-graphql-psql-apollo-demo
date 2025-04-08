'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasOne(models.StatLine, {
      //   foreignKey: 'playerStatisticsId',
      //   allowNull: false,
      //   as: 'statLineLastSeason'
      // })
      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        allowNull: false,
        as: 'statLineLastSeason'
      })
    }
  }
  Statistics.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()')
    },
    playerId: DataTypes.INTEGER,
    season: DataTypes.STRING,
    statLineLastSeasonId: {
      allowNull: false,
      primaryKey: false,
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()')
    },
    statLineCurrentSeasonId: DataTypes.UUID,
    statLineWeek01Id: DataTypes.UUID,
    statLineWeek02Id: DataTypes.UUID,
    statLineWeek03Id: DataTypes.UUID,
    statLineWeek04Id: DataTypes.UUID,
    statLineWeek05Id: DataTypes.UUID,
    statLineWeek06Id: DataTypes.UUID,
    statLineWeek07Id: DataTypes.UUID,
    statLineWeek08Id: DataTypes.UUID,
    statLineWeek09Id: DataTypes.UUID,
    statLineWeek10Id: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'Statistics',
  });
  return Statistics;
};