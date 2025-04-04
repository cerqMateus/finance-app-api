import { badRequest } from './http.js';
import validator from 'validator';

export const checkIfIdIsValid = (id) => validator.isUUID(id);

export const invalidIdResponse = () =>
  badRequest({ errorMessage: 'The provided id is invalid' });

export const checkIfIsString = (value) => typeof value === 'string';

export const validateRequiredFields = (params, requiredFields) => {
  for (const field of requiredFields) {
    const fieldIsMissing = !params[field];
    const fieldIsEmpty =
      checkIfIsString(params[field]) &&
      validator.isEmpty(params[field], { ignore_whitespace: false });

    if (fieldIsMissing || fieldIsEmpty) {
      return {
        missingField: field,
        ok: false,
      };
    }
  }

  return {
    ok: true,
    missingField: undefined,
  };
};

export const requiredFieldIsMissingResponse = (field) => {
  badRequest({ errorMessage: `The field ${field} is required.` });
};
