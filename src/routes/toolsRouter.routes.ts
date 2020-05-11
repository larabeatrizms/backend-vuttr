import { Router, request } from 'express';
import ToolsRepository from '../repositories/ToolsRepository';
import CreateToolService from '../services/CreateToolService';

const toolsRouter = Router();

const toolsRepository = new ToolsRepository();

toolsRouter.get('/', (request, response) => {
  try {
    const { tag } = request.query;

    if (!tag) {
      const tools = toolsRepository.all();
      return response.json(tools);
    }
    tag.toString();
    const filterTools = toolsRepository.tagFilter({ tag });

    return response.json(filterTools);
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

toolsRouter.post('/', (request, response) => {
  try {
    const { title, link, description, tags } = request.body;

    const createTool = new CreateToolService(toolsRepository);

    const tool = createTool.execute({
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

toolsRouter.delete('/:id', (request, response) => {
  try {
    const { id } = request.params;

    toolsRepository.remove({ id });

    return response.status(204).send();
  } catch (err) {
    return response.status(400).json({ error: err.message });
  }
});

export default toolsRouter;
