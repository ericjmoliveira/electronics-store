import { ListsRepository } from '@/domain/contracts/lists-repository';
import { List } from '@/domain/entities/list';

export class InMemoryListsRepository implements ListsRepository {
  items: List[] = [];

  async create(list: List): Promise<void> {
    this.items.push(list);
  }

  getListLength() {
    return this.items.length;
  }
}
