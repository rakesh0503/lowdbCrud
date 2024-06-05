// routes/userRoutes.ts
import express from 'express';
import bodyParser from 'body-parser';
import { getUsers, postUserProfile, getUser, updateUserProfile, removeUserProfile } from '../controllers/user-profile-controller.js';

const router = express.Router();

router.get('/users-profile',bodyParser.json(), getUsers);

router.post('/user',bodyParser.json(), postUserProfile)
router.put('/user/:id',bodyParser.json(), updateUserProfile)
router.get('/user/:id',bodyParser.json(), getUser)
router.delete('/user/:id',bodyParser.json(), removeUserProfile)

export default router;

