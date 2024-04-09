import { Product } from '../entities/product';

export interface ProductsRepository {
  getByCategory(category: string): Promise<Product[]>;
  findById(id: string): Promise<Product | undefined>;
}
