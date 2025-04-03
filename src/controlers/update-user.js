import {
  checkIfEmailIsValid,
  checkIfPasswordIsValid,
  generateEmailAlreadyInUseResponse,
  generateInvalidIdResponse,
  generateInvalidPasswordResponse,
  badRequest,
  ok,
  serverError,
  checkIfIdIsValid,
} from './helpers/index.js';

export class UpdateUserController {
  constructor(updateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }
  async execute(httpRequest) {
    try {
      const userId = httpRequest.params?.userId;

      const isIdValid = checkIfIdIsValid(userId);
      if (!isIdValid) {
        return generateInvalidIdResponse();
      }

      const params = httpRequest.body || {};

      const allowedFields = ['first_name', 'last_name', 'email', 'password'];

      const someFieldIsNotAllowed = Object.keys(params).some(
        (field) => !allowedFields.includes(field),
      );

      if (someFieldIsNotAllowed) {
        return badRequest({
          message: 'Some provided fields is not allowed',
        });
      }

      if (params.password) {
        const passwordIsValid = checkIfPasswordIsValid(params.password);
        if (!passwordIsValid) {
          return generateInvalidPasswordResponse();
        }
      }

      if (params.email) {
        const emailIsValid = checkIfEmailIsValid(params.email);
        if (!emailIsValid) {
          return generateEmailAlreadyInUseResponse();
        }
      }

      const updatedUser = await this.updateUserUseCase.execute(userId, params);
      return ok(updatedUser);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
