import { openDB } from "idb";
import { PersistedState } from "redux-persist/es/types";
import { Storage } from "redux-persist/lib/types";

const IDB_NAME = "my-custom-storage";
const IDB_STORE_NAME = "key-value-pairs";

async function getDatabase() {
  return await openDB(IDB_NAME, 1, {
    upgrade(db) {
      db.createObjectStore(IDB_STORE_NAME);
    },
  });
}

const customStorage: Storage = {
  async setItem(key: string, value: PersistedState) {
    const db = await getDatabase();
    return db.put(IDB_STORE_NAME, value, key);
  },

  async getItem(key: string) {
    const db = await getDatabase();
    return (await db.get(IDB_STORE_NAME, key)) as PersistedState;
  },

  async removeItem(key: string) {
    const db = await getDatabase();
    return db.delete(IDB_STORE_NAME, key);
  },

  async getAllKeys() {
    const db = await getDatabase();
    return db.getAllKeys(IDB_STORE_NAME);
  },
};

export default customStorage;
