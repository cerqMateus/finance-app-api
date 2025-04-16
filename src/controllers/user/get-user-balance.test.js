import { faker } from '@faker-js/faker';
import { GetUserBalanceController } from './get-user-balance.js';

describe('getUserBalanceController', () => {
  class GetUserBalanceUseCaseStub {
    async execute() {
      return faker.number.int();
    }
  }

  const makeSut = () => {
    const getUserBalanceUseCase = new GetUserBalanceUseCaseStub();
    const sut = new GetUserBalanceController(getUserBalanceUseCase);
    return {
      sut,
      getUserBalanceUseCase,
    };
  };

  const httpRequest = {
    params: {
      userId: faker.string.uuid(),
    },
  };

  it('Should return 200 if user balance is retrieved successfully', async () => {
    //arange
    const { sut } = makeSut();
    //act
    const result = await sut.execute(httpRequest);
    //assert
    expect(result.statusCode).toBe(200);
  });
});
