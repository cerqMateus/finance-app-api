import { badRequest } from './http.js';
import validator from 'validator';

export const checkIfIdIsValid = (id) => validator.isUUID(id);

export const invalidIdResponse = () =>
  badRequest({ errorMessage: 'The provided id is invalid' });
