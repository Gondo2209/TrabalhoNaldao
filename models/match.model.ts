import { Db } from 'mongodb';

class MatchModel {
  private static db: Db;

  static initialize(db: Db) {
    MatchModel.db = db;
  }

  static async createMatch(teams: object[], match_id: number, server_id: number, winner: string, duration: number) {
    try {
      const newMatch = { teams, match_id, server_id, winner, duration };
      await MatchModel.db.collection('matches').insertOne(newMatch);
      return newMatch;
    } catch (err) {
      throw err;
    }
  }
}

export default MatchModel;