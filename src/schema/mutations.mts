import types from "./types";
export default `#graphql
  type Mutation {
    addLeague(title: String!): [League!],
    addTeam(name: String!, leagueId: Int!, ownerId: ID!): [Team!],
    addPlayerToTeam(teamId: Int!, playerId: Int!, rosterSpot: RosterSpot!): Team!,
    addStatLineForWeek(playerId: Int!, weekNumber: Int!, gamesPlayed: Int!, statLine: StatLineInput!): StatLine!
  }
`;

