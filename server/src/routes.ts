import express, { request } from 'express';
import ClassesController from './controllers/ClasssesController';
import ConnectionsController from './controllers/ConnectionsController';

const routes = express.Router();
const classesController = new ClassesController();
const connectionsController = new ConnectionsController();

// Mostrar dados da requisição: request.body;
// Mostrar parâmetros da rota: request.params;
// Mostrar parâmetros gerais: request.query;

routes.get('/classes', classesController.index);
routes.post('/classes', classesController.create);

routes.get('/connections', connectionsController.index);
routes.post('/connections', connectionsController.create);

export default routes;