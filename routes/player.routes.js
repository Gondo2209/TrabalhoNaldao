import express, { Request, Response } from 'express';
import PlayerController from '../controllers/player.controller';

const router = express.Router();

// Rota para buscar jogadores com rank "Platina"
router.get('/players/platina', PlayerController.getPlatinaPlayers);
router.post('/players', PlayerController.criar);

export default router;