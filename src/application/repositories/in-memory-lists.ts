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

  async updateName(id: string, name: string): Promise<List> {
    const list = this.items.find((list) => list.id === id);
    const updatedList = { ...list, name };

    this.items.map((list) => {
      if (list.id === updatedList.id) list = updatedList;

      return list;
    });

    return updatedList;
  }
}
