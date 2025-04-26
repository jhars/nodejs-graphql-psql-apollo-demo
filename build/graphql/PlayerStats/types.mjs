export const types = `#graphql

  enum SortingOrder {
    ASC
    DESC
  }

  input PlayerOrder {
    order: SortingOrder!
    field: PlayerSortField!
  }

  enum PlayerSortField {
    lastName
    position
    points
    goals
    assists
    groundBalls
    causedTurnovers
    saves
    faceoffsWon
  }

  type Player {
    id: ID!
    firstName: String!
    lastName: String!
    position: String!
    jersey: Int
    team: String
    statistics: Statistics
  }

  type Statistics {
    id: ID
    playerId: Int!
    season: String!
    statLineLastSeason: StatLine
    statLineCurrentSeason: StatLine
    statLineWeek01: StatLine
    statLineWeek02: StatLine
    statLineWeek03: StatLine
    statLineWeek04: StatLine
    statLineWeek05: StatLine
    statLineWeek06: StatLine
    statLineWeek07: StatLine
    statLineWeek08: StatLine
    statLineWeek09: StatLine
    statLineWeek10: StatLine
  }

  input StatLineInput {
    points: Int
    scoringPoints: Int
    goals: Int
    onePointGoals: Int
    twoPointGoals: Int
    assists: Int
    shots: Int
    shotsOnGoal: Int
    twoPointShots: Int
    twoPointShotsOnGoal: Int
    turnovers: Int
    causedTurnovers: Int
    groundBalls: Int
    touches: Int
    totalPasses: Int
    faceoffsWon: Int
    faceoffsLost: Int
    faceoffs: Int
    saves: Int
    scoresAgainst: Int
    twoPointGoalsAgainst: Int
    numPenalties: Int
    pim: Float
    powerPlayGoals: Int
    powerPlayShots: Int
    powerPlayGoalsAgainst: Int
    shortHandedGoals: Int
    shortHandedShots: Int
    unassistedGoals: Int
    assistedGoals: Int
  }

  type StatLine {
    id: ID
    playerId: Int!
    playerStatisticsId: ID
    season: String!
    gamesPlayed: Int
    points: Int
    scoringPoints: Int
    goals: Int
    onePointGoals: Int
    twoPointGoals: Int
    assists: Int
    shots: Int
    shotPct: Float
    shotsOnGoal: Int
    shotsOnGoalPct: Float
    twoPointShots: Int
    twoPointShotPct: Float
    twoPointShotsOnGoal: Int
    twoPointShotsOnGoalPct: Float
    turnovers: Int
    causedTurnovers: Int
    groundBalls: Int
    touches: Int
    totalPasses: Int
    faceoffPct: Float
    faceoffsWon: Int
    faceoffsLost: Int
    faceoffs: Int
    saa: Float
    saves: Int
    savePct: Float
    scoresAgainst: Int
    twoPointGoalsAgainst: Int
    numPenalties: Int
    pim: Float
    powerPlayGoals: Int
    powerPlayShots: Int
    powerPlayGoalsAgainst: Int
    shortHandedGoals: Int
    shortHandedShots: Int
    unassistedGoals: Int
    assistedGoals: Int
  }
`;
