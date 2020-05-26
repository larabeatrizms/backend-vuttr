import { injectable, inject } from 'tsyringe';

import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import IToolsRepository from '@modules/tools/repositories/IToolsRepository';

import ICreateToolDTO from '@modules/tools/dtos/ICreateToolDTO';

@injectable()
class CreateToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({
    title,
    link,
    description,
    tags,
  }: ICreateToolDTO): Promise<Tool> {
    const tool = await this.toolsRepository.create({
      title,
      link,
      description,
      tags,
    });

    return tool;
  }
}

export default CreateToolService;
