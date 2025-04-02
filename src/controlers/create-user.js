import { EmailAlreadyInUseError } from '../errors/user.js';
import {
  checkIfEmailIsValid,
  checkIfPasswordIsValid,
  generateEmailAlreadyInUseResponse,
  generateInvalidPasswordResponse,
  badRequest,
  created,
  serverError,
} from './helpers/index.js';

export class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }
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
      const createdUser = await this.createUserUseCase.execute(params);

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
