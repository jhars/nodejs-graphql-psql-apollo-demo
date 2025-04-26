export const types = `#graphql

  type Roster {
    id: ID
    teamId: Int!
    teamInfo: Team
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

  enum Position {
    G
    D
    LSM
    SSDM
    FO
    M
    A
  }
`;
