import types from "./types";
export default `#graphql
  type Mutation {
    addLeague(title: String!): [League!],
    addTeam(name: String!, leagueId: Int!, ownerId: ID!): [Team!],
    addPlayerToTeamRoster(leagueId: Int!, teamId: Int!, playerId: Int!, position: Position!, rosterSpot: RosterSpot!, rosterId: ID!): Roster!,
    removePlayerFromTeamRoster(leagueId:Int!, playerId: Int!, rosterSpot: RosterSpot!, rosterId: ID!): Roster!,
    addStatLineForWeek(playerId: Int!, weekNumber: Int!, gamesPlayed: Int!, statLine: StatLineInput!): StatLine!
  }
`;

