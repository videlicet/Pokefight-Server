import mongoose from 'mongoose';
const { Schema, model } = mongoose;

const fightSchema = new Schema({
	winner: String,
	loser: String,
	date: String
}, { collection: 'Leaderboard' });

const Fights = model('Student', fightSchema);

export default Fights;