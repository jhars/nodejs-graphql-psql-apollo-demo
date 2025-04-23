'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('ActivePlayersForLeagues', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      leagueId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Leagues',
          key: 'id'
        },
        allowNull: false
      },
      teamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id'
        },
        allowNull: false
      },
      playerId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        },
        allowNull: false
      },
      position: {
        type: Sequelize.ENUM("G","D","LSM","SSDM","FO","M","A"),
        allowNull: false
      },
      rosterSpot: {
        type: Sequelize.ENUM("GOALIE","DEFENSE1","DEFENSE2","LSM","SSDM","FO","MIDFIELD1","MIDFIELD2","ATTACK1","ATTACK2","BENCH1","BENCH2","BENCH3","BENCH4"),
        allowNull: false
      },
      rosterId: {
        type: Sequelize.UUID,
        references: {
          model: 'Rosters',
          key: 'id'
        },
        allowNull: false
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('ActivePlayersForLeagues');
  }
};