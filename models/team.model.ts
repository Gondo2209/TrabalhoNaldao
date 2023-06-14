import { Db } from 'mongodb';

class TeamModel {
  private static db: Db;

  static initialize(db: Db) {
    TeamModel.db = db;
  }

  static async getVencedores() {
    try {
      const vencedores = await TeamModel.db.collection('matches').distinct('winner');
      return vencedores;
    } catch (err) {
      throw err;
    }
  }

  static async createTeam(players: object[], team_side: string) {
    try {
      const newTeam = { players, team_side };
      await TeamModel.db.collection('teams').insertOne(newTeam);
      return newTeam;
    } catch (err) {
      throw err;
    }
  }
}

export default TeamModel;