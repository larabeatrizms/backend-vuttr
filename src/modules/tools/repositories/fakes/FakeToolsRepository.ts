import { uuid } from 'uuidv4';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

import Tool from '@modules/tools/infra/typeorm/entities/Tool';

class ToolsRepository implements IToolsRepository {
  private tools: Tool[] = [];

  public async findByTags(tag: string): Promise<Tool[]> {
    const tagFilter = this.tools.filter(tool => {
      return tool.tags.includes(tag);
    });

    return tagFilter;
  }

  public async create({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = new Tool();

    Object.assign(tool, { id: uuid(), title, link, description, tags });

    this.tools.push(tool);

    return tool;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = this.tools.find(tool => tool.id === id);

    return tool;
  }

  public async remove(data: Tool): Promise<void> {
    const toolIndex = this.tools.findIndex(tool => tool.id === data.id);

    this.tools.splice(toolIndex, 1);
  }

  public async list(): Promise<Tool[]> {
    return this.tools;
  }
}

export default ToolsRepository;
