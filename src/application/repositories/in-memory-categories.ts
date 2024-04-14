import { CategoriesRepository } from '@/domain/contracts/categories-repository';
import { Category } from '@/domain/entities/category';

export class InMemoryCategoriesRepository implements CategoriesRepository {
  items: Category[] = [];

  constructor() {
    const computers = new Category({ name: 'Computers' });
    const cellPhones = new Category({ name: 'Cell Phones' });
    const tablets = new Category({ name: 'Tablets' });

    this.items.push(computers);
    this.items.push(cellPhones);
    this.items.push(tablets);
  }

  async getAll(): Promise<Category[]> {
    return this.items;
  }
}
