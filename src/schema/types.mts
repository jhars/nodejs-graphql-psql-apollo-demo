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
  }

  type Player {
    firstName: String!,
    lastName: String!,
    position: String!,
    jersey: Int,
    team: String
  }

  type Roster {
    id: ID
    teamId: Int!
    team: Team!
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

  type StatLineTotal {
    id: ID
    playerId: Int!,
    gamesPlayed: Int,
    points: Int,
    scoringPoints: Int,
    goals: Int,
    onePointGoals: Int,
    twoPointGoals: Int,
    assists: Int,
    shots: Int,
    shotPct: Float,
    shotsOnGoal: Int,
    shotsOnGoalPct: Float,
    twoPointShots: Int,
    twoPointShotPct: Float,
    twoPointShotsOnGoal: Int,
    twoPointShotsOnGoalPct: Float,
    turnovers: Int,
    causedTurnovers: Int,
    groundBalls: Int,
    touches: Int,
    totalPasses: Int,
    faceoffPct: Float,
    faceoffsWon: Int,
    faceoffsLost: Int,
    faceoffs: Int,
    saa: Float,
    saves: Int,
    savePct: Float,
    scoresAgainst: Int,
    twoPointGoalsAgainst: Int,
    numPenalties: Int,
    pim: Float,
    powerPlayGoals: Int,
    powerPlayShots: Int,
    powerPlayGoalsAgainst: Int,
    shortHandedGoals: Int,
    shortHandedShots: Int,
    unassistedGoals: Int,
    assistedGoals: Int
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
