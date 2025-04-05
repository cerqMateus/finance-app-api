import {
  CreateTransactionController,
  GetTransactionByUserIdController,
} from '../../controlers/index.js';
import {
  PostgresGetUserByIdRepository,
  PostgresCreateTransactionRepositoy,
  PostgresGetTransactionByUserIdRepository,
} from '../../repositories/postgres/index.js';
import {
  CreateTransactionUseCase,
  GetTransactionByIdUseCase,
} from '../../use-cases/index.js';

export const makeCreateTransactionController = () => {
  const createTransactionRepository = new PostgresCreateTransactionRepositoy();
  const getUserByIdRepository = new PostgresGetUserByIdRepository();

  const createTransactionUseCase = new CreateTransactionUseCase(
    createTransactionRepository,
    getUserByIdRepository,
  );

  const createTransactionController = new CreateTransactionController(
    createTransactionUseCase,
  );

  return createTransactionController;
};

export const makeGetTransactionByUserIdController = () => {
  const getTransactionByUserIdRepository =
    new PostgresGetTransactionByUserIdRepository();

  const getUserByIdRepository = new PostgresGetUserByIdRepository();

  const getTransactionByIdUseCase = new GetTransactionByIdUseCase(
    getTransactionByUserIdRepository,
    getUserByIdRepository,
  );

  const getTransactionByUserIdController = new GetTransactionByUserIdController(
    getTransactionByIdUseCase,
  );

  return getTransactionByUserIdController;
};
