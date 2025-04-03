import 'dotenv/config.js';
import express from 'express';
import {
  CreateUserController,
  UpdateUserController,
  GetUserByIdController,
  DeleteUserController,
} from './src/controlers/index.js';
import { GetUserByIdUseCase } from './src/use-cases/get-user-by-id.js';
import { PostgreGetUserByIdRepository } from './src/repositories/postgres/get-user-by-id.js';
import { PostgresCreateUserRepository } from './src/repositories/postgres/create-user.js';
import { CreateUserUseCase } from './src/use-cases/create-user.js';
import { PostgresGetUserByEmailRepository } from './src/repositories/postgres/get-user-by-email.js';
import { PostgresUpdateUserRepository } from './src/repositories/postgres/update-user.js';
import { UpdateUserUseCase } from './src/use-cases/update-user.js';
import { PostgresDeleteUserRepository } from './src/repositories/postgres/delete-user.js';
import { DeleteUserUseCase } from './src/use-cases/delete-user.js';

const app = express();

app.use(express.json());

app.get('/api/users/:userId', async (req, res) => {
  const getUserByIdRepository = new PostgreGetUserByIdRepository();

  const getUserByIdUseCase = new GetUserByIdUseCase(getUserByIdRepository);

  const getUserByIdController = new GetUserByIdController(getUserByIdUseCase);

  const { statusCode, body } = await getUserByIdController.execute(req);

  res.status(statusCode).send(body);
});

app.post('/api/users', async (req, res) => {
  const getUserByEmailRepository = new PostgresGetUserByEmailRepository();
  const createUserRepository = new PostgresCreateUserRepository();

  const createUserUseCase = new CreateUserUseCase(
    getUserByEmailRepository,
    createUserRepository,
  );

  const createUserController = new CreateUserController(createUserUseCase);

  const { statusCode, body } = await createUserController.execute(req);

  res.status(statusCode).send(body);
});

app.patch('/api/users/:userId', async (req, res) => {
  const getUserByEmailRepository = new PostgresGetUserByEmailRepository();
  const updateUserRepository = new PostgresUpdateUserRepository();

  const updateUserUseCase = new UpdateUserUseCase(
    getUserByEmailRepository,
    updateUserRepository,
  );

  const updateUserController = new UpdateUserController(updateUserUseCase);

  const { statusCode, body } = await updateUserController.execute(req);

  res.status(statusCode).send(body);
});

app.delete('/api/users/:userId', async (req, res) => {
  const postgresDeleteUserRepository = new PostgresDeleteUserRepository();

  const deleteUserUseCase = new DeleteUserUseCase(postgresDeleteUserRepository);

  const deleteUserController = new DeleteUserController(deleteUserUseCase);

  const { statusCode, body } = await deleteUserController.execute(req);

  res.status(statusCode).send(body);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
