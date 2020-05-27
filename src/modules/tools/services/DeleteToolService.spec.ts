import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';
import DeleteToolService from './DeleteToolService';

import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import AppError from '@shared/errors/AppError';

describe('DeleteTool', () => {
  it('should be able to delete a tool', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const createTool = new CreateToolService(fakeToolsRepository);
    const deleteTool = new DeleteToolService(fakeToolsRepository);

    const removeTool = jest.spyOn(fakeToolsRepository, 'remove');

    const tool = await createTool.execute({
      title: 'Lara',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning', 'collaboration', 'writing'],
    });

    await deleteTool.execute(tool);

    expect(removeTool).toHaveBeenCalled();
  });

  it('should not be able to delete a nonexistent tool', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const deleteTool = new DeleteToolService(fakeToolsRepository);

    const tool = {
      id: '87928374',
      title: 'Lara',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning', 'collaboration', 'writing'],
    };

    expect(deleteTool.execute(tool as Tool)).rejects.toBeInstanceOf(AppError);
  });
});
