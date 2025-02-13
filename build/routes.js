'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
const leagueController = require('./controllers/leagueController');
const teamController = require('./controllers/teamController');
module.exports = function (app) {
    app.route('/league')
        .post(leagueController.createLeague);
    app.route('/leagues')
        .get(leagueController.getAllLeagues);
    app.route('/team')
        .post(teamController.createTeam);
    app.route('/league/:leagueId/teams')
        .get(teamController.getTeamsByLeague);
};
