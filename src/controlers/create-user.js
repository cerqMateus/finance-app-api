import CreateUserUseCase from '../use-cases/create-user.js';
import { badRequest, created, serverError } from './helpers/http.js';
import { EmailAlreadyInUseError } from '../errors/user.js';
import {
  checkIfEmailIsValid,
  checkIfPasswordIsValid,
  generateEmailAlreadyInUseResponse,
  generateInvalidPasswordResponse,
} from './helpers/user.js';

export class CreateUserController {
  async execute(httpRequest) {
    try {
      const params = httpRequest.body;

      // Validar requisição (campos obrigatórios, tamanho de senha e email)
      const requiredFields = ['first_name', 'last_name', 'email', 'password'];

      for (const field of requiredFields) {
        if (!params[field] || params[field].trim().length === 0) {
          return badRequest({ errorMessage: `Missing param ${field}` });
        }
      }

      const passwordIsValid = checkIfPasswordIsValid(params.password);

      if (!passwordIsValid) {
        return generateInvalidPasswordResponse;
      }

      const emailIsValid = checkIfEmailIsValid(params.email);
      if (!emailIsValid) {
        return generateEmailAlreadyInUseResponse;
      }

      // Chamar o use case
      const createUserUseCase = new CreateUserUseCase();
      const createdUser = await createUserUseCase.execute(params);

      // Retornar o resultado (status code)
      return created(createdUser);
    } catch (error) {
      if (error instanceof EmailAlreadyInUseError) {
        return badRequest({ message: error.message });
      }
      console.log(error);
      return serverError;
    }
  }
}
