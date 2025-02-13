import { Request, Response } from "express";
const League = require('../../database/models').League
const Team = require('../../database/models').Team

const createTeam = async (req: Request, res: Response) => {
    try {

    	const leagueId: string = String(req.query.leagueId)
    	const name = req.query.name
        const team = await Team.create({
        	name: name,
            leagueId: parseInt(leagueId)
        });

        res.json(team)
    } catch(e: any) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `Failed to create new team`,
            error: e.message
        });
    }
}

const getTeamsByLeague = async (req: Request, res: Response) => {
    try {

        const leagueId = req.params.leagueId
        const teams = await Team.findAll({
            where: {leagueId: parseInt(leagueId)}
        })

        res.json(teams)
    } catch(e: any) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `Failed to get teams for user`,
            error: e.message
        });
    }
}

exports.createTeam = createTeam;
exports.getTeamsByLeague = getTeamsByLeague;
