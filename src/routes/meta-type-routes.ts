import express from 'express';
import { getMetaType, getMetaTypeByKey, getMetaTypes, postMetaType, removeMetaType, inlineUpdateMetaType, UpdateMetaType } from '../controllers/meta-type-controller.js';


const router = express.Router();

router.get('/meta-types', getMetaTypes);
router.get('/meta-type/:id', getMetaType);
router.get('/meta-type/key/:id', getMetaTypeByKey);
router.post('/meta-type', postMetaType);
router.put('/meta-type/:id', UpdateMetaType);
router.put('/meta-type/value/:id', inlineUpdateMetaType);
router.delete('/meta-type/:id', removeMetaType)

export default router;

