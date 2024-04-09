import { describe, it, expect } from 'vitest';
import { InMemoryCategoriesRepository } from '../repositories/in-memory-categories';
import { GetAllCategoriesUseCase } from './get-all-categories';

describe('Get All Categories Use Case', () => {
  it('should be able to get all categories', async () => {
    const inMemoryCategoriesRepository = new InMemoryCategoriesRepository();
    const getAllCategoriesUseCase = new GetAllCategoriesUseCase(inMemoryCategoriesRepository);
    const output = await getAllCategoriesUseCase.execute();

    expect(output).toHaveLength(3);
  });
});
