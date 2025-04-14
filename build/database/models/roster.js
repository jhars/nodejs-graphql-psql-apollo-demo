'use strict';
const { uuid } = 'uuidv4';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Roster extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // seems like nonsense, only modeling aftert league/team relationship
            // this.belongsTo(models.Team, {
            //   foreignKey: 'teamId',
            //   allowNull: false,
            //   as: 'team'
            // })
            this.belongsTo(models.Team, {
                foreignKey: 'teamId',
                allowNull: false,
                as: 'team'
            });
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
        goalie: DataTypes.INTEGER,
        defense1: DataTypes.INTEGER,
        defense2: DataTypes.INTEGER,
        midfield1: DataTypes.INTEGER,
        midfield2: DataTypes.INTEGER,
        fo: DataTypes.INTEGER,
        lsm: DataTypes.INTEGER,
        attack1: DataTypes.INTEGER,
        attack2: DataTypes.INTEGER,
        bench1: DataTypes.INTEGER,
        bench2: DataTypes.INTEGER,
        bench3: DataTypes.INTEGER,
        bench4: DataTypes.INTEGER
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
