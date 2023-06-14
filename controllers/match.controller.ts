import { Request, Response } from 'express';
import MatchModel from '../models/match.model';

class MatchController {
  static async createMatch(req: Request, res: Response) {
    const { teams, match_id, server_id, winner, duration } = req.body;

    try {
      const newMatch = await MatchModel.createMatch(teams, match_id, server_id, winner, duration);
      res.json(newMatch);
    } catch (err) {
      console.error('Erro ao criar uma nova partida:', err);
      res.status(500).send('Erro ao criar uma nova partida');
    }
  }
}

export default MatchController;