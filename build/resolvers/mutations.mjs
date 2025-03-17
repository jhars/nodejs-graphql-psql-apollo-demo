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
            await db.Team.create({
                name: args.name,
                leagueId: args.leagueId,
                createdAt: new Date(),
                updatedAt: new Date()
            });
            return await db.Team.findAll();
        }
        catch (error) {
            console.error('Unable to connect to the database:', error);
        }
    }
};
