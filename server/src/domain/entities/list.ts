import { randomUUID } from 'node:crypto';

import { Customer } from './customer';
import { ListItem } from './list-item';

export interface ListProps {
  customer: Customer;
  name: string;
}

export class List {
  id: string;
  customer: Customer;
  name: string;
  createdAt: Date;
  items: ListItem[];

  constructor({ customer, name }: ListProps) {
    this.id = randomUUID();
    this.customer = customer;
    this.name = name;
    this.createdAt = new Date();
  }
}
