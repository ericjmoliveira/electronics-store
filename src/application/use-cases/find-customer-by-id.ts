import { CustomersRepository } from '@/domain/contracts/customers-repository';

export class FindCustomerByIdUseCase {
  constructor(private customersRepository: CustomersRepository) {}

  async execute(input: string) {
    const customer = await this.customersRepository.findById(input);

    return customer;
  }
}
