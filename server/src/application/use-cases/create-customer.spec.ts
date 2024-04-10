import { describe, it, expect } from 'vitest';

import { InMemoryCustomersRepository } from '../repositories/in-memory-customers';
import { CreateCustomerUseCase } from './create-customer';
import { Customer } from '@/domain/entities/customer';

describe('Create Customer Use Case', () => {
  it('should be able to create a customer', async () => {
    const inMemoryCustomersRepository = new InMemoryCustomersRepository();
    const createCustomerUseCase = new CreateCustomerUseCase(inMemoryCustomersRepository);
    const output = await createCustomerUseCase.execute({
      firstName: 'John',
      lastName: 'Doe',
      email: 'johndoe@mail.com'
    });

    expect(output).toBeInstanceOf(Customer);
  });
});
