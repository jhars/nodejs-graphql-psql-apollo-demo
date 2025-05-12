export const queries = `#graphql
  players(
    availableForLeagueId: Int,
    position: Position,
    orderBy: PlayerOrder
  ): [Player!]
`;
