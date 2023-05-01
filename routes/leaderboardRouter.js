import { Router } from 'express';
import { getAllFights, postFight, deleteLeaderboard } from '../controllers/leaderbord.js';

const leaderboardRouter = Router();

leaderboardRouter.route('/')
    .get(getAllFights)

leaderboardRouter.route('/save')
    .post(postFight)

leaderboardRouter.route('/clear')
    .delete(deleteLeaderboard)

export default leaderboardRouter;
