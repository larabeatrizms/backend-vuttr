import ToolsRepository from '../repositories/ToolsRepository';
import Tool from '../models/Tool';
import { getCustomRepository } from 'typeorm';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

class CreateToolService {
  public async execute({
    title,
    link,
    description,
    tags,
  }: Request): Promise<Tool> {
    const toolsRepository = getCustomRepository(ToolsRepository);

    const tool = toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    await toolsRepository.save(tool);

    return tool;
  }
}

export default CreateToolService;
