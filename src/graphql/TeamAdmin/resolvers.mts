import { rosterData } from '../helpers/rosterHelpers'
import { Op } from 'sequelize';

const queries = {
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
          include: rosterData(db)
        },
      ],
      where
    });
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }
  },
};

const mutations = {
  addTeam: async(parent, args, { db }, info) => {
    try {
      // TRANSACTION NEEDED
      const userAlreadyOwnsTeamInLeague = await db.Team.findOne({
        where: {
          [Op.and]: [
            { leagueId: args.leagueId },
            { ownerId: args.ownerId }
          ]
        }
      });

      if (userAlreadyOwnsTeamInLeague) {
        throw new Error('User already owns team for this league');
      }

      const team = await db.Team.create({
        name: args.name,
        leagueId: args.leagueId,
        ownerId: args.ownerId,
        createdAt: new Date(),
        updatedAt: new Date()
      })

      await db.Roster.create({
        teamId: team.id,
        createdAt: new Date(),
        updatedAt: new Date()
      })
        
      return await db.Team.findAll({
        include: [
          {
            model: db.League,
            as: 'league',
            where: { id: args.leagueId }
          }
        ]
      });
    
    } catch(error) {
      console.error('Unable to connect to the database:', error);
      return error
    }
  },
};

export const resolvers = { queries, mutations };