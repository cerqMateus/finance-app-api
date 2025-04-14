import { faker } from '@faker-js/faker';
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
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({
          length: 6,
        }),
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(201);
    expect(result.body).toEqual(httpRequest.body);
  });

  it('should return 400 if first_name is not provided', async () => {
    //arange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({
          length: 6,
        }),
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if last_name is not provided', async () => {
    //arange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        first_name: faker.person.firstName(),
        email: faker.internet.email(),
        password: faker.internet.password({
          length: 6,
        }),
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if email is not provided', async () => {
    //arange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        password: faker.internet.password({
          length: 6,
        }),
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if email is not valid', async () => {
    //arange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: 'invalid_email',
        password: faker.internet.password({
          length: 6,
        }),
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if password is not provided', async () => {
    //arange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if password lenght is less than 6', async () => {
    //arange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({
          length: 5,
        }),
      },
    };

    //act

    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should call CreateUserUseCase with correct values', async () => {
    //arrange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: '123456',
      },
    };

    const executeSpy = jest.spyOn(createUserUseCase, 'execute');

    //act
    await createUserController.execute(httpRequest);

    //assert
    expect(executeSpy).toHaveBeenCalledWith(httpRequest.body);
  });

  it('should return 500 if CreateUserUseCase throws', async () => {
    //arrange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);
    const httpRequest = {
      body: {
        first_name: faker.person.firstName(),
        last_name: faker.person.lastName(),
        email: faker.internet.email(),
        password: faker.internet.password({
          length: 6,
        }),
      },
    };

    jest.spyOn(createUserUseCase, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });

    //act
    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(500);
  });
});
