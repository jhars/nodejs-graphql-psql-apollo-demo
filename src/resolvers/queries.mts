import { cacheControlFromInfo } from '@apollo/cache-control-types';
import { statLineData } from '../helpers/queryHelpers'

export default {
  leagues: async(root, args, {db}, info) => {
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
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }

  },

  teams: async(root, args, {db}, info) => {
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
        },
      ],
      where
    });
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  },

  roster: async(root, args, {db}, info) => {
    try {
      
      // const where = 
      
      const rosterPlayerIDs = await db.Roster.findOne({ where: { teamId: args.teamId } });
      console.log("rosterPlayerIDs: ")
      console.log(rosterPlayerIDs)
      console.log("=================")

      const goalie = await db.Player.findOne({
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ],
        where: {id: rosterPlayerIDs.goalieID}
      })

      const defense1 = await db.Player.findOne({
        where: {id: rosterPlayerIDs.defense1ID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const defense2 = await db.Player.findOne({
        where: {id: rosterPlayerIDs.defense2ID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const lsm = await db.Player.findOne({
        where: {id: rosterPlayerIDs.lsmID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const fo = await db.Player.findOne({
        where: {id: rosterPlayerIDs.foID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const midfield1 = await db.Player.findOne({
        where: {id: rosterPlayerIDs.midfield1ID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const midfield2 = await db.Player.findOne({
        where: {id: rosterPlayerIDs.midfield2ID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const attack1 = await db.Player.findOne({
        where: {id: rosterPlayerIDs.attack1ID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const attack2 = await db.Player.findOne({
        where: {id: rosterPlayerIDs.attack2ID},
        include: [
          {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
          }
        ]
      })

      const roster = {
        teamId: rosterPlayerIDs.teamId,
        goalie: goalie,
        defense1: defense1,
        defense2: defense2,
        lsm: lsm,
        fo: fo,
        midfield1: midfield1,
        midfield2: midfield2,
        attack1: attack1,
        attack2: attack2
      }

      return roster

    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  },

  players: async(root, args, {db}, info) => {
    try {
      // see above JH-NOTE for why I may want to use this
      // const where = args.playerId ? { id: args.playerId } : args.teamsId ? { teamsId: args.teamsId } : {};
      // const players = await db.Player.findAll({where});
      console.log("args.orderBy: ")
      console.log(args.orderBy)
      console.log(JSON.parse)
      console.log("==============")
      const players = await db.Player.findAll({
      order: [[args.orderBy.field, args.orderBy.order]],
      include: [
        {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db)
        }
      ],
      });
      
      return players

    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }

  }
};
