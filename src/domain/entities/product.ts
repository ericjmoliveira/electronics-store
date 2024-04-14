import { randomUUID } from 'node:crypto';

import { Category } from './category';

interface ProductProps {
  name: string;
  price: number;
  info: string[];
  image: string;
  category: Category;
}

export class Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  info: string[];
  image: string;
  category: Category;

  constructor({ name, price, info, image, category }: ProductProps) {
    this.id = randomUUID();
    this.name = name;
    this.slug = this.name.replace(' ', '-').toLowerCase();
    this.price = price;
    this.info = info;
    this.image = image;
    this.category = category;
  }
}
