import {
  serverError,
  checkIfIdIsValid,
  invalidIdResponse,
  ok,
} from '../helpers/index.js';

export class GetUserBalanceController {
  constructor(getUserBallanceUseCase) {
    this.getUserBallanceUseCase = getUserBallanceUseCase;
  }

  async execute(httpRequest) {
    try {
      const userId = httpRequest.params.userId;

      const isIdValid = checkIfIdIsValid(userId);

      if (!isIdValid) {
        return invalidIdResponse();
      }

      const balance = await this.getUserBallanceUseCase.execute(userId);

      return ok(balance);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
