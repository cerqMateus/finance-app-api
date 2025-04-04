import {
  checkIfAmountIsValid,
  checkIfIdIsValid,
  checkIfTypeIsValid,
  created,
  invalidAmountResponse,
  invalidIdResponse,
  invalidTypeResponse,
  requiredFieldIsMissingResponse,
  serverError,
  validateRequiredFields,
} from '../helpers/index.js';

export class CreateTransactionController {
  constructor(createTransactionUseCase) {
    this.createTransactionUseCase = createTransactionUseCase;
  }

  async execute(httpRequest) {
    try {
      const requiredFields = ['user_id', 'name', 'date', 'amount', 'type'];

      const params = httpRequest.body;

      const requiredFieldsValidation = validateRequiredFields(
        params,
        requiredFields,
      );

      if (!requiredFieldsValidation.ok) {
        return requiredFieldIsMissingResponse(
          requiredFieldsValidation.missingField,
        );
      }

      const userIdIsValid = checkIfIdIsValid(params.user_id);
      if (!userIdIsValid) {
        return invalidIdResponse();
      }

      const amountIsValid = checkIfAmountIsValid(params.amount);
      if (!amountIsValid) {
        return invalidAmountResponse();
      }

      const type = params.type.trim().toUpperCase();

      const typeIsValid = checkIfTypeIsValid(type);

      if (!typeIsValid) {
        return invalidTypeResponse();
      }

      const transaction = await this.createTransactionUseCase.execute({
        ...params,
        type,
      });

      return created(transaction);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
