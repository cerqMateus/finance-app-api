import { PostgresHelper } from '../../../db/postgres/helper';

export class PostgresGetTransactionByUserIdRepository {
  async execute(userId) {
    const transactions = await PostgresHelper.query(
      'SELECT * FROM transactions WHERE user_id = $1',
      [userId],
    );

    return transactions;
  }
}
