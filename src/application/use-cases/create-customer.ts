import { CustomersRepository } from '@/domain/contracts/customers-repository';
import { Customer, CustomerProps } from '@/domain/entities/customer';

export class CreateCustomerUseCase {
  constructor(private readonly customersRepository: CustomersRepository) {}

  async execute(input: CustomerProps) {
    const customer = new Customer({
      firstName: input.firstName,
      lastName: input.firstName,
      email: input.email
    });

    await this.customersRepository.create(customer);

    return customer;
  }
}
