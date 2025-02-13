'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class League extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.hasMany(models.Team, {
        foreignKey: 'leagueId'
      })
    }
  }
  League.init({
    title: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'League',
  });
  return League;
};