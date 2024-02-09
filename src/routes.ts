import { Router } from 'express';
import userController from './controlers/userControll';

const routes = Router();

routes.get('/users', userController.index);
routes.post('/user', userController.create);

export default routes;