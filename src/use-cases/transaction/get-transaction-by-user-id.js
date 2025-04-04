import { userNotFound } from '../../controlers/helpers';

export class GetTransactionByIdUseCase {
  constructor(getTransactionByUserIdRepository, getUserByIdRepository) {
    this.getTransactionByUserIdRepository = getTransactionByUserIdRepository;
    this.getUserByIdRepository = getUserByIdRepository;
  }

  async execute(params) {
    //validar se o usuário existe
    const user = await this.getUserByIdRepository.execute(params.userId);
    if (!user) {
      return userNotFound();
    }

    //chamar o repository

    const transactions = await this.getTransactionByUserIdRepository.execute(
      params.userId,
    );

    return transactions;
  }
}
