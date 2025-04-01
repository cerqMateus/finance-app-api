import { PostgreGetUserByIdRepository } from '../repositories/postgres/index.js';

export class GetUserByIdUseCase {
  async execute(userId) {
    const getUserByIdRepository = new PostgreGetUserByIdRepository();
    const user = await getUserByIdRepository.execute(userId);

    return user;
  }
}
