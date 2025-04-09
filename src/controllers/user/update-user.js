import { ZodError } from 'zod';
import { updatedUserSchema } from '../../schemas/user.js';
import {
  checkIfIdIsValid,
  invalidIdResponse,
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
      const userId = httpRequest.params.userId;

      const isIdValid = checkIfIdIsValid(userId);

      if (!isIdValid) {
        return invalidIdResponse();
      }

      const params = httpRequest.body;

      await updatedUserSchema.parseAsync(params);

      const updatedUser = await this.updateUserUseCase.execute(userId, params);

      return ok(updatedUser);
    } catch (error) {
      if (error instanceof ZodError) {
        return badRequest({ message: error.errors[0].message });
      }

      console.error(error);
      return serverError();
    }
  }
}
