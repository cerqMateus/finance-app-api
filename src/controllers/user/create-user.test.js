import { faker } from '@faker-js/faker';
import { CreateUserController } from './create-user.js';

describe('Create User Controller', () => {
  class CreateUserUseStub {
    execute(user) {
      return user;
    }
  }

  const makeSut = () => {
    const createUserUseCase = new CreateUserUseStub();
    const sut = new CreateUserController(createUserUseCase);
    return {
      createUserUseCase,
      sut,
    };
  };

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

  it('should return 201 when create a new user successfully', async () => {
    //arrange

    const { sut } = makeSut();

    //act

    const result = await sut.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(201);
    expect(result.body).toEqual(httpRequest.body);
  });

  it('should return 400 if first_name is not provided', async () => {
    //arange
    const { sut } = makeSut();

    //act

    const result = await sut.execute({
      body: { ...httpRequest.body, first_name: undefined },
    });

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if last_name is not provided', async () => {
    //arange

    const { sut } = makeSut();

    //act

    const result = await sut.execute({
      body: { ...httpRequest.body, last_name: undefined },
    });
    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if email is not provided', async () => {
    //arange
    const { sut } = makeSut();
    //act

    const result = await sut.execute({
      body: { ...httpRequest.body, email: undefined },
    });
    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if email is not valid', async () => {
    //arange
    const { sut } = makeSut();

    //act

    const result = await sut.execute({
      body: { ...httpRequest.body, email: 'invalid_email' },
    });

    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if password is not provided', async () => {
    //arange
    const { sut } = makeSut();

    //act

    const result = await sut.execute({
      body: { ...httpRequest.body, password: undefined },
    });
    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if password lenght is less than 6', async () => {
    //arange
    const { sut } = makeSut();

    //act
    const result = await sut.execute({
      body: {
        ...httpRequest.body,
        password: faker.internet.password({ length: 5 }),
      },
    });
    //assert

    expect(result.statusCode).toBe(400);
  });

  it('should call CreateUserUseCase with correct values', async () => {
    //arrange
    const { sut, createUserUseCase } = makeSut();
    const executeSpy = jest.spyOn(createUserUseCase, 'execute');

    //act
    await sut.execute(httpRequest);

    //assert
    expect(executeSpy).toHaveBeenCalledWith(httpRequest.body);
  });

  it('should return 500 if CreateUserUseCase throws', async () => {
    //arrange
    const createUserUseCase = new CreateUserUseStub();
    const createUserController = new CreateUserController(createUserUseCase);

    jest.spyOn(createUserUseCase, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });

    //act
    const result = await createUserController.execute(httpRequest);

    //assert

    expect(result.statusCode).toBe(500);
  });
});
