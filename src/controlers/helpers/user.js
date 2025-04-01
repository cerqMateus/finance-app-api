import { badRequest } from './http.js';
import validator from 'validator';

export const generateInvalidPasswordResponse = () =>
  badRequest({
    errorMessage: 'Password must have at least 6 characters',
  });

export const generateEmailAlreadyInUseResponse = () =>
  badRequest({
    errorMessage: 'Invalid email. Please provide a valid email',
  });

export const generateInvalidIdResponse = () =>
  badRequest({ errorMessage: 'The provided id is invalid' });

export const checkIfPasswordIsValid = (password) => password.length >= 6;

export const checkIfEmailIsValid = (email) => validator.isEmail(email);
