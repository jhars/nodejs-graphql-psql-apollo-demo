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
      //JH-NOTE: unreadable, and may not work, but...
      // should handle case if given all 3 parameters
      // uses ownerId if its there (would not use teamsId or leagueId)
      // uses teamsId if its there, (would not use leagueId)
      // then checks for leagueId
      // ignores league Id if provided a teamId and ignores teamsId if proivided an ownerId
      // is this good graphql form?
      const where = args.ownerId ? {ownerId: args.ownerId}
        : args.teamsId ? { id: args.teamsId }
        : args.leagueId ? { leagueId: args.leagueId } : {};

      
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
      
      const rosterPlayerIDs = await db.Roster.findOne({ where: { teamId: args.teamId } });

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
      
      const profileSort = args.orderBy.field == "points" ? null : [[args.orderBy.field, args.orderBy.order]]

      //JH-NOTE: start here
      //JH-NOTE: works, but this is sloppy, consider refactor
      const statSort = args.orderBy.field == "points" ? [
        [ {model: db.Statistics, as: 'statistics'}, {model: db.StatLine, as: 'statLineLastSeason'}, args.orderBy.field, args.orderBy.order]
        ] : null

      const players = await db.Player.findAll({
      order: profileSort || statSort,
      include: [
        {
            model: db.Statistics,
            as: 'statistics',
            include: statLineData(db, statSort)
        }
      ],
      });
      
      return players

    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }

  }
};
