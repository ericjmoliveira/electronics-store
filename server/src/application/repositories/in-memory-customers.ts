import { CustomersRepository } from '@/domain/contracts/customers-repository';
import { Customer } from '@/domain/entities/customer';

export class InMemoryCustomersRepository implements CustomersRepository {
  items: Customer[] = [];

  async create(customer: Customer): Promise<void> {
    this.items.push(customer);
  }
}
