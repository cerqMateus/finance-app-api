import { PostgresHelper } from '../../../db/postgres/helper.js';

export class PostgreGetUserByIdRepository {
  async execute(userId) {
    const user = await PostgresHelper.query(
      'SELECT * FROM users WHERE ID= $1',
      [userId],
    );
    return user[0];
  }
}
