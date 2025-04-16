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
});
