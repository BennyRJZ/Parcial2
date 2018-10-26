import { Request, Response, NextFunction } from 'express';
import { SepomexInstance } from './../models/sepomex';
import * as Sequelize from 'sequelize';
import Models from './../models';

class EstadoCtrl {

    constructor() { }

    public getEstados(req: Request, res: Response, next: NextFunction) {
        Models.Sepomex
            .findAll({
                attributes: [Sequelize.literal('DISTINCT idestado'), 'idestado', 'estado'],
                order: ['idestado']
            })
            .then((result: any) => {
                res.status(200).json({
                    "message": "OK",
                    "data": result
                })
            })
            .catch((err: Error) => res.status(500).json({"message": `Error trying to access states ${err}`}));
    }

    public municipiosFromEstado(req: Request, res: Response, next: NextFunction) {
        Models.Sepomex
            .findAll({
                attributes: [Sequelize.literal('DISTINCT idmunicipio'), 'idmunicipio', 'municipio'],
                order: ['idmunicipio'],
                where: {
                    idestado: parseInt(req.params.idestado)
                }
            })
            .then((result: any) => {
                res.status(200).json({
                    "message": "OK",
                    "data": result
                })
            })
            .catch((err: Error) => res.status(500).json({"message": `Error in trying to access municipalities through states ${err}`}));
    }

    public coloniasFromEstado(req: Request, res: Response, next: NextFunction) {
        Models.Sepomex
            .findAll({
                attributes: [Sequelize.literal('DISTINCT asentamiento'), 'asentamiento', 'cp', 'tipo', 'municipio'],
                where: {
                    idestado: parseInt(req.params.idestado)
                }
            })
            .then((result: any) => {
                res.status(200).json({
                    "message": "OK",
                    "data": result
                })
            })
            .catch((err: Error) => res.status(500).json({"message": `Error trying to access the colonies through states ${err}`}));
    }
}

export default new EstadoCtrl();