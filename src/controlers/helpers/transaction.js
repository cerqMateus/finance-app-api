import validator from 'validator';
import { badRequest } from './http.js';

export const checkIfAmountIsValid = (params) => {
  if (!params || params.amount === undefined || params.amount === null) {
    return false;
  }

  return validator.isCurrency(params.amount.toString(), {
    digits_after_decimal: [2],
    allow_negatives: false,
    decimal_separator: '.',
  });
};

export const checkIfTypeIsValid = (type) =>
  ['EARNING', 'EXPENSE', 'INVESTMENT'].includes(type);

export const invalidAmountResponse = () => {
  badRequest({
    errorMessage: 'The amount must be a valid currency value',
  });
};

export const invalidTypeResponse = () => {
  badRequest({
    errorMessage: 'The type must be EARNING, EXPENSE or INVESTMENT',
  });
};
