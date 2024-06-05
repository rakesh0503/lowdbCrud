import { Low } from "lowdb";
import { JSONFile } from "lowdb/node";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { UserProfile, UserProfiles } from "../models/user-profile.js";

export class UserProfileRepository {
  private db: Low<UserProfiles>;

  constructor() {
    const __dirname = dirname(fileURLToPath(import.meta.url));
    const file = join(__dirname, "db.json");
    const adapter = new JSONFile<UserProfiles>(file);
    const defaultData = { usersProfile: [] };
    this.db = new Low<UserProfiles>(adapter, defaultData);
  }

  async getAll(): Promise<UserProfile[]> {
    await this.db.read(); // Make sure to read before accessing data
    return this.db.data.usersProfile;
  }

  async getById(id: number): Promise<UserProfile | undefined> {
    await this.db.read();
    return this.db.data.usersProfile.find(
      (userProfile: { id: number }) => userProfile.id === id
    );
  }

  async create(userProfile: UserProfile): Promise<void> {
    await this.db.read();
    this.db.data.usersProfile.push(userProfile);
    await this.db.write(); // Make sure to write after modifying data
  }

  async update(id: number, updates: Partial<UserProfile>): Promise<void> {
    await this.db.read();
    const userProfile = this.db.data.usersProfile.find((u) => u.id == id);
    if (userProfile) {
      Object.assign(userProfile, updates);
      await this.db.write(); // Make sure to write after modifying data
    }
  }

  async delete(id: number): Promise<void> {
    await this.db.read();
    this.db.data.usersProfile = this.db.data.usersProfile.filter(
      (userProfile) => userProfile.id !== id
    );
    await this.db.write(); // Make sure to write after modifying data
  }
}
