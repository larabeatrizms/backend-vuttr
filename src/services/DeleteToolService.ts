import { getCustomRepository } from 'typeorm';
import ToolRepository from '../repositories/ToolsRepository';
import ToolsRepository from '../repositories/ToolsRepository';

interface Request {
  id: string;
}

class DeleteToolService {
  public async execute({ id }: Request): Promise<void> {
    const toolsRepository = getCustomRepository(ToolsRepository);

    const tool = await toolsRepository.findOne({ where: { id } });

    if (!tool) {
      throw new Error('There is no such tool.');
    }

    await toolsRepository.remove(tool);
  }
}

export default DeleteToolService;
