import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateToolService from '@modules/tools/services/CreateToolService';
import DeleteToolService from '@modules/tools/services/DeleteToolService';
import ListToolService from '@modules/tools/services/ListToolService';

export default class AppointmentsController {
  public async create(request: Request, response: Response): Promise<Response> {
    const { title, link, description, tags } = request.body;

    const createTool = container.resolve(CreateToolService);

    const tool = await createTool.execute({
      title,
      link,
      description,
      tags,
    });

    return response.json(tool);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const { id } = request.params;

    const deleteTool = container.resolve(DeleteToolService);

    await deleteTool.execute({ id });

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const { tag } = request.query;

    const toolsRepository = container.resolve(ListToolService);

    const tagFilter = tag ? tag.toString() : undefined;

    const filterTools = await toolsRepository.execute(tagFilter);

    return response.json(filterTools);
  }
}
