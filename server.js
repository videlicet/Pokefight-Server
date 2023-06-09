import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
// import db_URL from './db_URL' // when hosting locally

import pokemonRouter from './routes/pokemonRouter.js';
import leaderboardRouter from './routes/leaderboardRouter.js'
import errorHandler from './middlewares/errorHandler.js';

const port = process?.env?.PORT || 4620;
const app = express();

mongoose.connect(process?.env?.DB_URL); // when hosting online
// mongoose.connect(db_URL); // when hosting locally
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
  
app.use(cors());
app.use(express.json());
app.use('/pokemon', pokemonRouter);
app.use('/leaderboard', leaderboardRouter);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));