import { CreateUserController } from './create-user.js';

describe('Create User Controller', () => {
  class CreateUserUseStub {
    execute(user) {
      return user;
    }
  }

  it('should return 201 when create a new user successfully', async () => {
    //arrange
    const createUserController = new CreateUserController(
      new CreateUserUseStub(),
    );
    const httpRequest = {
      body: {
        first_name: 'Mateus',
        last_name: 'Cerqueira',
        email: 'teste@email.com',
        password: 'teste123',
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(201);
    expect(result.body).toBe(httpRequest.body);
  });

  it('should return 400 if first_name is not provided', async () => {
    //arange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        last_name: 'Cerqueira',
        email: 'teste@email.com',
        password: 'teste123',
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(400);
  });
});
