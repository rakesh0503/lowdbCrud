// controllers/UserController.ts
import { Request, Response } from 'express';
import { UserProfileRepository } from '../data/users-profile.repository.js';
import { calculateNextId } from './id.js';


const userProfileRepository = new UserProfileRepository();

export const getUsers = async (req: Request, res: Response) => {
   
    const userProfiles = await userProfileRepository.getAll();
    res.json(userProfiles);
};
export const getUser = async (req: Request, res: Response) => {
    const userProfile = await userProfileRepository.getById(parseInt(req.params.id));
    res.json(userProfile);
};
export const postUserProfile = async (req: Request, res: Response) => {

    const userProfileCollection = await userProfileRepository.getAll();
    const IdFromUserProfile = (c: { id: number }) => c.id;
    const nextId = calculateNextId(userProfileCollection, IdFromUserProfile);
    req.body.id = nextId;
    
    const userProfile = await userProfileRepository.create(req.body)
    res.json(userProfile);
};
export const updateUserProfile = async (req: Request, res: Response) => {

    const userProfile = await userProfileRepository.update(parseInt(req.params.id), req.body);
    res.json(userProfile);
};

export const removeUserProfile = async (req: Request, res: Response) => {
    const userProfile = await userProfileRepository.delete(parseInt(req.params.id));
    res.json(userProfile);
};


// type Data = {
//     messages: UserProfile[]
// }


// export const getUsers = async (req: Request, res: Response) => {
//     const defaultData: Data = { messages: [] }
//     const adapter = new JSONFile<Data>('db.json')
//     const db = new Low<Data>(adapter, defaultData)
//     db.data.messages.push(req.body)
//     await db.write();

//     res.json(db.data);
// };

