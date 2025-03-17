export default `#graphql
  type League {
    id: ID
    title: String
    teams: [Team]
  }

  type Team {
    id: ID
    name: String
    league: League
    leagueId: Int
  }
`;
