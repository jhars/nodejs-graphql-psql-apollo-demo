import types from "./types";

export default `#graphql
  type Query {
    leagues: [League!],
    teams(teamsId: Int, leagueId: Int): [Team!],
    roster(teamId: Int): Roster!,
    players(playerId: Int, orderBy: PlayerOrder): [Player!]
  }
`;

// follow pattern like the following for players:
// players(teamId: Int): [Player!],

