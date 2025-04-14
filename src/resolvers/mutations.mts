import dotenv from 'dotenv'
import { Op, Sequelize } from 'sequelize';
export default {
  addLeague: async(parent, args, { db }, info) => {
    try {
      await db.League.create({
        title: args.title,
        createdAt: new Date(),
        updatedAt: new Date()
        
      });
      return await db.League.findAll();

    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  },
  addTeam: async(parent, args, { db }, info) => {
    try {

      const team = await db.Team.create({
        name: args.name,
        leagueId: args.leagueId,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      await db.Roster.create({
        teamId: team.id,
        createdAt: new Date(),
        updatedAt: new Date()
      })
      //not sure we need where clause since leagueId is required (non-nullable) for this mutation
      // include not working for 'league'...
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
    
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  },

  addPlayerToTeam: async(parent, args, { db }, info) => {
    try {
      const roster = await db.Roster.findOne({
          include: [
            {
              model: db.Team,
              as: 'team',
              where: {id: args.teamId}
            }
          ]
      })
      roster.setDataValue(args.rosterSpot.toLowerCase(), args.playerId)

      await roster.save();

      return await db.Team.findOne({
        include: [
          {
            model: db.Roster,
            as: 'roster'
          }
        ],
        where: args.teamId
      })
    
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  },

  addStatLineForWeek: async(parent, args, { db }, info) => {
    try {
      const statistics = await db.Statistics.findOne({
        where: {playerId: args.playerId}
      })
      // roster.setDataValue(args.rosterSpot.toLowerCase(), args.playerId)
      // await roster.save();

      // Needs to update StatLineCurrentSeason
      // The ID might ensure that I do not create multiple statlines for the same week



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
        shotPct: args.statLine.shotPct,
        shotsOnGoal: args.statLine.shotsOnGoal,
        shotsOnGoalPct: args.statLine.shotsOnGoalPct,
        twoPointShots: args.statLine.twoPointShots,
        twoPointShotPct: args.statLine.twoPointShotPct,
        twoPointShotsOnGoal: args.statLine.twoPointShotsOnGoal,
        twoPointShotsOnGoalPct: args.statLine.twoPointShotsOnGoalPct,
        turnovers: args.statLine.turnovers,
        causedTurnovers: args.statLine.causedTurnovers,
        groundBalls: args.statLine.groundBalls,
        touches: args.statLine.touches,
        totalPasses: args.statLine.totalPasses,
        faceoffPct: args.statLine.faceoffPct,
        faceoffsWon: args.statLine.faceoffsWon,
        faceoffsLost: args.statLine.faceoffsLost,
        faceoffs: args.statLine.faceoffs,
        saa: args.statLine.saa,
        saves: args.statLine.saves,
        savePct: args.statLine.savePct,
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
      }


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
        await statLine.update(stats)
      }
      // is this necessary?
      // only using so i only have to write 1 'hook'
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
          // [Sequelize.fn('SUM', Sequelize.col('shotPct')), 'calcShotPct'],
        ]
      })

      const totalGamesPlayed = await allWeeksStatLines[0].get().totalGamesPlayed
      const totalPoints = await allWeeksStatLines[0].get().totalPoints
      const totalScoringPoints = await allWeeksStatLines[0].get().totalScoringPoints
      const totalGoals = await allWeeksStatLines[0].get().totalGoals
      const totalOnePointGoals = await allWeeksStatLines[0].get().totalOnePointGoals
      const totalTwoPointGoals = await allWeeksStatLines[0].get().totalTwoPointGoals
      const totalAssists = await allWeeksStatLines[0].get().totalAssists
      const totalShots = await allWeeksStatLines[0].get().totalShots
      
      const calcShotPct = Number(totalGoals) / Number(totalShots)

      console.log("calcShotPct: ")
      console.log(calcShotPct)
      console.log("--------------------")

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
          shotPct: calcShotPct
        }
        // shotsOnGoal:,
        // shotsOnGoalPct:,
        // twoPointShots:,
        // twoPointShotPct:,
        // twoPointShotsOnGoal:,
        // twoPointShotsOnGoalPct:,
        // turnovers:,
        // causedTurnovers:,
        // groundBalls:,
        // touches:,
        // totalPasses:,
        // faceoffPct:,
        // faceoffsWon:,
        // faceoffsLost:,
        // faceoffs:,
        // saa:,
        // saves:,
        // savePct:,
        // scoresAgainst:,
        // twoPointGoalsAgainst:,
        // numPenalties:,
        // pim:,
        // powerPlayGoals:,
        // powerPlayShots:,
        // powerPlayGoalsAgainst:,
        // shortHandedGoals:,
        // shortHandedShots:,
        // unassistedGoals:,
        // assistedGoals:

      console.log("totalPoints: " + totalPoints)
      console.log("totalGoals: " + totalGoals)
      console.log("totalAssists: " + totalAssists)
      console.log("-------------")
      console.log("seasonStats.shotPct: ")
      console.log(seasonStats.shotPct)


      //JH-NOTE: start here - Update Current Season StatLine
      // do i want to use a Hook in the model?
      // build here for now, but should probably live on a different file
      const [currentSeasonStatLine, seasonStatLineCreated] = await db.StatLine.findOrCreate({
      // const currentSeasonStatLine = await db.StatLine.upsert({
        where: { 
          statisticsId: statistics.id,
          weekNumber: null,
          season: process.env.CURRENT_SEASON
        },
        defaults: seasonStats
      })

      if(!seasonStatLineCreated) {
        await currentSeasonStatLine.update(seasonStats)
      }

      return statLine
    
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  }
};
