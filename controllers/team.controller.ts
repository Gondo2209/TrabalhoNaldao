import { Request, Response } from 'express';
import TeamModel from '../models/team.model';

class TeamController {
  static async getVencedores(req: Request, res: Response) {
    try {
      const timesVencedores = await TeamModel.getVencedores();
      res.json(timesVencedores);
    } catch (err) {
      console.error('Erro ao buscar os times vencedores:', err);
      res.status(500).send('Erro ao buscar os times vencedores');
    }
  }

  static async createTeam(req: Request, res: Response) {
    const { players, team_side } = req.body;

    try {
      const newTeam = await TeamModel.createTeam(players, team_side);
      res.json(newTeam);
    } catch (err) {
      console.error('Erro ao criar um novo time:', err);
      res.status(500).send('Erro ao criar um novo time');
    }
  }
}

export default TeamController;