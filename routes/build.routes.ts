import express, { Request, Response } from 'express';
import BuildController from '../controllers/build.controller';

const router = express.Router();

// Rota para buscar builds por nome de item
router.get('/builds/:itemName', BuildController.getByItemName);
router.post('/builds', BuildController.createBuild);

export default router;

