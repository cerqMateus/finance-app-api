import { v4 as uuidv4 } from 'uuid';
import bcrypt from 'bcrypt';
import {
  PostgresCreateUserRepository,
  PostgresGetUserByEmailRepository,
} from '../repositories/postgres/index.js';
import { EmailAlreadyInUseError } from '../errors/user.js';

export default class createUserUseCase {
  async execute(createUserParams) {
    //verificar se email já está em uso
    const postgresGetUserByEmailRepository =
      new PostgresGetUserByEmailRepository();

    const userWithProvidedEmail =
      await postgresGetUserByEmailRepository.execute(createUserParams.email);

    if (userWithProvidedEmail) {
      throw new EmailAlreadyInUseError(createUserParams.email);
    }

    //gerar ID do usuario
    const userId = uuidv4();

    //criptografar a senha
    const hashedPassword = await bcrypt.hash(createUserParams.password, 10);

    //inserir o usuario no banco de dados
    const user = {
      ...createUserParams,
      id: userId,
      password: hashedPassword,
    };

    //chamar o repositorio
    const postgresCreateUserRepository = new PostgresCreateUserRepository();
    const createdUser = await postgresCreateUserRepository.execute(user);

    return createdUser;
  }
}
