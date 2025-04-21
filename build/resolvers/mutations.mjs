import { Op, Sequelize } from 'sequelize';
export default {
    addLeague: async (parent, args, { db }, info) => {
        try {
            await db.League.create({
                title: args.title,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            return await db.League.findAll();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    addTeam: async (parent, args, { db }, info) => {
        try {
            const team = await db.Team.create({
                name: args.name,
                leagueId: args.leagueId,
                ownerId: args.ownerId,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            await db.Roster.create({
                teamId: team.id,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            //not sure we need where clause since leagueId is required (non-nullable) for this mutation
            const where = args.leagueId ? { id: args.leagueId } : {};
            return await db.Team.findAll({
                include: [
                    {
                        model: db.League,
                        as: 'league',
                        where
                    }
                ]
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
            return error;
        }
    },
    addPlayerToTeam: async (parent, args, { db }, info) => {
        try {
            const roster = await db.Roster.findOne({
                include: [
                    {
                        model: db.Team,
                        as: 'team',
                        where: { id: args.teamId }
                    }
                ]
            });
            roster.setDataValue(`${args.rosterSpot.toLowerCase()}ID`, args.playerId);
            // roster.setDataValue(args.rosterSpot.toLowerCase(), args.playerId)
            await roster.save();
            return await db.Team.findOne({
                include: [
                    {
                        model: db.Roster,
                        as: 'roster',
                        include: [
                            {
                                model: db.Player,
                                as: 'goalie',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'lsm',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'fo',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'attack1',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'attack2',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'midfield1',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'midfield2',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'defense1',
                                required: false,
                            },
                            {
                                model: db.Player,
                                as: 'defense2',
                                required: false,
                            },
                        ]
                    }
                ],
                where: args.teamId
            });
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    },
    addStatLineForWeek: async (parent, args, { db }, info) => {
        try {
            const statistics = await db.Statistics.findOne({
                where: { playerId: args.playerId }
            });
            const stats = {
                playerId: statistics.playerId,
                statisticsId: statistics.id,
                season: process.env.CURRENT_SEASON,
                weekNumber: args.weekNumber,
                gamesPlayed: args.gamesPlayed,
                points: args.statLine.points,
                scoringPoints: args.statLine.scoringPoints,
                goals: args.statLine.goals,
                onePointGoals: args.statLine.onePointGoals,
                twoPointGoals: args.statLine.twoPointGoals,
                assists: args.statLine.assists,
                shots: args.statLine.shots,
                shotPct: args.statLine.goals / args.statLine.shots,
                shotsOnGoal: args.statLine.shotsOnGoal,
                shotsOnGoalPct: args.statLine.goals / args.statLine.shotsOnGoal,
                twoPointShots: args.statLine.twoPointShots,
                twoPointShotPct: args.statLine.twoPointGoals / args.statLine.twoPointShots,
                twoPointShotsOnGoal: args.statLine.twoPointShotsOnGoal,
                twoPointShotsOnGoalPct: args.statLine.twoPointGoals / args.statLine.twoPointShotsOnGoal,
                turnovers: args.statLine.turnovers,
                causedTurnovers: args.statLine.causedTurnovers,
                groundBalls: args.statLine.groundBalls,
                touches: args.statLine.touches,
                totalPasses: args.statLine.totalPasses,
                faceoffPct: args.statLine.faceoffsWon / args.statLine.faceoffs,
                faceoffsWon: args.statLine.faceoffsWon,
                faceoffsLost: args.statLine.faceoffsLost,
                faceoffs: args.statLine.faceoffs,
                saa: args.statLine.scoresAgainst / args.statLine.gamesPlayed,
                saves: args.statLine.saves,
                savePct: args.statLine.saves / (args.statLine.saves + args.statLine.scoresAgainst),
                scoresAgainst: args.statLine.scoresAgainst,
                twoPointGoalsAgainst: args.statLine.twoPointGoalsAgainst,
                numPenalties: args.statLine.numPenalties,
                pim: args.statLine.pim,
                powerPlayGoals: args.statLine.powerPlayGoals,
                powerPlayShots: args.statLine.powerPlayShots,
                powerPlayGoalsAgainst: args.statLine.powerPlayGoalsAgainst,
                shortHandedGoals: args.statLine.shortHandedGoals,
                shortHandedShots: args.statLine.shortHandedShots,
                unassistedGoals: args.statLine.unassistedGoals,
                assistedGoals: args.statLine.assistedGoals
            };
            // UPSERT may be a more appropriate command in the future
            // for dealing with real time data updates
            // probably not the place for Web Sockets initial implemntation (better for mobile app query at first)
            // however ,on 'game day' it would probably be appropriate to have websockets here as well
            const [statLine, created] = await db.StatLine.findOrCreate({
                where: {
                    statisticsId: statistics.id,
                    weekNumber: args.weekNumber
                },
                defaults: stats
            });
            if (!created) {
                await statLine.update(stats);
            }
            // is this necessary? In consideration of future Hooks?
            await statLine.save();
            const allWeeksStatLines = await db.StatLine.findAll({
                where: {
                    statisticsId: statistics.id,
                    weekNumber: {
                        [Op.not]: null
                    },
                    season: process.env.CURRENT_SEASON
                },
                attributes: [
                    [Sequelize.fn('SUM', Sequelize.col('gamesPlayed')), 'totalGamesPlayed'],
                    [Sequelize.fn('SUM', Sequelize.col('points')), 'totalPoints'],
                    [Sequelize.fn('SUM', Sequelize.col('scoringPoints')), 'totalScoringPoints'],
                    [Sequelize.fn('SUM', Sequelize.col('goals')), 'totalGoals'],
                    [Sequelize.fn('SUM', Sequelize.col('onePointGoals')), 'totalOnePointGoals'],
                    [Sequelize.fn('SUM', Sequelize.col('twoPointGoals')), 'totalTwoPointGoals'],
                    [Sequelize.fn('SUM', Sequelize.col('assists')), 'totalAssists'],
                    [Sequelize.fn('SUM', Sequelize.col('shots')), 'totalShots'],
                    [Sequelize.fn('SUM', Sequelize.col('shotsOnGoal')), 'totalShotsOnGoal'],
                    [Sequelize.fn('SUM', Sequelize.col('twoPointShots')), 'totalTwoPointShots'],
                    [Sequelize.fn('SUM', Sequelize.col('twoPointShotsOnGoal')), 'totalTwoPointShotsOnGoal'],
                    [Sequelize.fn('SUM', Sequelize.col('turnovers')), 'totalTurnovers'],
                    [Sequelize.fn('SUM', Sequelize.col('causedTurnovers')), 'totalCausedTurnovers'],
                    [Sequelize.fn('SUM', Sequelize.col('groundBalls')), 'totalGroundBalls'],
                    [Sequelize.fn('SUM', Sequelize.col('totalPasses')), 'totalPassesTotal'],
                    [Sequelize.fn('SUM', Sequelize.col('faceoffsWon')), 'totalFaceoffsWon'],
                    [Sequelize.fn('SUM', Sequelize.col('faceoffsLost')), 'totalFaceoffsLost'],
                    [Sequelize.fn('SUM', Sequelize.col('faceoffs')), 'totalFaceoffs'],
                    [Sequelize.fn('SUM', Sequelize.col('saves')), 'totalSaves'],
                    [Sequelize.fn('SUM', Sequelize.col('scoresAgainst')), 'totalScoresAgainst'],
                    [Sequelize.fn('SUM', Sequelize.col('twoPointGoalsAgainst')), 'totalTwoPointGoalsAgainst'],
                    [Sequelize.fn('SUM', Sequelize.col('numPenalties')), 'totalNumPenalties'],
                    [Sequelize.fn('SUM', Sequelize.col('pim')), 'totalPim'],
                    [Sequelize.fn('SUM', Sequelize.col('powerPlayShots')), 'totalPowerPlayShots'],
                    [Sequelize.fn('SUM', Sequelize.col('powerPlayShots')), 'totalPowerPlayShots'],
                    [Sequelize.fn('SUM', Sequelize.col('powerPlayGoalsAgainst')), 'totalPowerPlayGoalsAgainst'],
                    [Sequelize.fn('SUM', Sequelize.col('shortHandedGoals')), 'totalShortHandedGoals'],
                    [Sequelize.fn('SUM', Sequelize.col('unassistedGoals')), 'totalUnassistedGoals'],
                    [Sequelize.fn('SUM', Sequelize.col('assistedGoals')), 'totalAssistedGoals'],
                ]
            });
            //Incremental Values
            const totalGamesPlayed = await allWeeksStatLines[0].get().totalGamesPlayed;
            const totalPoints = await allWeeksStatLines[0].get().totalPoints;
            const totalScoringPoints = await allWeeksStatLines[0].get().totalScoringPoints;
            const totalGoals = await allWeeksStatLines[0].get().totalGoals;
            const totalOnePointGoals = await allWeeksStatLines[0].get().totalOnePointGoals;
            const totalTwoPointGoals = await allWeeksStatLines[0].get().totalTwoPointGoals;
            const totalAssists = await allWeeksStatLines[0].get().totalAssists;
            const totalShots = await allWeeksStatLines[0].get().totalShots;
            const totalShotsOnGoal = await allWeeksStatLines[0].get().totalShotsOnGoal;
            const totalTwoPointShots = await allWeeksStatLines[0].get().totalTwoPointShots;
            const totalTwoPointShotsOnGoal = await allWeeksStatLines[0].get().totalTwoPointShotsOnGoal;
            const totalTurnovers = await allWeeksStatLines[0].get().totalTurnovers;
            const totalCausedTurnovers = await allWeeksStatLines[0].get().totalCausedTurnovers;
            const totalGroundBalls = await allWeeksStatLines[0].get().totalGroundBalls;
            const totalTouches = await allWeeksStatLines[0].get().totalTouches;
            const totalPassesTotal = await allWeeksStatLines[0].get().totalPassesTotal;
            const totalFaceoffsWon = await allWeeksStatLines[0].get().totalFaceoffsWon;
            const totalFaceoffsLost = await allWeeksStatLines[0].get().totalFaceoffsLost;
            const totalFaceoffs = await allWeeksStatLines[0].get().totalFaceoffs;
            const totalSaves = await allWeeksStatLines[0].get().totalSaves;
            const totalScoresAgainst = await allWeeksStatLines[0].get().totalScoresAgainst;
            const totalTwoPointGoalsAgainst = await allWeeksStatLines[0].get().totalTwoPointGoalsAgainst;
            const totalNumPenalties = await allWeeksStatLines[0].get().totalNumPenalties;
            const totalPim = await allWeeksStatLines[0].get().totalPim;
            const totalPowerPlayGoals = await allWeeksStatLines[0].get().totalPowerPlayGoals;
            const totalPowerPlayShots = await allWeeksStatLines[0].get().totalPowerPlayShots;
            const totalPowerPlayGoalsAgainst = await allWeeksStatLines[0].get().totalPowerPlayGoalsAgainst;
            const totalShortHandedGoals = await allWeeksStatLines[0].get().totalShortHandedGoals;
            const totalShortHandedShots = await allWeeksStatLines[0].get().totalShortHandedShots;
            const totalUnassistedGoals = await allWeeksStatLines[0].get().totalUnassistedGoals;
            const totalAssistedGoals = await allWeeksStatLines[0].get().totalAssistedGoals;
            // Calculated Values
            const calcShotPct = totalGoals / totalShots;
            const calcShotsOnGoalPct = totalShotsOnGoal / totalShots;
            const calcTwoPointShotPct = totalTwoPointGoals / totalTwoPointShots;
            const calcTwoPointShotsOnGoalPct = totalTwoPointGoals / totalTwoPointShotsOnGoal;
            const calcFaceoffPct = totalFaceoffsWon / totalFaceoffs;
            const calcSaa = totalScoresAgainst / totalGamesPlayed;
            const calcSavePct = totalScoresAgainst / (totalSaves + totalScoresAgainst);
            const seasonStats = {
                playerId: statistics.playerId,
                statisticsId: statistics.id,
                season: process.env.CURRENT_SEASON,
                weekNumber: null,
                gamesPlayed: totalGamesPlayed,
                points: totalPoints,
                scoringPoints: totalScoringPoints,
                goals: totalGoals,
                onePointGoals: totalOnePointGoals,
                twoPointGoals: totalTwoPointGoals,
                assists: totalAssists,
                shots: totalShots,
                shotPct: calcShotPct,
                shotsOnGoal: totalShotsOnGoal,
                shotsOnGoalPct: calcShotsOnGoalPct,
                twoPointShots: totalTwoPointShots,
                twoPointShotPct: calcTwoPointShotPct,
                twoPointShotsOnGoal: totalTwoPointShotsOnGoal,
                twoPointShotsOnGoalPct: calcTwoPointShotsOnGoalPct,
                turnovers: totalTurnovers,
                causedTurnovers: totalCausedTurnovers,
                groundBalls: totalGroundBalls,
                touches: totalTouches,
                totalPasses: totalPassesTotal,
                faceoffPct: calcFaceoffPct,
                faceoffsWon: totalFaceoffsWon,
                faceoffsLost: totalFaceoffsLost,
                faceoffs: totalFaceoffs,
                saa: calcSaa,
                saves: totalSaves,
                savePct: calcSavePct,
                scoresAgainst: totalScoresAgainst,
                twoPointGoalsAgainst: totalTwoPointGoalsAgainst,
                numPenalties: totalNumPenalties,
                pim: totalPim,
                powerPlayGoals: totalPowerPlayGoals,
                powerPlayShots: totalPowerPlayShots,
                powerPlayGoalsAgainst: totalPowerPlayGoalsAgainst,
                shortHandedGoals: totalShortHandedGoals,
                shortHandedShots: totalShortHandedShots,
                unassistedGoals: totalUnassistedGoals,
                assistedGoals: totalAssistedGoals
            };
            //JH-NOTE: do i want to use a Hook in the model?
            // build here for now, but should probably live on a different file
            // Upsert?
            const [currentSeasonStatLine, seasonStatLineCreated] = await db.StatLine.findOrCreate({
                where: {
                    statisticsId: statistics.id,
                    weekNumber: null,
                    season: process.env.CURRENT_SEASON
                },
                defaults: seasonStats
            });
            if (!seasonStatLineCreated) {
                await currentSeasonStatLine.update(seasonStats);
            }
            await currentSeasonStatLine.save();
            return statLine;
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
};
