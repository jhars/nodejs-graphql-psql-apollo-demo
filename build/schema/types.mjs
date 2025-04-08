export default `#graphql

  enum Position {
    G
    D
    LSM
    FO
    SSDM
    M
    A
  }

  enum RosterSpot {
    GOALIE
    DEFENSE1
    DEFENSE2
    FO
    LSM
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
    league: League!
    leagueId: Int!
    roster: Roster
  }

  type Player {
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
    statLineLastSeasonId: ID
    statLineCurrentSeasonId: ID
    statLineWeek01Id: ID
    statLineWeek02Id: ID
    statLineWeek03Id: ID
    statLineWeek04Id: ID
    statLineWeek05Id: ID
    statLineWeek06Id: ID
    statLineWeek07Id: ID
    statLineWeek08Id: ID
    statLineWeek09Id: ID
    statLineWeek10Id: ID
  }

  type ProjectedStatistics {
    currentSeason: StatLineProjected
    week1: StatLineProjected
    week2: StatLineProjected
    week3: StatLineProjected
    week4: StatLineProjected
    week5: StatLineProjected
    week6: StatLineProjected
    week7: StatLineProjected
    week8: StatLineProjected
    week9: StatLineProjected
    week10: StatLineProjected
  }

  type Roster {
    id: ID
    teamId: Int!
    goalie: Int
    defense1: Int
    defense2: Int
    midfield1: Int
    midfield2: Int
    fo: Int
    lsm: Int
    attack1: Int
    attack2: Int
  }

  type StatLine {
    id: ID
    playerId: Int!
    playerStatisticsId: ID
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
