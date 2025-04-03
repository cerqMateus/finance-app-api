import { PostgresHelper } from '../../../db/postgres/helper';

export class PostgresCreateTransactionRepositoy {
  async execute(createTransactionParams) {
    await PostgresHelper.query(
      ' INSERT INTO transactions (id, user_id, name, data, amount, type) VALUES ($1, $2, $3, $4, $5, $6) RETURNING *',
      [
        createTransactionParams.id,
        createTransactionParams.user_id,
        createTransactionParams.name,
        createTransactionParams.data,
        createTransactionParams.amount,
        createTransactionParams.type,
      ],
    );
  }
}
