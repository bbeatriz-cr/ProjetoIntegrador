import {Model, DataTypes} from 'sequelize'
import {sequelize} from '../instances/mysql'

//passando os dados do banco para a linguagem
export interface UserInstance extends Model {
    id: number,
    name: string,
    age:number
}
//ensinando o sequelize sobre as infos do nosso banco
export const User = sequelize.define<UserInstance>("dados_pessoais,",{

    id:{
        primaryKey: true,
        type:DataTypes.INTEGER
    },
    nome: {
        type:DataTypes.STRING
    },
    data:{
        type:DataTypes.INTEGER,
    },
    endereco:{
        type:DataTypes.STRING,
    },
    bairro:{
        type:DataTypes.STRING
    },
    cidade:{
        type:DataTypes.STRING
    },
    estado:{
        type:DataTypes.STRING
    },
    cep:{
        type:DataTypes.INTEGER
    },
    tel_res:{
        type:DataTypes.INTEGER
    },
    tel:{
        type:DataTypes.INTEGER
    },
    tel_emergencia:{
        type:DataTypes.INTEGER
    },
    contato:{
        type:DataTypes.INTEGER
    },
    data_nasc:{
        type:DataTypes.INTEGER,
        defaultValue: 18
    },
    profissao:{
        type:DataTypes.STRING
    },
    email:{
        type:DataTypes.STRING
    },
    sexo:{
        type:DataTypes.STRING
    }


},{
    tableName: 'dados_pessoais',
    timestamps: false
})