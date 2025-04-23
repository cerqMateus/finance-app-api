import { z } from 'zod';
import validator from 'validator';

export const createTransactionSchema = z.object({
  user_id: z
    .string({ required_error: 'User id is required.' })
    .uuid({ message: 'User id must be a valid UUID' }),
  name: z
    .string({ required_error: 'Name is required.' })
    .trim()
    .min(1, { message: 'Name is required' }),
  date: z.coerce.date({ required_error: 'Date is required.' }),
  type: z.enum(['EXPENSE', 'EARNING', 'INVESTMENT'], {
    required_error: 'User id is required.',
  }),
  amount: z
    .number({ invalid_type_error: 'amount must be a number' })
    .min(1, { message: 'Amount must be greater than 0.' })
    .refine((value) =>
      validator.isCurrency(value.toString(), {
        digits_after_decimal: [2],
        allow_negatives: false,
        decimal_separator: '.',
      }),
    ),
});

export const updateTransactionSchema = createTransactionSchema
  .omit({
    user_id: true,
  })
  .partial()
  .strict({
    message: 'Some provided field is not allowed.',
  });
