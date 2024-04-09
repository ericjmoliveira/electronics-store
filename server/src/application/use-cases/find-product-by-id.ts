import { ProductsRepository } from '@/domain/contracts/products-repository';

export class FindProductByIdUseCase {
  constructor(private readonly productsRepository: ProductsRepository) {}

  async execute(input: string) {
    const product = this.productsRepository.findById(input);

    return product;
  }
}
