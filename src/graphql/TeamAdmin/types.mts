export const types = `#graphql
  type Team {
    id: ID
    name: String!
    ownerId: ID
    league: League!
    leagueId: Int!
    roster: Roster
  }

`;