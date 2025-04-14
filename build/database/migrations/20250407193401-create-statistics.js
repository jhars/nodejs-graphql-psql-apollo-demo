'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Statistics', {
            id: {
                allowNull: false,
                primaryKey: true,
                type: Sequelize.UUID,
                defaultValue: Sequelize.literal('uuid_generate_v4()')
            },
            playerId: {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Players',
                    key: 'id'
                }
            },
            season: {
                type: Sequelize.STRING,
                allowNull: false
            },
            statLineLastSeasonId: {
                type: Sequelize.UUID
            },
            statLineCurrentSeasonId: {
                type: Sequelize.UUID
            },
            statLineWeek01Id: {
                type: Sequelize.UUID
            },
            statLineWeek02Id: {
                type: Sequelize.UUID
            },
            statLineWeek03Id: {
                type: Sequelize.UUID
            },
            statLineWeek04Id: {
                type: Sequelize.UUID
            },
            statLineWeek05Id: {
                type: Sequelize.UUID
            },
            statLineWeek06Id: {
                type: Sequelize.UUID
            },
            statLineWeek07Id: {
                type: Sequelize.UUID
            },
            statLineWeek08Id: {
                type: Sequelize.UUID
            },
            statLineWeek09Id: {
                type: Sequelize.UUID
            },
            statLineWeek10Id: {
                type: Sequelize.UUID
            },
            createdAt: {
                allowNull: false,
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal('NOW()'),
            },
            updatedAt: {
                allowNull: false,
                type: "TIMESTAMP",
                defaultValue: Sequelize.literal('NOW()'),
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Statistics');
    }
};
