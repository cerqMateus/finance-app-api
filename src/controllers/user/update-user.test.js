import { faker } from '@faker-js/faker';
import { UpdateUserController } from './update-user.js';

describe('UpdateUserController', () => {
  class updateUserUseCaseStub {
    async execute(user) {
      return user;
    }
  }

  const makeSut = () => {
    const updateUserUseCase = new updateUserUseCaseStub();
    const sut = new UpdateUserController(updateUserUseCase);
    return { sut, updateUserUseCase };
  };

  const httpRequest = {
    params: {
      userId: faker.string.uuid(),
    },
    body: {
      first_name: faker.person.firstName(),
      last_name: faker.person.lastName(),
      email: faker.internet.email(),
      password: faker.internet.password({
        length: 6,
      }),
    },
  };

  it('should return 200 if user is updated successfully', async () => {
    const { sut } = makeSut();

    const result = await sut.execute(httpRequest);

    expect(result.statusCode).toBe(200);
  });

  it('should return 400 if an invalid email provided', async () => {
    const { sut } = makeSut();

    const result = await sut.execute({
      params: httpRequest.params,
      body: {
        ...httpRequest.body,
        email: 'invalid_email',
      },
    });
    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if an invalid password is provided', async () => {
    const { sut } = makeSut();

    const result = await sut.execute({
      params: httpRequest.params,
      body: {
        ...httpRequest.body,
        password: faker.internet.password({
          length: 5,
        }),
      },
    });
    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if an invalid id is provided', async () => {
    const { sut } = makeSut();

    const result = await sut.execute({
      params: {
        userId: 'invalid_id',
      },
      body: httpRequest.body,
    });
    expect(result.statusCode).toBe(400);
  });

  it('should return 400 if an unallowed field is provided', async () => {
    const { sut } = makeSut();

    const result = await sut.execute({
      params: httpRequest.params,
      body: {
        ...httpRequest.body,
        unallowed_field: 'unallowed_value',
      },
    });
    expect(result.statusCode).toBe(400);
  });

  it('should return 500 if UpdateUserUseCase throws an generic error', async () => {
    const { sut, updateUserUseCase } = makeSut();
    jest.spyOn(updateUserUseCase, 'execute').mockImplementationOnce(() => {
      throw new Error();
    });

    const result = await sut.execute(httpRequest);

    expect(result.statusCode).toBe(500);
  });
});
