import dotenv from 'dotenv'
import { Op, Sequelize } from 'sequelize';
import { statLineData } from '../dataHelpers/statLineHelpers'
import { rosterData } from '../helpers/rosterHelpers'

const queries = {
  roster: async(root, args, {db}, info) => {
    try {
      
      const rosterPlayerIDs = await db.Roster.findOne({ where: { teamId: args.teamId } });

      const team = await db.Team.findOne({
        where: {id: args.teamId},
        include: {
          model: db.League,
          as: 'league'
        }
      })

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

      const ssdm = await db.Player.findOne({
        where: {id: rosterPlayerIDs.ssdmID},
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
        id: rosterPlayerIDs.id,
        teamInfo: team,
        goalie: goalie,
        defense1: defense1,
        defense2: defense2,
        lsm: lsm,
        ssdm: ssdm,
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
};

const mutations = {
     addPlayerToTeamRoster: async(parent, args, { db }, info) => {

    try {
      return await db.sequelize.transaction(async () => {
        
        const playerIsActiveInLeague = await db.ActivePlayersForLeague.findOne({
          where: {
            [Op.and]: [
              { leagueId: args.leagueId },
              { playerId: args.playerId }
            ]
          }
        })

        if (playerIsActiveInLeague) {
          throw Error("Player Already Exists In League")
        }

        //JH-NOTE: I might be able to remove position
        await db.ActivePlayersForLeague.create({
          leagueId: args.leagueId,
          teamId: args.teamId,
          playerId: args.playerId,
          position: args.position,
          rosterSpot: args.rosterSpot,
          rosterId: args.rosterId
        });

        await db.Roster.update(
          {[`${args.rosterSpot.toLowerCase()}ID`]: args.playerId},
          {where: { id: args.rosterId }}
        )

        return db.Roster.findOne({
          where: { id: args.rosterId },
          include: rosterData(db)
        })
        
      });

    } catch(error) {
      console.log(error)
      return error
    }
  },

  removePlayerFromTeamRoster: async(parent, args, { db }, info) => {
    //Spiked Function
    // could TDD this...

    try {
      return await db.sequelize.transaction(async () => {
        // JH-NOTE: efficiancy rationale
        await db.ActivePlayersForLeague.destroy({
          where: {
            [Op.and]: [
              { leagueId: args.leagueId },
              { playerId: args.playerId }
            ]
          }
        })

        await db.Roster.update(
          {[`${args.rosterSpot.toLowerCase()}ID`]: null},
          {where: { id: args.rosterId }}
        )

        return db.Roster.findOne({
            where: {id: args.rosterId},
            include: rosterData(db)
        })

      });

    } catch(error) {
      console.error('Unable to connect to the database:', error);
      return error
    }
  },
};

export const resolvers = { queries, mutations };