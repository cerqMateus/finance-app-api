import CreateUserUseCase from '../use-cases/create-user.js';
import validator from 'validator';

export class CreateUserController {
  async execute(httpRequest) {
    try {
      const params = httpRequest.body;

      // Validar requisição (campos obrigatórios, tamanho de senha e email)
      const requiredFields = ['first_name', 'last_name', 'email', 'password'];

      for (const field of requiredFields) {
        if (!params[field] || params[field].trim().length === 0) {
          return {
            statusCode: 400,
            body: {
              errorMessage: `Missing param: ${field}`,
            },
          };
        }
      }

      if (params.password.length < 6) {
        return {
          statusCode: 400,
          body: {
            errorMessage: 'Password must have at least 6 characters',
          },
        };
      }

      if (!validator.isEmail(params.email)) {
        return {
          statusCode: 400,
          body: {
            errorMessage: 'Invalid email. Please provide a valid email',
          },
        };
      }

      // Chamar o use case
      const createUserUseCase = new CreateUserUseCase();
      const createdUser = await createUserUseCase.execute(params);

      // Retornar o resultado (status code)
      return {
        statusCode: 201,
        body: createdUser,
      };
    } catch (error) {
      console.log(error);
      return {
        statusCode: 500,
        body: {
          errorMessage: 'Internal server error',
        },
      };
    }
  }
}
