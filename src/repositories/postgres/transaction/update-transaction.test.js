import { prisma } from '../../../../prisma/prisma';
import { transaction, user } from '../../../tests';
import { PostgresUpdateTransactionRepository } from './update-transaction.js';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library.js';
import { TransactionNotFoundError } from '../../../errors';

describe('PostgresUpdateTransactionRepository', () => {
  let sut;
  let testUser;
  let testTransaction;

  beforeEach(async () => {
    // Clean up database before each test
    await prisma.transaction.deleteMany();
    await prisma.user.deleteMany();

    // Create test user and transaction
    testUser = await prisma.user.create({ data: user });
    testTransaction = await prisma.transaction.create({
      data: { ...transaction, user_id: testUser.id },
    });

    sut = new PostgresUpdateTransactionRepository();
  });

  afterEach(async () => {
    // Clean up database after each test
    await prisma.transaction.deleteMany();
    await prisma.user.deleteMany();
  });

  it('should call Prisma with correct params', async () => {
    const prismaSpy = jest.spyOn(prisma.transaction, 'update');

    await sut.execute(testTransaction.id, {
      ...transaction,
      user_id: testUser.id,
    });

    expect(prismaSpy).toHaveBeenCalledWith({
      where: {
        id: testTransaction.id,
      },
      data: { ...transaction, user_id: testUser.id },
    });

    prismaSpy.mockRestore();
  });

  it('should throw if Prisma throws', async () => {
    jest.spyOn(prisma.transaction, 'update').mockRejectedValueOnce(new Error());

    const promise = sut.execute(testTransaction.id, transaction);

    await expect(promise).rejects.toThrow();
  });

  it('should throw TransactionNotFoundError if Prisma does not find record to update', async () => {
    jest.spyOn(prisma.transaction, 'update').mockRejectedValueOnce(
      new PrismaClientKnownRequestError('Record not found', {
        code: 'P2025',
      }),
    );

    const promise = sut.execute(testTransaction.id, transaction);

    await expect(promise).rejects.toThrow(
      new TransactionNotFoundError(testTransaction.id),
    );
  });
});
