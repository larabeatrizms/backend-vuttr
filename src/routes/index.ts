import { Router } from 'express';
import toolsRouter from './toolsRouter.routes';

const routes = Router();

routes.use('/tools', toolsRouter);

export default routes;
