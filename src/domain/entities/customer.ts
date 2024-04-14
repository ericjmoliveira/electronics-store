import { randomUUID } from 'node:crypto';

export interface CustomerProps {
  firstName: string;
  lastName: string;
  email: string;
}

export class Customer {
  id: string;
  firstName: string;
  lastName: string;
  email: string;

  constructor({ firstName, lastName, email }: CustomerProps) {
    this.id = randomUUID();
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
  }
}
