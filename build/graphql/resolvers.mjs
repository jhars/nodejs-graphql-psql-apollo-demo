import { User } from './User';
import { Players } from './PlayerStats';
import { Leagues } from './LeagueMgmt';
import { Teams } from './TeamAdmin';
import { Roster } from './RosterMgmt';
export default {
    Query: {
        ...User.resolvers.queries,
        ...Players.resolvers.queries,
        ...Leagues.resolvers.queries,
        ...Teams.resolvers.queries,
        ...Roster.resolvers.queries,
    },
    Mutation: {
        ...User.resolvers.mutations,
        ...Players.resolvers.mutations,
        ...Leagues.resolvers.mutations,
        ...Teams.resolvers.mutations,
        ...Roster.resolvers.mutations,
    }
};
