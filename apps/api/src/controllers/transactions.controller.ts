import { prisma } from '@/prisma';
import { NextFunction, Request, Response } from 'express';
import { customAlphabet } from 'nanoid';

export class TransactionsController {
  async registerCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const { amountPaid, discountApplied, pointUsed, total_items } = req.body;

      async function generateUniqueCode() {
        let nanoCustom = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 12);
        let uniqueCode = nanoCustom();
        while (await isCodeExistsInDatabase(uniqueCode)) {
          uniqueCode = nanoCustom();
        }
        return uniqueCode;
      }

      async function isCodeExistsInDatabase(code: string) {
        const existingRecord = await prisma.transaction.findFirst({
          where: { event_tickets: code },
        });

        return !!existingRecord;
      }
      const uniqueCode = await generateUniqueCode();

      const newTransaction = await prisma.transaction.create({
        data: {
          amountPaid: amountPaid,
          discountApplied: discountApplied,
          pointUsed: pointUsed,
          total_items: total_items,
          event_tickets: uniqueCode,
        },
      });
    } catch (error) {
      next(error);
    }
  }
}
