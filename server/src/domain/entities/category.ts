import { randomUUID } from 'node:crypto';

interface CategoryProps {
  name: string;
}

export class Category {
  id: string;
  name: string;

  constructor({ name }: CategoryProps) {
    this.id = randomUUID();
    this.name = name;
  }
}
