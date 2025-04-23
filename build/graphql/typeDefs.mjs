import { User } from "./User";
import { Players } from "./PlayerStats";
import { Leagues } from "./LeagueMgmt";
import { Teams } from "./TeamAdmin";
import { Roster } from "./RosterMgmt";
export default `#graphql
  
  ${User.types}
  ${Players.types}
  ${Leagues.types}
  ${Teams.types}
  ${Roster.types}
  
  type Query {
    ${User.queries}
    ${Players.queries}
    ${Leagues.queries}
    ${Teams.queries}
    ${Roster.queries}
  }
  
  type Mutation {
    ${User.mutations}
    ${Players.mutations}
    ${Leagues.mutations}
    ${Teams.mutations}
    ${Roster.mutations}
  }
`;
