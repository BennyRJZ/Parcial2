import { Application } from 'express';
import EstadoCtrl from './controllers/EstadoCtrl';
import MunicipioCtrl from './controllers/MunicipioCtrl';

class Routes {

    constructor(app: Application) {
        this.getRoutes(app);
    }

    private getRoutes(app: Application): void {
        app.route('/api/estados').get(EstadoCtrl.getEstados);
        app.route('/api/estados/:idestado').get(EstadoCtrl.municipiosFromEstado);
        app.route('/api/estados/colonias/:idestado').get(EstadoCtrl.coloniasFromEstado);
        app.route('/api/municipios').get(MunicipioCtrl.getMunicipios);
        app.route('/api/municipios/:idmunicipio').get(MunicipioCtrl.coloniasFromMunicipios);
    }
}

export default Routes;