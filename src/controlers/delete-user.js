import { DeleteUserUseCase } from '../use-cases/index.js';
import {
  checkIfIdIsValid,
  generateInvalidIdResponse,
  ok,
  serverError,
  userNotFound,
} from './helpers/index.js';

export class DeleteUserController {
  async execute(httpRequest) {
    try {
      const userId = httpRequest.params.userId;
      const idIsValid = checkIfIdIsValid(userId);

      if (!idIsValid) {
        return generateInvalidIdResponse();
      }

      const deleteUserUseCase = new DeleteUserUseCase();

      const deletedUser = await deleteUserUseCase.execute(userId);

      if (!deletedUser) {
        return userNotFound();
      }

      return ok(deletedUser);
    } catch (error) {
      console.error(error);
      return serverError();
    }
  }
}
