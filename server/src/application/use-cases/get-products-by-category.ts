import { ProductsRepository } from '@/domain/contracts/products-repository';

export class GetProductsByCategoryUseCase {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(input: string) {
    const products = this.productsRepository.getByCategory(input);

    return products;
  }
}
