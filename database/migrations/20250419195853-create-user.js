'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.createTable('Users', {
        id: {
          allowNull: false,
          primaryKey: true,
          type: Sequelize.UUID
        },
        username: {
          type: Sequelize.STRING,
          allowNull: false
        },
        email: {
          type: Sequelize.STRING,
          allowNull: false
        },
        leaguesOwned: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          allowNull: true
        },
        teamsOwned: {
          type: Sequelize.ARRAY(Sequelize.INTEGER),
          allowNull: true
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
      }, { transaction }
      )
      await queryInterface.addIndex('Users', ['email'], {
        unique: true,
        transaction
      });
      await queryInterface.addIndex('Users', ['username'], {
        unique: true,
        transaction
      });

      await transaction.commit();
    } catch (error) {
      transaction.rollback();
      throw error;
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();
    try {
      await queryInterface.dropTable('Users');
      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
    }
  }
};