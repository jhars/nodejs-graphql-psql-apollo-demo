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
  }
};
