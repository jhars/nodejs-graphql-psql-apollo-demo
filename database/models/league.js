'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class League extends Model {
    static associate(models) {
      this.hasMany(models.Team, {
        foreignKey: 'leagueId',
        as: 'teams'
      })
    }
  }
  League.init({
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    title: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'League',
  });
  return League;
};