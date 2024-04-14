import { ListsRepository } from '@/domain/contracts/lists-repository';
import { List, ListProps } from '@/domain/entities/list';

export class CreateListUseCase {
  constructor(private listsRepository: ListsRepository) {}

  async execute(input: ListProps) {
    const list = new List({ customer: input.customer, name: input.name });

    return list;
  }
}
