import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';

describe('CreateTool', () => {
  it('should be able to create a new tool', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const createTool = new CreateToolService(fakeToolsRepository);

    const tool = await createTool.execute({
      title: 'Lara',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning', 'collaboration', 'writing'],
    });

    expect(tool).toHaveProperty('id');
  });
});
