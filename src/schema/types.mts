export default `#graphql
  type League {
    id: ID
    title: String
    teams: [Team]
  }
  
  type Team @cacheControl(maxAge: 60) {
    id: ID
    name: String
    league: League
    leagueId: Int
  }

  enum CacheControlScope {
    PUBLIC
    PRIVATE
  }

  directive @cacheControl(
    maxAge: Int
    scope: CacheControlScope
    inheritMaxAge: Boolean
  ) on FIELD_DEFINITION | OBJECT | INTERFACE | UNION
`;
