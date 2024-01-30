import { prisma } from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class TransactionsController {
  async registerCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const newTransaction = await prisma.transaction;
    } catch (error) {
      next(error);
    }
  }
}
