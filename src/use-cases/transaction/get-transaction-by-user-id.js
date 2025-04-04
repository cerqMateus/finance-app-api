import { UserNotFoundError } from '../../errors/user';

export class GetTransactionByIdUseCase {
  constructor(getTransactionByUserIdRepository, getUserByIdRepository) {
    this.getTransactionByUserIdRepository = getTransactionByUserIdRepository;
    this.getUserByIdRepository = getUserByIdRepository;
  }

  async execute(params) {
    //validar se o usuário existe
    const user = await this.getUserByIdRepository.execute(params.userId);
    if (!user) {
      throw new UserNotFoundError(params.userId);
    }

    //chamar o repository

    const transactions = await this.getTransactionByUserIdRepository.execute(
      params.userId,
    );

    return transactions;
  }
}
