import { Sequelize, DataTypes } from 'sequelize';

export interface SepomexAttributes {
    idestado ? : number;
    estado ? : string;
    idmunicipio ? : number;
    municipio ? : string;
    ciudad ? : string;
    zona ? : string;
    cp ? : number;
    asentamiento ? : string;
    tipo ? : string;
}

export interface SepomexInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    idestado: number;
    estado: string;
    idmunicipio: number;
    municipio: string;
    ciudad: string;
    zona: string;
    cp: number;
    asentamiento: string;
    tipo: string;

}

export default function defineSepomex(sequelize: Sequelize, DataTypes: DataTypes): any {
    var Sepomex = sequelize.define('Sepomex', {
        idestado: DataTypes.INTEGER,
        estado: DataTypes.STRING,
        idmunicipio: DataTypes.INTEGER,
        municipio: DataTypes.STRING,
        ciudad: DataTypes.STRING,
        zona: DataTypes.STRING,
        cp: DataTypes.INTEGER,
        asentamiento: DataTypes.STRING,
        tipo: DataTypes.STRING
    }, {
        tableName: 'sepomex'
    });

    return Sepomex;
};
