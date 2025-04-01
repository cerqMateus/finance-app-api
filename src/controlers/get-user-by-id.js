import validator from 'validator';
import { badRequest, ok, serverError } from './helpers.js';
import { GetUserByIdUseCase } from '../use-cases/get-user-by-id.js';
export class GetUserByIdController {
  async execute(httpRequest) {
    const isIdValid = validator.isUUID(httpRequest.params.userId);
    if (!isIdValid) {
      return badRequest({
        errorMessage: 'Invalid id',
      });
    }

    try {
      const getUserByIdUseCase = new GetUserByIdUseCase();
      const user = await getUserByIdUseCase.execute(httpRequest.params.userId);
      return ok(user);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
