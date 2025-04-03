import { EmailAlreadyInUseError } from '../../errors/user.js';
import {
  checkIfEmailIsValid,
  checkIfIdIsValid,
  checkIfPasswordIsValid,
  emailAlreadyInUseResponse,
  invalidIdResponse,
  invalidPasswordResponse,
  badRequest,
  ok,
  serverError,
} from '../helpers/index.js';

export class UpdateUserController {
  constructor(updateUserUseCase) {
    this.updateUserUseCase = updateUserUseCase;
  }

  async execute(httpRequest) {
    try {
      const userId = httpRequest.params?.userId;

      if (!userId) {
        return invalidIdResponse();
      }

      const isIdValid = checkIfIdIsValid(userId);
      if (!isIdValid) {
        return invalidIdResponse();
      }

      const params = httpRequest.body || {};

      if (Object.keys(params).length === 0) {
        return badRequest({
          message: 'No fields provided for update',
        });
      }

      const allowedFields = ['first_name', 'last_name', 'email', 'password'];
      const invalidFields = Object.keys(params).filter(
        (field) => !allowedFields.includes(field),
      );

      if (invalidFields.length > 0) {
        return badRequest({
          message: `Invalid fields provided: ${invalidFields.join(', ')}`,
        });
      }

      if (params.password) {
        const passwordIsValid = checkIfPasswordIsValid(params.password);
        if (!passwordIsValid) {
          return invalidPasswordResponse();
        }
      }

      if (params.email) {
        const emailIsValid = checkIfEmailIsValid(params.email);
        if (!emailIsValid) {
          return emailAlreadyInUseResponse();
        }
      }

      const updatedUser = await this.updateUserUseCase.execute(userId, params);

      if (!updatedUser) {
        return serverError();
      }

      return ok(updatedUser);
    } catch (error) {
      if (error instanceof EmailAlreadyInUseError) {
        return badRequest({ message: error.message });
      }

      console.error(error);
      return serverError();
    }
  }
}
