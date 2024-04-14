import { List } from '../entities/list';

export interface ListsRepository {
  create(list: List): Promise<void>;
  updateName(id: string, name: string): Promise<List>;
}
