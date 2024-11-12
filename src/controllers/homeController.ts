import { Request, Response } from 'express';
import { Product } from '../models/Product';
import {sequelize} from '../instances/mysql'
import {User} from '../models/User'

export const home = async (req: Request, res: Response)=>{

   // let users = await User.findAll()
    //console.log("USUÁRIOS: ",JSON.stringify(users))


    let list = Product.getAll();
    let expensiveList = Product.getFromPriceAfter(12);

    res.render('pages/home', {
        
    });
};