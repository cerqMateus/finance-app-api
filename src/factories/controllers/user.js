import {
  GetUserByIdController,
  CreateUserController,
  UpdateUserController,
  DeleteUserController,
  GetUserBalanceController,
} from '../../controllers/index.js';
import {
  PostgresGetUserByIdRepository,
  PostgresCreateUserRepository,
  PostgresGetUserByEmailRepository,
  PostgresUpdateUserRepository,
  PostgresDeleteUserRepository,
  PostgresGetUserBalanceRepository,
} from '../../repositories/postgres/index.js';
import {
  GetUserByIdUseCase,
  CreateUserUseCase,
  UpdateUserUseCase,
  DeleteUserUseCase,
  GetUserBalanceUseCase,
} from '../../use-cases/index.js';
import {
  IdGeneratorAdapter,
  PasswordHasherAdapter,
} from '../../adapters/index.js';

export const makeGetUserByIdController = () => {
  const getUserByIdRepository = new PostgresGetUserByIdRepository();

  const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);

  const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

  return getUserByIdController;
};

export const makeCreateUserController = () => {
  const getUserByEmailRepository = new PostgresGetUserByEmailRepository();
  const createUserRepository = new PostgresCreateUserRepository();
  const passwordHasherAdapter = new PasswordHasherAdapter();
  const idGeneratorAdapter = new IdGeneratorAdapter();

  const createUserUseCase = new CreateUserUseCase(
    getUserByEmailRepository,
    createUserRepository,
    passwordHasherAdapter,
    idGeneratorAdapter,
  );

  const createUserController = new CreateUserController(createUserUseCase);

  return createUserController;
};

export const makeUpdateUserController = () => {
  const getUserByEmailRepository = new PostgresGetUserByEmailRepository();
  const updateUserRepository = new PostgresUpdateUserRepository();
  const passwordHasherAdapter = new PasswordHasherAdapter();

  const updateUserUseCase = new UpdateUserUseCase(
    getUserByEmailRepository,
    updateUserRepository,
    passwordHasherAdapter,
  );

  const updateUserController = new UpdateUserController(updateUserUseCase);

  return updateUserController;
};

export const makeDeleteUserController = () => {
  const deleteUserRepository = new PostgresDeleteUserRepository();

  const deleteUserUseCase = new DeleteUserUseCase(deleteUserRepository);

  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  return deleteUserController;
};

export const makeGetUserBalanceController = () => {
  const getUserBalanceRepository = new PostgresGetUserBalanceRepository();
  const getUserByIdRepository = new PostgresGetUserByIdRepository();

  const getUserBalanceUseCase = new GetUserBalanceUseCase(
    getUserBalanceRepository,
    getUserByIdRepository,
  );

  const getUserBalanceController = new GetUserBalanceController(
    getUserBalanceUseCase,
  );

  return getUserBalanceController;
};
