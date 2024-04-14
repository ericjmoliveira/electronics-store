import { ProductsRepository } from '@/domain/contracts/products-repository';
import { Category } from '@/domain/entities/category';
import { Product } from '@/domain/entities/product';

export class InMemoryProductsRepository implements ProductsRepository {
  items: Product[] = [];

  constructor() {
    const macBook = new Product({
      name: 'MacBook',
      price: 1500,
      info: ['Info 1', 'Info 2'],
      image: 'http://image.com/macbook',
      category: new Category({ name: 'Computers' })
    });
    const iPhone = new Product({
      name: 'iPhone',
      price: 1000,
      info: ['Info 3', 'Info 4'],
      image: 'http://image.com/iphone',
      category: new Category({ name: 'Cell Phones' })
    });
    const iPad = new Product({
      name: 'iPad',
      price: 500,
      info: ['Info 5', 'Info 6'],
      image: 'http://image.com/ipad',
      category: new Category({ name: 'Tablets' })
    });

    this.items.push(macBook);
    this.items.push(iPhone);
    this.items.push(iPad);
  }

  async getByCategory(category: string): Promise<Product[]> {
    const products = this.items.filter((product) => product.category.name === category);

    return products;
  }

  async findById(id: string): Promise<Product | undefined> {
    const product = this.items.find((product) => (product.id = id));

    return product;
  }
}
