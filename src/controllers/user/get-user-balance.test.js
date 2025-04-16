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

  it('Should return 400 if id is invalid', async () => {
    //arange
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        userId: 'invalid_id',
      },
    };
    //act
    const result = await sut.execute(httpRequest);
    //assert
    expect(result.statusCode).toBe(400);
  });

  it('Should return 500 if GetUserBalanceUseCase throws', async () => {
    //arange
    const { sut, getUserBalanceUseCase } = makeSut();
    jest.spyOn(getUserBalanceUseCase, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });
    //act
    const result = await sut.execute(httpRequest);
    //assert
    expect(result.statusCode).toBe(500);
  });
});
