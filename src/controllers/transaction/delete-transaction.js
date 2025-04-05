import {
  checkIfIdIsValid,
  invalidIdResponse,
  ok,
  serverError,
} from '../helpers.js';

export class DeleteTransactionController {
  constructor(deleteTransactionUseCase) {
    this.deleteTransactionUseCase = deleteTransactionUseCase;
  }

  async execute(httpRequest) {
    try {
      const idIsvalid = checkIfIdIsValid(httpRequest.params.transactionId);

      if (!idIsvalid) {
        return invalidIdResponse();
      }

      const transaction = await this.deleteTransactionUseCase.execute(
        httpRequest.params.transactionId,
      );

      return ok(transaction);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
