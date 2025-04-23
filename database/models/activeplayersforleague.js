'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ActivePlayersForLeague extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ActivePlayersForLeague.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()')
    },
    leagueId: DataTypes.INTEGER,
    teamId: DataTypes.INTEGER,
    playerId: DataTypes.INTEGER,
    position: DataTypes.ENUM('G','D','LSM','SSDM','FO','M','A'),
    rosterSpot: DataTypes.ENUM('GOALIE','DEFENSE1','DEFENSE2','LSM','SSDM','FO','MIDFIELD1','MIDFIELD2','ATTACK1','ATTACK2','BENCH1','BENCH2','BENCH3','BENCH4'),
    rosterId: DataTypes.UUID
  }, {
    sequelize,
    modelName: 'ActivePlayersForLeague',
  });
  return ActivePlayersForLeague;
};