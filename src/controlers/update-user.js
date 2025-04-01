import { badRequest, ok, serverError } from './helpers.js';
import validator from 'validator';
import { UpdateUserUseCase } from '../use-cases/update-user.js';

export class UpdateUserController {
  async execute(httpRequest) {
    try {
      const updateUserParams = httpRequest.body;
      const isIdValid = validator.isUUID(httpRequest.params.userId);
      if (!isIdValid) {
        return badRequest({
          errorMessage: 'Invalid id',
        });
      }
      const userId = httpRequest.params.userId;

      const allowedFields = ['first_name', 'last_name', 'email', 'password'];

      const someFieldIsNotAllowed = Object.keys(updateUserParams).some(
        (field) => !allowedFields.includes(field),
      );

      if (someFieldIsNotAllowed) {
        return badRequest({
          message: 'Some provided fields is not allowed',
        });
      }

      if (updateUserParams.password) {
        if (updateUserParams.password.length < 6) {
          return badRequest({
            errorMessage: 'Password must have at least 6 characters',
          });
        }
      }

      if (updateUserParams.email) {
        if (!validator.isEmail(updateUserParams.email)) {
          return badRequest({
            errorMessage: 'Invalid email. Please provide a valid email',
          });
        }
      }

      const updateUserUseCase = new UpdateUserUseCase();
      const updatedUser = await updateUserUseCase.execute(
        userId,
        updateUserParams,
      );
      return ok(updatedUser);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
