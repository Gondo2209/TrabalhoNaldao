import { Request, Response } from 'express';
import BuildModel from '../models/build.model';

class BuildController {
  // Método para buscar builds por nome de item
  static async getByItemName(req: Request, res: Response) {
    const itemName = req.params.itemName;

    try {
      const builds = await BuildModel.getByItemName(itemName);
      res.json(builds);
    } catch (err) {
      console.error('Erro ao buscar as builds pelo nome do item:', err);
      res.status(500).send('Erro ao buscar as builds pelo nome do item');
    }
  }

  static async createBuild(req: Request, res: Response) {
    const { player_id, champion_id, items, rank } = req.body;

    try {
      const newBuild = await BuildModel.createBuild(player_id, champion_id, items, rank);
      res.json(newBuild);
    } catch (err) {
      console.error('Erro ao criar uma nova build:', err);
      res.status(500).send('Erro ao criar uma nova build');
    }
  }
}

export default BuildController;