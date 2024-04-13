import { describe, it, expect } from 'vitest';
import { InMemoryCustomersRepository } from '../repositories/in-memory-customers';
import { CreateCustomerUseCase } from './create-customer';
import { FindCustomerByIdUseCase } from './find-customer-by-id';

describe('Find Customer By ID Use Case', () => {
  it('should be able to find a customer by ID', async () => {
    const inMemoryCustomersRepository = new InMemoryCustomersRepository();
    const createCustomerUseCase = new CreateCustomerUseCase(inMemoryCustomersRepository);
    const { id } = await createCustomerUseCase.execute({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com'
    });

    const findCustomerByIdUseCase = new FindCustomerByIdUseCase(inMemoryCustomersRepository);
    const customer = await findCustomerByIdUseCase.execute(id);

    expect(customer.id).toBe(id);
  });
});
