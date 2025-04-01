import validator from 'validator';
import { notFount, ok, serverError } from './helpers/http.js';
import { GetUserByIdUseCase } from '../use-cases/index.js';
import { generateInvalidIdResponse } from './helpers/user.js';
export class GetUserByIdController {
  async execute(httpRequest) {
    const isIdValid = validator.isUUID(httpRequest.params.userId);
    if (!isIdValid) {
      return generateInvalidIdResponse;
    }

    try {
      const getUserByIdUseCase = new GetUserByIdUseCase();
      const user = await getUserByIdUseCase.execute(httpRequest.params.userId);

      if (!user) {
        return notFount;
      }

      return ok(user);
    } catch (error) {
      console.log(error);
      return serverError();
    }
  }
}
