import { Customer, CustomerProps } from '../entities/customer';

export interface CustomersRepository {
  create(data: CustomerProps): Promise<void>;
  findById(id: string): Promise<Customer>;
}
