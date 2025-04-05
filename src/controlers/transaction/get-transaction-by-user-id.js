import { UserNotFoundError } from '../../errors/user.js';
import { serverError } from '../helpers/index.js';
import { ok } from '../helpers/http.js';
import { userNotFound } from '../helpers/user.js';
import {
  checkIfIdIsValid,
  invalidIdResponse,
  requiredFieldIsMissingResponse,
} from '../helpers/validation.js';

export class GetTransactionByUserIdController {
  constructor(getTransactionByIdUseCase) {
    this.getTransactionByIdUseCase = getTransactionByIdUseCase;
  }

  async execute(httpRequest) {
    try {
      //verificar se o userId foi passado como parâmetro
      const userId = httpRequest.query.userId;
      if (!userId) {
        return requiredFieldIsMissingResponse('userId');
      }

      //verificar se o userId é válido
      const userIdIsValid = checkIfIdIsValid(userId);
      if (!userIdIsValid) {
        return invalidIdResponse();
      }

      //chamar useCase
      const transactions = await this.getTransactionByIdUseCase.execute({
        userId,
      });

      //retornar resposta http
      return ok(transactions);
    } catch (error) {
      console.error(error);

      if (error instanceof UserNotFoundError) {
        return userNotFound(); // Fixed: added return
      }
      return serverError();
    }
  }
}
