import { Request, Response } from 'express';
import { MetaTypesRepository } from '../data/meta-type.repository.js';
import { calculateNextId } from './id.js';
import { MetaType } from '../models/meta-type.js';
import _ from 'lodash';

const metaTypeRepository = new MetaTypesRepository();

export const getMetaTypes = async (req: Request, res: Response) => {
    const metaTypes = await metaTypeRepository.getAll();
   
    res.json(metaTypes);
};

export const getMetaType = async (req: Request, res: Response) => {
    const MetaType = await metaTypeRepository.getById(parseInt(req.params.id));
    res.json(MetaType);
};
export const postMetaType = async (req: Request, res: Response) => {
    const MetaTypeCollection = await metaTypeRepository.getAll();
    const IdFromMetaType = (c: { id: number }) => c.id;
    const nextId = calculateNextId(MetaTypeCollection, IdFromMetaType);
    req.body.id = nextId;
    const data = req.body as MetaType
    const MetaTypes = await metaTypeRepository.create(data)
    res.json(MetaTypes);
};
export const UpdateMetaType = async (req: Request, res: Response) => {

    const data = {
        values: req.body
    }
    const MetaType = await metaTypeRepository.update(parseInt(req.params.id), data);
    res.json(MetaType);
};

export const inlineUpdateMetaType = async (req: Request, res: Response) => {
    const data = {
        values: req.body.values
    }
    const MetaType = await metaTypeRepository.update(parseInt(req.params.id), data);
    res.json(MetaType);
};

export const removeMetaType = async (req: Request, res: Response) => {
    const MetaType = await metaTypeRepository.delete(parseInt(req.params.id));
    res.json(MetaType);

};

export const getMetaTypeByKey = async (req: Request, res: Response) => {
    const key = req.params.id;
    const metaTypes = await metaTypeRepository.getAll();
    const metaTypeByKey = _.find(metaTypes, { 'key': key });
    res.json(metaTypeByKey);
};



