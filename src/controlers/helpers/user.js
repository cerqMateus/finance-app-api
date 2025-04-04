import { badRequest, notFound } from './http.js';
import validator from 'validator';

export const invalidPasswordResponse = () =>
  badRequest({
    errorMessage: 'Password must have at least 6 characters',
  });

export const emailAlreadyInUseResponse = () =>
  badRequest({
    errorMessage: 'Invalid email. Please provide a valid email',
  });

export const userNotFound = () =>
  notFound({
    message: 'User not found',
  });

export const checkIfPasswordIsValid = (password) => password.length >= 6;

export const checkIfEmailIsValid = (email) => validator.isEmail(email);
