import { Router, response } from 'express';

import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.get('/', toolsController.show);

toolsRouter.post('/', toolsController.create);

toolsRouter.delete('/:id', toolsController.delete);

export default toolsRouter;
