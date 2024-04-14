import { describe, it, expect } from 'vitest';
import { InMemoryProductsRepository } from '../repositories/in-memory-products';
import { FindProductByIdUseCase } from './find-product-by-id';
import { GetProductsByCategoryUseCase } from './get-products-by-category';

describe('Find Product By ID Use Case', () => {
  it('should be able to find a product by ID', async () => {
    const inMemoryProductsRepository = new InMemoryProductsRepository();
    const getProductsByCategoryUseCase = new GetProductsByCategoryUseCase(
      inMemoryProductsRepository
    );
    const products = await getProductsByCategoryUseCase.execute('Computers');
    const findProductByIdUseCase = new FindProductByIdUseCase(inMemoryProductsRepository);
    const output = await findProductByIdUseCase.execute(products[0].id);

    expect(output).not.toBeUndefined();
  });
});
