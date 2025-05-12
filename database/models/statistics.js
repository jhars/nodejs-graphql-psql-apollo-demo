'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Statistics extends Model {
    
    static associate(models) {

      // this.belongsTo(models.Player, {
      //   foreignKey: 'playerId',
      //   as: 'statistics'
      // })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek01',
        allowNull: true,
      })
      
      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek02',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek03',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek04',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek05',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek06',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek07',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek08',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek09',
        allowNull: true,
      })
      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineWeek10',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineCurrentSeason',
        allowNull: true,
      })

      this.hasOne(models.StatLine, {
        foreignKey: 'statisticsId',
        as: 'statLineLastSeason',
        allowNull: true,
      })

    }
  }
  // Also Included statLineWeek1-10, which should be
  // abstracted out to a season config table-script
  // However, more curiously pressing, I am
  // Unable to add statLineCurrentSeason OR statLineLastSeason
  // to init method of this model becasue of reference higher
  // in file 
  Statistics.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()')
    },
    playerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      unique: true
    },
    season: DataTypes.STRING,
    // statLineLastSeason: DataTypes.UUID,
    // statLineCurrentSeason: DataTypes.UUID,
  }, {
    sequelize,
    modelName: 'Statistics',
  });
  return Statistics;
};