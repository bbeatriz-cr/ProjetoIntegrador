import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql'
import {User} from '../models/User'

export const home = async (req: Request, res: Response)=>{
    res.render('pages/home', {
         
    });
    
    let nome: string
    let data: number
    let endereco: string
    let bairro: string
    let cidade: string
    let estado: string
    let cep: number
    let tel_res: number
    let tel: number
    let tel_emergencia:number
    let contato: number
    let data_nasc: number
    let profissao: string
    let email: string
    let sexo: string
};

