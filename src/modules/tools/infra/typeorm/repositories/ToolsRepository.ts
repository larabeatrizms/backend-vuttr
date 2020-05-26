import { EntityRepository, Repository, getRepository } from 'typeorm';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

import Tool from '../entities/Tool';

@EntityRepository(Tool)
class ToolsRepository implements IToolsRepository {
  private ormRepository: Repository<Tool>;

  constructor() {
    this.ormRepository = getRepository(Tool);
  }

  public async findByTags(tag: string): Promise<Tool[]> {
    const findTool = await this.ormRepository.find();

    const tagFilter = findTool.filter(tool => {
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
    const tool = this.ormRepository.create({ title, link, description, tags });

    await this.ormRepository.save(tool);

    return tool;
  }

  public async findById(id: string): Promise<Tool | undefined> {
    const tool = await this.ormRepository.findOne(id);

    return tool;
  }

  public async remove(data: Tool): Promise<void> {
    await this.ormRepository.remove(data);
  }

  public async list(): Promise<Tool[]> {
    const tools = await this.ormRepository.find();

    return tools;
  }
}

export default ToolsRepository;
