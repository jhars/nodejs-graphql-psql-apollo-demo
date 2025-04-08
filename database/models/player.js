'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Player extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // belongs to many teams

      this.hasOne(models.Statistics, {
        foreignKey: 'playerId',
        allowNull: false,
        as: 'statistics'
      })
    }
  }
  Player.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    position: DataTypes.STRING,
    jersey: DataTypes.INTEGER,
    team: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Player',
  });
  return Player;
};