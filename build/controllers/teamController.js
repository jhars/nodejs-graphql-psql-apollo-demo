"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const League = require('../../database/models').League;
const Team = require('../../database/models').Team;
const createTeam = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leagueId = String(req.query.leagueId);
        const name = req.query.name;
        const team = yield Team.create({
            name: name,
            leagueId: parseInt(leagueId)
        });
        res.json(team);
    }
    catch (e) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `Failed to create new team`,
            error: e.message
        });
    }
});
const getTeamsByLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const leagueId = req.params.leagueId;
        const teams = yield Team.findAll({
            where: { leagueId: parseInt(leagueId) }
        });
        res.json(teams);
    }
    catch (e) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `Failed to get teams for user`,
            error: e.message
        });
    }
});
exports.createTeam = createTeam;
exports.getTeamsByLeague = getTeamsByLeague;
