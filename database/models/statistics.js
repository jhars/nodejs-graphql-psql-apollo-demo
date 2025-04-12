'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    
    static associate(models) {

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek01',
        allowNull: true,
      })
      
      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek02',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek03',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek04',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek05',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek06',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek07',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek08',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek09',
        allowNull: true,
        // inverse: {
        //   as: 'week09'
        // }
      })
      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineWeek10',
        allowNull: true,
        // inverse: {
        //   as: 'week10'
        // }
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineCurrentSeason',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'playerStatisticsId',
        as: 'statLineLastSeason',
        allowNull: true,
        // inverse: {
        //   as: 'lastSeason'
        // }
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