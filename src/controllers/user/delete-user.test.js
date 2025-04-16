import { faker } from '@faker-js/faker';
import { DeleteUserController } from './delete-user.js';

describe('deleteUserController', () => {
  class DeleteUserUseCaseStub {
    execute() {
      return {
        id: faker.string.uuid(),
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({ length: 6 }),
      };
    }
  }

  const makeSut = () => {
    const deleteUserUseCase = new DeleteUserUseCaseStub();
    const sut = new DeleteUserController(deleteUserUseCase);
    return {
      sut,
      deleteUserUseCase,
    };
  };

  const httpRequest = {
    params: {
      userId: faker.string.uuid(),
    },
  };

  it('Should return 200 if user is deleted successfully', async () => {
    //arange
    const { sut } = makeSut();
    const httpRequest = {
      params: {
        userId: faker.string.uuid(),
      },
    };
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

  it('Should return 404 if user is not found', async () => {
    //arange
    const { sut, deleteUserUseCase } = makeSut();
    jest.spyOn(deleteUserUseCase, 'execute').mockImplementationOnce(() => null);

    //act
    const result = await sut.execute(httpRequest);

    //assert
    expect(result.statusCode).toBe(404);
  });

  it('Should return 500 if DeleteUserUseCase throws', async () => {
    //arrange
    const { sut, deleteUserUseCase } = makeSut();
    jest.spyOn(deleteUserUseCase, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });
    //act
    const result = await sut.execute(httpRequest);
    //assert
    expect(result.statusCode).toBe(500);
  });
});
