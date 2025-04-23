'use strict';
const { uuid } = 'uuidv4';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {

  class Roster extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    
    static associate(models) {

      this.belongsTo(models.Team, {
        foreignKey: 'teamId',
        allowNull: false,
        as: 'team'
      })

      this.belongsTo(models.Player, {
        foreignKey: 'goalieID',
        as: 'goalie',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'defense1ID',
        as: 'defense1',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'defense2ID',
        as: 'defense2',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'lsmID',
        as: 'lsm',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'ssdmID',
        as: 'ssdm',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'foID',
        as: 'fo',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'midfield1ID',
        as: 'midfield1',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'midfield2ID',
        as: 'midfield2',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'attack1ID',
        as: 'attack1',
        allowNull: true,
      })

      this.belongsTo(models.Player, {
        foreignKey: 'attack2ID',
        as: 'attack2',
        allowNull: true,
      })

    }
  }
  //this works for generating roster
  Roster.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: sequelize.literal('uuid_generate_v4()')
    },
    teamId: DataTypes.INTEGER,
    goalieID: DataTypes.INTEGER,
    defense1ID: DataTypes.INTEGER,
    defense2ID: DataTypes.INTEGER,
    midfield1ID: DataTypes.INTEGER,
    midfield2ID: DataTypes.INTEGER,
    foID: DataTypes.INTEGER,
    lsmID: DataTypes.INTEGER,
    attack1ID: DataTypes.INTEGER,
    attack2ID: DataTypes.INTEGER,
    bench1ID: DataTypes.INTEGER,
    bench2ID: DataTypes.INTEGER,
    bench3ID: DataTypes.INTEGER,
    bench4ID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Roster',
  });
  //JH-NOTE: not tested, may not need, could cause problems...
  // this.addHook('beforeSave', async (roster) => {
  //     return roster.id = uuid();
  //   });
  return Roster;
};