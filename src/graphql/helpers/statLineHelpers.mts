import dotenv from 'dotenv'
export const statLineData = (db) => {
	return [
      {
        model: db.StatLine,
        as: 'statLineWeek01',
        where: {weekNumber: 1},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek02',
        where: {weekNumber: 2},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek03',
        where: {weekNumber: 3},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek04',
        where: {weekNumber: 4},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek05',
        where: {weekNumber: 5},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek06',
        where: {weekNumber: 6},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek07',
        where: {weekNumber: 7},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek08',
        where: {weekNumber: 8},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek09',
        where: {weekNumber: 9},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineWeek10',
        where: {weekNumber: 10},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineCurrentSeason',
        where: {season: process.env.CURRENT_SEASON, weekNumber: null},
        allowNull: true,
        required: false,
      },
      {
        model: db.StatLine,
        as: 'statLineLastSeason',
        where: {season: process.env.LAST_SEASON, weekNumber: null},
        allowNull: true,
        required: false,
      },
    ]
}
