export const mutations = `#graphql
    addStatLineForWeek(
      playerId: Int!,
      weekNumber: Int!,
      gamesPlayed: Int!,
      statLine: StatLineInput!
    ): StatLine!
`;