import { PostgresHelper } from '../../../db/postgres/helper.js';

export class PostgresUpdateUserRepository {
  async execute(userId, updateUserParams) {
    const updatedFields = [];
    const updatedValues = [];

    Object.keys(updateUserParams).forEach((key) => {
      updatedFields.push(`${key} = $${updatedValues.length + 1}`);
      updatedValues.push(updateUserParams[key]);
    });

    updatedValues.push(userId);

    const updateQuery = `
    UPDATE users
    SET ${updatedFields.join(', ')}
    WHERE id = $${updatedValues.length}
    RETURNING *
    `;

    const updatedUser = await PostgresHelper.query(updateQuery, updatedValues);

    return updatedUser[0];
  }
}
