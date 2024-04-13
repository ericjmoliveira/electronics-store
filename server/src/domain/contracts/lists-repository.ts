import { List } from '../entities/list';

export interface ListsRepository {
  create(list: List): Promise<void>;
}
