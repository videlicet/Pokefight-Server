import mongoose from 'mongoose';
import db_URL from '../db_URL.js';
import Fights from '../models/fights.js';

mongoose.connect(db_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

export const getAllFights = async (req, res, next) => {
    try {
        console.log('GET to DATABASE')
        const fights = await Fights.find({}).exec();
        res.status(200).json(fights);
    } catch (error) {
        next(error);
    }
};

export const postFight = async (req, res, next) => {
    try {
        console.log('POST to DATABASE')
        const newFight = new Fights(req.body)
        await newFight.save();
        return res.status(201).json(newFight);
    } catch (error) {
        next(error);
    }
};

export const deleteLeaderboard = async (req, res, next) => {
    try {
        console.log('DELETE to DATABSE')
        console.log(req.body)
        const deleted = await Fights.deleteMany({});
        return res.status(201).json(deleted);
    } catch (error) {
        next(error);
    }
};
