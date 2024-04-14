import { describe, it, expect } from 'vitest';
import { InMemoryListsRepository } from '../repositories/in-memory-lists';
import { CreateListUseCase } from './create-list';
import { Customer } from '@/domain/entities/customer';
import { List } from '@/domain/entities/list';

describe('Create List Use Case', () => {
  it('should be a create a list', async () => {
    const inMemoryListsRepository = new InMemoryListsRepository();
    const createListUseCase = new CreateListUseCase(inMemoryListsRepository);
    const list = await createListUseCase.execute({
      customer: new Customer({
        firstName: 'John',
        lastName: 'Doe',
        email: 'johndoe@mail.com'
      }),
      name: 'My List'
    });

    expect(list).toBeInstanceOf(List);
  });
});
