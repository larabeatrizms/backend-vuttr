import { injectable, inject } from 'tsyringe';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import AppError from '@shared/errors/AppError';

interface Request {
  id: string;
}

@injectable()
class DeleteToolService {
  constructor(
    @inject('ToolsRepository')
    private toolsRepository: IToolsRepository,
  ) {}

  public async execute({ id }: Request): Promise<void> {
    const tool = await this.toolsRepository.findById(id);

    if (!tool) {
      throw new AppError('There is no such tool.');
    }

    await this.toolsRepository.remove(tool);
  }
}

export default DeleteToolService;
