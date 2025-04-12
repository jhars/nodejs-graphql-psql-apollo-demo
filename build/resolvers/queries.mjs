export default {
    leagues: async (root, args, { db }, info) => {
        try {
            // const cacheControl = cacheControlFromInfo(info)
            // cacheControl.setCacheHint({ maxAge: 300, scope: 'PUBLIC' });
            return await db.League.findAll({
                include: [
                    {
                        model: db.Team,
                        as: 'teams',
                        include: {
                            model: db.Roster,
                            as: 'roster',
                        }
                    }
                ]
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    teams: async (root, args, { db }, info) => {
        try {
            // const where = args.leagueId ? { leagueId: args.leagueId } : {};
            //JH-NOTE: unreadable, and may not work, but...
            // should handle case if given both parameters
            // uses teamsId if its there, (would not use leagueId)
            // then checks for leagueId, and should return teams in league succesfully
            // ignores sleague Id if provided a teamId
            // is this good graphql form?
            const where = args.teamsId ? { id: args.teamsId } : args.leagueId ? { leagueId: args.leagueId } : {};
            return await db.Team.findAll({
                include: [
                    {
                        model: db.League,
                        as: 'league'
                    },
                    {
                        model: db.Roster,
                        as: 'roster',
                    },
                ],
                where
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    players: async (root, args, { db }, info) => {
        try {
            // see above JH-NOTE for why I may want to use this
            // const where = args.playerId ? { id: args.playerId } : args.teamsId ? { teamsId: args.teamsId } : {};
            // const players = await db.Player.findAll({where});
            const players = await db.Player.findAll({
                include: [
                    {
                        model: db.Statistics,
                        as: 'statistics',
                        include: [
                            {
                                model: db.StatLine,
                                as: 'statLineWeek01',
                                where: { weekNumber: 1 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek02',
                                where: { weekNumber: 2 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek03',
                                where: { weekNumber: 3 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek04',
                                where: { weekNumber: 4 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek05',
                                where: { weekNumber: 5 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek06',
                                where: { weekNumber: 6 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek07',
                                where: { weekNumber: 7 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek08',
                                where: { weekNumber: 8 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek09',
                                where: { weekNumber: 9 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineWeek10',
                                where: { weekNumber: 10 },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineCurrentSeason',
                                where: { season: "2025", weekNumber: null },
                                allowNull: true,
                                required: false,
                            },
                            {
                                model: db.StatLine,
                                as: 'statLineLastSeason',
                                where: { season: "2024", weekNumber: null },
                                allowNull: true,
                                required: false,
                            },
                        ]
                    }
                ] //top level include
            });
            return players;
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
};
