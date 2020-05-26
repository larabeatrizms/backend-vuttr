import Tool from '../infra/typeorm/entities/Tool';

import ICreateToolDTO from '../dtos/ICreateToolDTO';

export default interface IAppointmentsRepository {
  create(data: ICreateToolDTO): Promise<Tool>;
  list(): Promise<Tool[]>;
  remove(data: Tool): Promise<void>;
  findByTags(tag: string): Promise<Tool[] | undefined>;
  findById(id: string): Promise<Tool | undefined>;
}
