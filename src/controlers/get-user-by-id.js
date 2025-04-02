import validator from 'validator';
import { ok, serverError } from './helpers/http.js';
import { generateInvalidIdResponse, userNotFound } from './helpers/user.js';
export class GetUserByIdController {
  constructor(getUserByIdUseCase) {
    this.getUserByIdUseCase = getUserByIdUseCase;
  }
  async execute(httpRequest) {
    try {
      const isIdValid = validator.isUUID(httpRequest.params.userId);
      if (!isIdValid) {
        return generateInvalidIdResponse();
      }

      const user = await this.getUserByIdUseCase.execute(
        httpRequest.params.userId,
      );

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
