import dotenv from 'dotenv'
import { Op, Sequelize } from 'sequelize';
import { statLineData } from '../dataHelpers/statLineHelpers'

const queries = {
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
};

const mutations = {
    addLeague: async(parent, args, { db }, info) => {
    try {
      return await db.sequelize.transaction(async () => {
        await db.League.create({
          title: args.title,
          createdAt: new Date(),
          updatedAt: new Date()
        });

        return await db.League.findAll();
      });

    } catch (error) {
      console.error('Unable to connect to the database:', error);
      return error
    }
  },
};

export const resolvers = { queries, mutations };