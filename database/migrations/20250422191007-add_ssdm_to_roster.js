'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('Rosters','ssdmID',{
      type: Sequelize.INTEGER,
      references: {
        model: 'Players',
        key: 'id'
      }
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.removeColumn('Rosters','ssdmID',{
      type: Sequelize.INTEGER,
      references: {
        model: 'Players',
        key: 'id'
      }
    });
  }
};