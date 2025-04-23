export default `#graphql
  
  enum Position {
    G
    D
    LSM
    SSDM
    FO
    M
    A
  }

  enum SortingOrder {
    ASC
    DESC
  }

  input PlayerOrder {
    order: SortingOrder!
    field: PlayerSortField!
  }

  enum PlayerSortField {
    position
    lastName
    points
  }

  enum RosterSpot {
    GOALIE
    DEFENSE1
    DEFENSE2
    LSM
    SSDM
    FO
    MIDFIELD1
    MIDFIELD2
    ATTACK1
    ATTACK2
    BENCH1
    BENCH2
    BENCH3
    BENCH4
  }

  type League {
    id: ID
    title: String!
    teams: [Team]
  }
  
  type Team @cacheControl(maxAge: 0) {
    id: ID
    name: String!
    ownerId: ID
    league: League!
    leagueId: Int!
    roster: Roster
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

  type Roster {
    id: ID
    teamId: Int!
    goalie: Player
    defense1: Player
    defense2: Player    
    lsm: Player
    ssdm: Player
    fo: Player
    midfield1: Player
    midfield2: Player
    attack1: Player
    attack2: Player
  }

  type RosterIDs {
    id: ID
    teamId: Int!
    goalieID: Int
    defense1ID: Int
    defense2ID: Int
    lsmID: Int
    ssdmID: Int
    foID: Int
    midfield1ID: Int
    midfield2ID: Int
    attack1ID: Int
    attack2ID: Int
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

  type StatLineProjected {
    id: ID
    playerId: Int!
    gamesPlayed: Float
    points: Float
    scoringPoints: Float
    goals: Float
    onePointGoals: Float
    twoPointGoals: Float
    assists: Float
    shots: Float
    shotPct: Float
    shotsOnGoal: Float
    shotsOnGoalPct: Float
    twoPointShots: Float
    twoPointShotPct: Float
    twoPointShotsOnGoal: Float
    twoPointShotsOnGoalPct: Float
    turnovers: Float
    causedTurnovers: Float
    groundBalls: Float
    touches: Float
    totalPasses: Float
    faceoffPct: Float
    faceoffsWon: Float
    faceoffsLost: Float
    faceoffs: Float
    saa: Float
    saves: Float
    savePct: Float
    scoresAgainst: Float
    twoPointGoalsAgainst: Float
    numPenalties: Float
    pim: Float
    powerPlayGoals: Float
    powerPlayShots: Float
    powerPlayGoalsAgainst: Float
    shortHandedGoals: Float
    shortHandedShots: Float
    unassistedGoals: Float
    assistedGoals: Float
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
