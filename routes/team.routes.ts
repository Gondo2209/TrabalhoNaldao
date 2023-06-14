import express, { Request, Response } from 'express';
import TeamController from '../controllers/team.controller';

const router = express.Router();

// Rota para buscar as informações dos times vencedores
router.get('/teams/vencedores', TeamController.getVencedores);
router.post('/teams', TeamController.createTeam);

export default router;