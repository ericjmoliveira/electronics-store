import { Category } from '../entities/category';

export interface CategoriesRepository {
  getAll(): Promise<Category[]>;
}
