import { ListsRepository } from '@/domain/contracts/lists-repository';

export class UpdateListNameUseCase {
  constructor(private readonly listsRepository: ListsRepository) {}

  async execute(input: { id: string; name: string }) {
    const list = await this.listsRepository.updateName(input.id, input.name);

    return list;
  }
}
