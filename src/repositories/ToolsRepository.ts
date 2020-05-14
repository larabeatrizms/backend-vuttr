import { EntityRepository, Repository } from 'typeorm';

import Tool from '../models/Tool';

interface findByTagsDTO {
  tag: string;
}

@EntityRepository(Tool)
class ToolsRepository extends Repository<Tool> {
  public async findByTags({ tag }: findByTagsDTO): Promise<Tool[]> {
    const tools = await this.find();

    const tagFilter = tools.filter(tool => {
      return tool.tags.includes(tag);
    });

    return tagFilter;
  }
}

export default ToolsRepository;
