export const mutations = `#graphql
	addPlayerToTeamRoster(leagueId: Int!, teamId: Int!, playerId: Int!, position: Position!, rosterSpot: RosterSpot!, rosterId: ID!): Roster!,
	removePlayerFromTeamRoster(leagueId:Int!, playerId: Int!, rosterSpot: RosterSpot!, rosterId: ID!): Roster!
`;