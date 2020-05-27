import FakeToolsRepository from '../repositories/fakes/FakeToolsRepository';
import CreateToolService from './CreateToolService';

import Tool from '@modules/tools/infra/typeorm/entities/Tool';
import AppError from '@shared/errors/AppError';
import ListToolService from './ListToolService';

describe('ListTools', () => {
  it('should be able to list tools', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const createTool = new CreateToolService(fakeToolsRepository);
    const listTool = new ListToolService(fakeToolsRepository);

    const tool1 = await createTool.execute({
      title: 'Lara',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning', 'collaboration', 'writing'],
    });

    const tool2 = await createTool.execute({
      title: 'Lara',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning', 'collaboration', 'writing'],
    });

    const tag = undefined;

    expect(listTool.execute(tag)).toHaveReturned;
  });

  it('should be able to list tools with tag filter', async () => {
    const fakeToolsRepository = new FakeToolsRepository();
    const createTool = new CreateToolService(fakeToolsRepository);
    const listTool = new ListToolService(fakeToolsRepository);

    await createTool.execute({
      title: 'Notion',
      link: 'https://notion.so',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['organization', 'planning', 'collaboration', 'writing'],
    });

    await createTool.execute({
      title: 'Evernote',
      link: 'https://evernote.com',
      description:
        'All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ',
      tags: ['planning', 'collaboration', 'writing'],
    });

    const tag = 'organization';

    const tools = await listTool.execute(tag);

    const toolsExists = tools ? [...tools] : [];

    expect(toolsExists[0]).toHaveProperty('id');
    expect(toolsExists[0].title).toBe('Notion');
  });
});
