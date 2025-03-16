export default {
  leagues: async(root, args, {db}, info) => {
    try {
      return await db.League.findAll();
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }

  },

  teams: async(root, args, {db}, info) => {
    try {
      const where = args.leagueId ? { id: args.leagueId } : {};
      return await db.Team.findAll({
      include: [
        {
          model: db.League,
          attributes: ["title"],
          where
        }
      ]
    });
    } catch(error) {
      console.error('Unable to connect to the database:', error);
    }

  }
};
