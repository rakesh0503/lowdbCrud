// import { Low } from 'lowdb'
// import { JSONFile } from 'lowdb/node'
// import { Device, Devices } from '../models/device'; // Import your data model
// import { join, dirname } from 'node:path'
// import { fileURLToPath } from 'node:url'

// export class DataRepository {
//     private db: Low<T>;
    
//     constructor() {
//         const __dirname = dirname(fileURLToPath(import.meta.url))
//         const file = join(__dirname, 'db.json')
//         const adapter = new JSONFile<Devices>(file)
//         const defaultData = { devices: [] }
//         this.db = new Low<Devices>(adapter, defaultData)
//     }

//     async getAll(): Promise<Device[]> {
//         await this.db.read(); // Make sure to read before accessing data
//         return this.db.data.devices;
//     }

//     async getById(id: number): Promise<Device | undefined> {
//         await this.db.read();
//         return this.db.data.devices.find((device: { id: number; }) => device.id === id);
//     }

//     async create(device: Device): Promise<void> {
//         await this.db.read();
//         this.db.data.devices.push(device);
//         await this.db.write(); // Make sure to write after modifying data
//     }

//     async update(id: number, updates: Partial<Device>): Promise<void> {
//         await this.db.read();
//         const device = this.db.data.devices.find((d) => d.id === id);
//         if (device) {
//             Object.assign(device, updates);
//             await this.db.write(); // Make sure to write after modifying data
//         }
//     }

//     async delete(id: number): Promise<void> {
//         await this.db.read();
//         this.db.data.devices = this.db.data.devices.filter((device) => device.id !== id);
//         await this.db.write(); // Make sure to write after modifying data
//     }
// }


