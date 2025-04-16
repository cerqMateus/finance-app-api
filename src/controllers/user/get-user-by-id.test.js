import { faker } from '@faker-js/faker';
import { GetUserByIdController } from './get-user-by-id.js';

describe('GetUserByIdController', () => {
  class GetUserByIdUseCaseStub {
    async execute() {
      return {
        id: faker.string.uuid(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({
          length: 6,
        }),
      };
    }
  }

  const makeSut = () => {
    const getUserByIdUseCaseStub = new GetUserByIdUseCaseStub();
    const sut = new GetUserByIdController(getUserByIdUseCaseStub);
    return {
      sut,
      getUserByIdUseCaseStub,
    };
  };

  it('should return 200 when get user by id successfully', async () => {
    //arrange
    const { sut } = makeSut();

    //act
    const result = await sut.execute({
      params: {
        userId: faker.string.uuid(),
      },
    });

    //assert
    expect(result.statusCode).toBe(200);
  });
});
