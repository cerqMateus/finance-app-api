import { EmailAlreadyInUseError } from '../../errors/user.js';
import {
  checkIfEmailIsValid,
  checkIfPasswordIsValid,
  emailAlreadyInUseResponse,
  invalidPasswordResponse,
  badRequest,
  created,
  serverError,
  validateRequiredFields,
} from '../helpers/index.js';

export class CreateUserController {
  constructor(createUserUseCase) {
    this.createUserUseCase = createUserUseCase;
  }
  async execute(httpRequest) {
    try {
      const params = httpRequest.body;

      // Validar requisição (campos obrigatórios, tamanho de senha e email)
      const requiredFields = ['first_name', 'last_name', 'email', 'password'];

      const requiredFieldsValidation = validateRequiredFields(
        params,
        requiredFields,
      );

      if (!requiredFieldsValidation.ok) {
        return badRequest({
          errorMessage: `Missing param: ${requiredFieldsValidation.missingField}`,
        });
      }

      const passwordIsValid = checkIfPasswordIsValid(params.password);

      if (!passwordIsValid) {
        return invalidPasswordResponse;
      }

      const emailIsValid = checkIfEmailIsValid(params.email);
      if (!emailIsValid) {
        return emailAlreadyInUseResponse;
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
