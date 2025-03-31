'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Rosters', {
      id: {
        allowNull: false,
        primaryKey: true,
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4
      },
      teamId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Teams',
          key: 'id'
        }
      },
      goalie: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      defense1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      defense2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      midfield1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      midfield2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      fogo: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      LSM: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      attack1: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
      },
      attack2: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Players',
          key: 'id'
        }
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
    await queryInterface.dropTable('Rosters');
  }
};