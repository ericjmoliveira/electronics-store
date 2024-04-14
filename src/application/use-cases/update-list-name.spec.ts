import { describe, it, expect } from 'vitest';
import { InMemoryListsRepository } from '../repositories/in-memory-lists';
import { CreateListUseCase } from './create-list';
import { Customer } from '@/domain/entities/customer';
import { UpdateListNameUseCase } from './update-list-name';

describe('Update List Name Use Case', () => {
  it('should be able to update a list name', async () => {
    const inMemoryListsRepository = new InMemoryListsRepository();
    const createListUseCase = new CreateListUseCase(inMemoryListsRepository);
    const { id } = await createListUseCase.execute({
      customer: new Customer({ firstName: 'John', lastName: 'Doe', email: 'johndoe@mail.com' }),
      name: 'My List'
    });
    const updateListNameUseCase = new UpdateListNameUseCase(inMemoryListsRepository);
    const updatedList = await updateListNameUseCase.execute({ id, name: 'Updated List Name' });

    expect(updatedList.name).toBe('Updated List Name');
  });
});
