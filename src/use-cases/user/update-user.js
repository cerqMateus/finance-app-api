import { EmailAlreadyInUseError } from '../../errors/user.js';
import bcrypt from 'bcrypt';

export class UpdateUserUseCase {
  constructor(updateUserRepository, getUserByEmailRepository) {
    this.getUserByEmailRepository = getUserByEmailRepository;
    this.updateUserRepository = updateUserRepository;
  }

  async execute(userId, updateUserParams) {
    // 1. Verificar se o email já está em uso
    if (updateUserParams.email) {
      const userWithProvidedEmail = await this.getUserByEmailRepository.execute(
        updateUserParams.email,
      );

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
    const updatedUser = await this.updateUserRepository.execute(
      userId,
      userDataToUpdate,
    );

    return updatedUser;
  }
}
