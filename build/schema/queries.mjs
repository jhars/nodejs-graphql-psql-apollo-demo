export default `#graphql
  type Query {
    leagues: [League!],
    teams(teamsId: Int, leagueId: Int): [Team!],
  }
`;
// follow pattern like the following for players:
// players(teamId: Int): [Player!],
