import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { MetaType, MetaTypes } from "../models/meta-type.js";

export class MetaTypesRepository {
  private db: Low<MetaTypes>;

  constructor() {
    const __dirname = dirname(fileURLToPath(import.meta.url));

    // const file = join(__dirname, "db.json");
    const file = join(__dirname, "..", "db.json");

    const adapter = new JSONFile<MetaTypes>(file);
    const defaultData = { metaTypes: [] };
    this.db = new Low<MetaTypes>(adapter, defaultData);
  }

  async getAll(): Promise<MetaType[]> {
    await this.db.read(); // Make sure to read before accessing data
    return this.db.data.metaTypes;
  }

  async getById(id: number): Promise<MetaType | undefined> {
    await this.db.read();
    return this.db.data.metaTypes.find((m: { id: number }) => m.id === id);
  }

  async create(MetaType: MetaType): Promise<void> {
    await this.db.read();
    this.db.data.metaTypes.push(MetaType);
    await this.db.write(); // Make sure to write after modifying data
  }

  async update(id: number, updates: Partial<MetaType>): Promise<void> {
    await this.db.read();
    const metaType = this.db.data.metaTypes.find((m) => m.id === id);
    if (metaType) {
      Object.assign(metaType, updates);
      await this.db.write(); // Make sure to write after modifying data
    }
  }

  async delete(id: number): Promise<void> {
    await this.db.read();
    this.db.data.metaTypes = this.db.data.metaTypes.filter((m) => m.id !== id);
    await this.db.write(); // Make sure to write after modifying data
  }
}
