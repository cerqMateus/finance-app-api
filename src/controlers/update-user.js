import { UpdateUserUseCase } from '../use-cases/index.js';
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
  async execute(httpRequest) {
    try {
      const params = httpRequest.body;
      const isIdValid = checkIfIdIsValid;
      if (!isIdValid) {
        return generateInvalidIdResponse;
      }
      const userId = httpRequest.params.userId;

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
          return generateInvalidPasswordResponse;
        }
      }

      if (params.email) {
        const emailIsValid = checkIfEmailIsValid(params.email);
        if (!emailIsValid) {
          return generateEmailAlreadyInUseResponse;
        }
      }

      const updateUserUseCase = new UpdateUserUseCase();
      const updatedUser = await updateUserUseCase.execute(userId, params);
      return ok(updatedUser);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
