import { describe, it, expect } from 'vitest';
import { InMemoryProductsRepository } from '../repositories/in-memory-products';
import { GetProductsByCategoryUseCase } from './get-products-by-category';

describe('Get Products By Category Use Case', () => {
  it('should be able to get products by category', async () => {
    const inMemoryProductsRepository = new InMemoryProductsRepository();
    const getProductsByCategoryUseCase = new GetProductsByCategoryUseCase(
      inMemoryProductsRepository
    );
    const output = await getProductsByCategoryUseCase.execute('Computers');

    expect(output).toHaveLength(1);
  });
});
