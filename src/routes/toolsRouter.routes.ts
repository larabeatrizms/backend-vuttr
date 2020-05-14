import { Router } from 'express';
import ToolsRepository from '../repositories/ToolsRepository';
import CreateToolService from '../services/CreateToolService';
import DeleteToolService from '../services/DeleteToolService';

import { getCustomRepository } from 'typeorm';

const toolsRouter = Router();

// const toolsRepository = new ToolsRepository();

toolsRouter.get('/', async (request, response) => {
  try {
    const { tag } = request.query;

    const toolsRepository = getCustomRepository(ToolsRepository);

    if (!tag) {
      const tools = await toolsRepository.find();
      return response.json(tools);
    }

    const filterTools = await toolsRepository.findByTags({
      tag: tag.toString(),
    });

    return response.json(filterTools);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

toolsRouter.post('/', async (request, response) => {
  try {
    const { title, link, description, tags } = request.body;

    const createTool = new CreateToolService();

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
    });

    return response.json(tool);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

toolsRouter.delete('/:id', async (request, response) => {
  try {
    const { id } = request.params;

    const deleteTool = new DeleteToolService();

    await deleteTool.execute({ id });

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default toolsRouter;
