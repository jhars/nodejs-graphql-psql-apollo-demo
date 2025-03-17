import types from "./types";

export default `#graphql
  type Query {
    leagues: [League!],
    teams(leagueId: Int): [Team!],
  }
`;

// follow pattern like the following for players:
// players(teamId: Int): [Player!],

