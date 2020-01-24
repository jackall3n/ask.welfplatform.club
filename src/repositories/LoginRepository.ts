import low, { AdapterSync, LowdbSync } from 'lowdb';
import FileSync from 'lowdb/adapters/FileSync';
import path from 'path';

const dbPath = path.join(__dirname, '../../db.json');

interface DbState {
}

class LoginRepository {
  private db: LowdbSync<AdapterSync<DbState>>;

  constructor() {
    const adapter = new FileSync(dbPath);
    this.db = low(adapter);
    this.db.defaults({
      logins: []
    }).write()
  }

  async getAll() {
    return this.db.get('logins');
  }
}

export { LoginRepository };
