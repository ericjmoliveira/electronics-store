import { List } from './list';
import { Product } from './product';

interface ListItemProps {
  list: List;
  product: Product;
}

export class ListItem {
  list: List;
  product: Product;
  addedAt: Date;

  constructor({ list, product }: ListItemProps) {
    this.list = list;
    this.product = product;
    this.addedAt = new Date();
  }
}
