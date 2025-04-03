import types from "./types";

export default `#graphql
  type Query {
    leagues: [League!],
    teams(teamsId: Int, leagueId: Int): [Team!],
    players(playerId: Int, teamsId: Int): [Player!]
  }
`;

// follow pattern like the following for players:
// players(teamId: Int): [Player!],

