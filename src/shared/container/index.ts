import { container } from 'tsyringe';

import IToolsRepository from '@modules/tools/repositories/IToolsRepository';
import ToolsRepository from '@modules/tools/infra/typeorm/repositories/ToolsRepository';

container.registerSingleton<IToolsRepository>(
  'ToolsRepository',
  ToolsRepository,
);
