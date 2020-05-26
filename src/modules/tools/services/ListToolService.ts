import { injectable, inject } from 'tsyringe';

import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';

@injectable()
class ListToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute(tag: string | undefined): Promise<Tool[] | undefined> {
    if (!tag) {
      const tools = await this.toolsRepository.list();
      return tools;
    }

    const filterTools = await this.toolsRepository.findByTags(tag);

    return filterTools;
  }
}

export default ListToolService;
