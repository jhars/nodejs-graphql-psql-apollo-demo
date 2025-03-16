export default {
  addLeague: (parent, args, { db }, info) => {
    return db.League.create({
      title: args.title,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newLeague => {
      return db.League.findAll();
    });
  },
  addTeam: (parent, args, { db }, info) => {
    return db.Team.create({
      name: args.name,
      leagueId: args.leagueId,
      createdAt: new Date(),
      updatedAt: new Date()
    }).then(newTeam => {
      return db.Team.findAll();
    });
  }
};
