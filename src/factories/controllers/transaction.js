import { CreateTransactionController } from '../../controlers/index.js';
import {
  PostgreGetUserByIdRepository,
  PostgresCreateTransactionRepositoy,
} from '../../repositories/postgres/index.js';
import { CreateTransactionUseCase } from '../../use-cases/index.js';

export const makeCreateTransactionController = () => {
  const createTransactionRepository = new PostgresCreateTransactionRepositoy();
  const getUserByIdRepository = new PostgreGetUserByIdRepository();

  const createTransactionUseCase = new CreateTransactionUseCase(
    createTransactionRepository,
    getUserByIdRepository,
  );

  const createTransactionController = new CreateTransactionController(
    createTransactionUseCase,
  );

  return createTransactionController;
};
