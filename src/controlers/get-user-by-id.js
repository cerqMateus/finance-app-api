import validator from 'validator';
import { ok, serverError } from './helpers/http.js';
import { GetUserByIdUseCase } from '../use-cases/index.js';
import { generateInvalidIdResponse, userNotFound } from './helpers/user.js';
export class GetUserByIdController {
  async execute(httpRequest) {
    const isIdValid = validator.isUUID(httpRequest.params.userId);
    if (!isIdValid) {
      return generateInvalidIdResponse();
    }

    try {
      const getUserByIdUseCase = new GetUserByIdUseCase();
      const user = await getUserByIdUseCase.execute(httpRequest.params.userId);

      if (!user) {
        return userNotFound();
      }

      return ok(user);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
