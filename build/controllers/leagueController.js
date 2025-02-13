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
const createLeague = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const title = req.query.title;
        const league = yield League.create({
            title: title
        });
        res.json(req.query);
    }
    catch (e) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `New League not succesful`,
            error: e.message
        });
    }
});
const getAllLeagues = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const league = yield League.findAll();
        res.json(league);
    }
    catch (e) {
        console.log(e);
        console.log(e.message);
        res.json({
            status: 204,
            timestamp: Date.now(),
            message: `Leagues not found`,
            error: e.message
        });
    }
});
exports.createLeague = createLeague;
exports.getAllLeagues = getAllLeagues;
