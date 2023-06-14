import { Db, MongoClient } from 'mongodb';

class BuildModel {
  private static db: Db;

  static initialize(db: Db) {
    BuildModel.db = db;
  }

  // Método para buscar builds por nome de item
  static async getByItemName(itemName: string) {
    try {
      const builds = await BuildModel.db
        .collection('builds')
        .find({ 'items.name': itemName })
        .toArray();

      return builds;
    } catch (err) {
      throw err;
    }
  }

  static async createBuild(player_id: number, champion_id: number, items: object[], rank: object) {
    try {
      const newBuild = { player_id, champion_id, items, rank };
      await BuildModel.db.collection('builds').insertOne(newBuild);
      return newBuild;
    } catch (err) {
      throw err;
    }
  }
}

export default BuildModel;