import { prisma } from '../../../../prisma/prisma.js';

export class PostgresGetUserBalanceRepository {
  async execute(userId) {
    const totalExpenses = await prisma.transaction.aggregate({
      where: {
        user_id: userId,
        type: 'EXPENSE',
      },
      _sum: {
        amount: true,
      },
    });

    const totalEarnings = await prisma.transaction.aggregate({
      where: {
        user_id: userId,
        type: 'EARNING',
      },
      _sum: {
        amount: true,
      },
    });

    const totalInvestments = await prisma.transaction.aggregate({
      where: {
        user_id: userId,
        type: 'INVESTMENT',
      },
      _sum: {
        amount: true,
      },
    });

    const _totalEarnings = totalEarnings._sum.amount || 0;
    const _totalExpenses = totalExpenses._sum.amount || 0;
    const _totalInvestments = totalInvestments._sum.amount || 0;

    const balance = _totalEarnings - _totalExpenses - _totalInvestments;
    return {
      totalEarnings: _totalEarnings,
      totalExpenses: _totalExpenses,
      totalInvestments: _totalInvestments,
      balance,
    };
  }
}
