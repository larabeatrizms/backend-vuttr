import { uuid } from 'uuidv4';

class Tool {
  id: string;

  title: string;

  link: string;

  description: string;

  tags: string[];

  constructor({ title, link, description, tags }: Omit<Tool, 'id'>) {
    this.id = uuid();
    this.title = title;
    this.link = link;
    this.description = description;
    this.tags = tags;
  }
}

export default Tool;
