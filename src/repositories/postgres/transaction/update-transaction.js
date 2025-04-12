import { prisma } from '../../../../prisma/prisma.js';

export class PostgresUpdateTransactionRepository {
  async execute(transactionId, updateTransactionParams) {
    await prisma.transaction.update({
      where: {
        id: transactionId,
      },
      data: updateTransactionParams,
    });
  }
}
