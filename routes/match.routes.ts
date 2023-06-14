import express, { Request, Response } from 'express';
import MatchController from '../controllers/match.controller';

const router = express.Router();

// Rota para buscar jogadores com rank "Platina"
router.post('/matches', MatchController.createMatch);

export default router;