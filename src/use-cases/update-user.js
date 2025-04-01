// UpdateUserUseCase.js
import { EmailAlreadyInUseError } from '../errors/user.js';
import { PostgresGetUserByEmailRepository } from '../repositories/postgres/get-user-by-email.js';
import { PostgresUpdateUserRepository } from '../repositories/postgres/update-user.js';
import bcrypt from 'bcrypt';

export class UpdateUserUseCase {
  async execute(userId, updateUserParams) {
    // 1. Verificar se o email já está em uso
    if (updateUserParams.email) {
      const postgresGetUserByEmailRepository =
        new PostgresGetUserByEmailRepository();

      const userWithProvidedEmail =
        await postgresGetUserByEmailRepository.execute(updateUserParams.email);

      if (userWithProvidedEmail && userWithProvidedEmail.id !== userId) {
        throw new EmailAlreadyInUseError(updateUserParams.email);
      }
    }

    // 2. Preparar os dados para atualização
    const userDataToUpdate = { ...updateUserParams };

    // 3. Criptografar a senha se fornecida
    if (updateUserParams.password) {
      const hashedPassword = await bcrypt.hash(updateUserParams.password, 10);
      userDataToUpdate.password = hashedPassword;
    }

    // 4. Atualizar o usuário
    const postgresUpdateUserRepository = new PostgresUpdateUserRepository();
    const updatedUser = await postgresUpdateUserRepository.execute(
      userId,
      userDataToUpdate,
    );

    return updatedUser;
  }
}
