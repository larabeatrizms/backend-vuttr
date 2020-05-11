import Tool from '../models/Tool';

interface CreateToolDTO {
  title: string;
  link: string;
  description: string;
  tags: string[];
}

interface DeleteToolDTO {
  id: string;
}

interface tagFilterDTO {
  tag: string;
}

class ToolsRepository {
  private tools: Tool[];

  constructor() {
    this.tools = [];
  }
  public all(): Tool[] {
    return this.tools;
  }

  public create({ title, link, description, tags }: CreateToolDTO): Tool {
    const tool = new Tool({ title, link, description, tags });

    this.tools.push(tool);

    return tool;
  }

  public remove({ id }: DeleteToolDTO) {
    const toolIndex = this.tools.findIndex((tool) => tool.id === id);

    if (toolIndex < 0) {
      throw new Error('Tool not found.');
    }

    this.tools.splice(toolIndex, 1);
  }

  public tagFilter({ tag }: tagFilterDTO): Tool[] {
    const tools = this.tools.filter((tool) => {
      return tool.tags.includes(tag);
    });

    return tools;
  }
}

export default ToolsRepository;
