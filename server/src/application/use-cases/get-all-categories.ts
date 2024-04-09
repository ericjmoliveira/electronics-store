import { CategoriesRepository } from '@/domain/contracts/categories-repository';

export class GetAllCategoriesUseCase {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  async execute() {
    const categories = await this.categoriesRepository.getAll();

    return categories;
  }
}
