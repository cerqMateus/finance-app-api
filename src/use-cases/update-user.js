import { EmailAlreadyInUseError } from '../errors/user.js';
import { PostgresGetUserByEmailRepository } from '../repositories/postgres/get-user-by-email.js';
import bcrypt from 'bcrypt';

export class UpdateUserUseCase {
  async execute(userId, updateUserParams) {
    //1. Se o email estiver sendo atualizado, verificar se ele ja esta em uso
    if (updateUserParams.email) {
      const postgresGetUserByEmailRepository =
        new PostgresGetUserByEmailRepository();

      const userWithProvidedEmail =
        await postgresGetUserByEmailRepository.execute(updateUserParams.email);

      if (userWithProvidedEmail) {
        throw new EmailAlreadyInUseError(updateUserParams.email);
      }
    }

    const user = {
      ...updatedUser,
    };

    //2. Se a senha estiver sendo atualizada, criptografá-la

    if (updateUserParams.password) {
      const hashedPassword = await bcrypt.hash(updateUserParams.password, 10);

      user.password = hashedPassword;
    }

    //3. chamar o Repository para atualizar o usuario

    const postgresUpdateUserRepository = new postgresUpdateUserRepository();
    const updatedUser = await postgresUpdateUserRepository.execute(
      userId,
      user,
    );

    return updatedUser;
  }
}
