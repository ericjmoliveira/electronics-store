import { CustomerProps } from '../entities/customer';

export interface CustomersRepository {
  create(data: CustomerProps): Promise<void>;
}
