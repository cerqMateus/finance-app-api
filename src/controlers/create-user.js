import CreateUserUseCase from '../use-cases/create-user.js';
import validator from 'validator';
import { badRequest, created, serverError } from './helpers.js';

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

      if (params.password.length < 6) {
        return badRequest({
          errorMessage: 'Password must have at least 6 characters',
        });
      }

      if (!validator.isEmail(params.email)) {
        return badRequest({
          errorMessage: 'Invalid email. Please provide a valid email',
        });
      }

      // Chamar o use case
      const createUserUseCase = new CreateUserUseCase();
      const createdUser = await createUserUseCase.execute(params);

      // Retornar o resultado (status code)
      return created(createdUser);
    } catch (error) {
      console.log(error);
      return serverError;
    }
  }
}
