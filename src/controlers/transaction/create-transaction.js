import validator from 'validator';
import {
  badRequest,
  checkIfIdIsValid,
  created,
  invalidIdResponse,
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

      const amountIsValid = validator.isCurrency(params.amount.toString(), {
        digits_after_decimal: [2],
        allow_negatives: false,
        decimal_separator: '.',
      });

      if (!amountIsValid) {
        return badRequest({
          errorMessage: 'The amount must be a valid currency value',
        });
      }

      const type = params.type.trim().toUpperCase();

      const typeIsValid = ['EARNING', 'EXPENSE', 'INVESTMENT'].includes(type);

      if (!typeIsValid) {
        return badRequest({
          errorMessage: 'The type must be EARNING, EXPENSE or INVESTMENT',
        });
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
