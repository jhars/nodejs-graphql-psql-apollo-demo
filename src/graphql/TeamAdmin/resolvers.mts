import { rosterData } from '../helpers/rosterHelpers';
import { Op } from 'sequelize';
const queries = {
  teams: async (root, args, { db }, info) => {
    try {
      let where = {};

      if (args.leagueId && args.ownerId && args.teamsId) {
        where = { 
          leagueId: args.leagueId, 
          ownerId: args.ownerId,
          teamId: args.teamsId
        }
      } else if (args.leagueId && args.ownerId) {
        where = { 
          leagueId: args.leagueId,
          ownerId: args.ownerId 
        }
      } else if (args.leagueId && args.teamsId) {
        where = { 
          leagueId: args.leagueId, 
          id: args.teamsId
        }
      } else if (args.ownerId && args.teamsId) {
        where = { 
          ownerId: args.ownerId, 
          id: args.teamsId
        }
      } else if (args.ownerId) {
        where = { ownerId: args.ownerId } 
      } else if (args.teamsId) {
        where = { id: args.teamsId }
      } else if (args.leagueId) {
        where = { leagueId: args.leagueId }
      }

      return await db.Team.findAll({
        include: [
          {
            model: db.League,
            as: 'league'
          },
          {
            model: db.Roster,
            as: 'roster',
            include: rosterData(db)
          },
        ],
        where
      });
    }
    catch (error) {
      console.error('Unable to connect to the database:', error);
      return error;
    }
  },
};
const mutations = {
  addTeam: async (parent, args, { db }, info) => {
    try {
      return await db.sequelize.transaction(async () => {
        const userAlreadyOwnsTeamInLeague = await db.Team.findOne({
          where: {
            [Op.and]: [
              { leagueId: args.leagueId },
              { ownerId: args.ownerId }
            ]
          }
        });

        if (userAlreadyOwnsTeamInLeague) { throw new Error('User already owns team for this league') };
        
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

        return await db.Team.findAll({
          include: [
            {
              model: db.League,
              as: 'league',
              where: { id: args.leagueId }
            }
          ]
        });
      });
    }
    catch (error) {
      console.error('Unable to connect to the database:', error);
      return error;
    }
  },
};
export const resolvers = { queries, mutations };
