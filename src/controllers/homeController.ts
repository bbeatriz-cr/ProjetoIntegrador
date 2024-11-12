import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql'
import {User} from '../models/User'

export const home = async (req: Request, res: Response)=>{

    res.render('pages/home', {
        
    });
};