import 'dotenv/config.js';
import express from 'express';
import { CreateUserController } from './src/controlers/create-user.js';
import { GetUserByIdController } from './src/controlers/get-user-by-id.js';

const app = express();

app.use(express.json());

app.post('/api/users', async (req, res) => {
  const createUserController = new CreateUserController();

  const { statusCode, body } = await createUserController.execute(req);

  res.status(statusCode).send(body);
});

app.get('/api/users/:userId', async (req, res) => {
  const getUserByIdController = new GetUserByIdController();

  const { statusCode, body } = await getUserByIdController.execute(req);

  res.status(statusCode).send(body);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}!`);
});
