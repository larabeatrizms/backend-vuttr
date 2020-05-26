import { Router } from 'express';
import ToolsRepository from '@modules/tools/infra/typeorm/repositories/ToolsRepository';
import CreateToolService from '@modules/tools/services/CreateToolService';
import DeleteToolService from '@modules/tools/services/DeleteToolService';

import { getCustomRepository } from 'typeorm';

import ToolsController from '../controllers/ToolsController';

const toolsRouter = Router();
const toolsController = new ToolsController();

toolsRouter.get('/', toolsController.show);

toolsRouter.post('/', toolsController.create);

toolsRouter.delete('/:id', toolsController.delete);

export default toolsRouter;
