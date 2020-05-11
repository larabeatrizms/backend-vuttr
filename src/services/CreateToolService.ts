import ToolsRepository from '../repositories/ToolsRepository';
import Tool from '../models/Tool';

interface Request {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

class CreateToolService {
  private toolsRepository: ToolsRepository;

  constructor(toolsRepository: ToolsRepository) {
    this.toolsRepository = toolsRepository;
  }

  public execute({ title, link, description, tags }: Request): Tool {
    const tool = this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default CreateToolService;
