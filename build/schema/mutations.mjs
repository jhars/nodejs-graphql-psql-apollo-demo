export default `#graphql
  type Mutation {
    addLeague(title: String): [League!],
    addTeam(name: String, leagueId: Int): [Team!]
  }
`;
