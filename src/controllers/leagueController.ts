import { Request, Response } from "express";
const League = require('../../database/models').League
const Team = require('../../database/models').Team

const createLeague = async (req: Request, res: Response) => {
    try {
        const title = req.query.title
        const league = await League.create({
        	title: title
        });

        res.json(req.query)
    } catch(e: any) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `New League not succesful`,
            error: e.message
        });
    }
}

const getAllLeagues = async (req: Request, res: Response) => {
    try {
        const league = await League.findAll();
        res.json(league)
    } catch(e: any) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `Leagues not found`,
            error: e.message
        });
    }
}

exports.createLeague = createLeague
exports.getAllLeagues = getAllLeagues
