import { Request, Response } from 'express';
import {sequelize} from '../instances/mysql'
import {User} from '../models/User'

export const home = async (req: Request, res: Response)=>{
    res.render('pages/home', {
         
    });
    
    let nome: string
    let data: number
    let endereco: string
    let numero: number
    let complemento: string
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

    let queixa_principal: string
    let costuma_podo: BigIntToLocaleStringOptions
    let frequencia_podo: string
    let medicamento: string
    let alergico: BigIntToLocaleStringOptions
    let substancias: string
    let posicao: string
    let tempo: string
    let calcado: string
    let tipo_calc: string
    let palmilha: BigIntToLocaleStringOptions
    let fumante: BigIntToLocaleStringOptions
    let at_fisica: BigIntToLocaleStringOptions
    let ciclo_menstrual: BigIntToLocaleStringOptions
    let gestante: BigIntToLocaleStringOptions
    let dum: string
    let amamentando: BigIntToLocaleStringOptions
    let cpf: string

};

