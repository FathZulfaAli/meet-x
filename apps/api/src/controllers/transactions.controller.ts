import { NextFunction, Request, Response } from 'express';

export class TransactionsController {
  async registerCustomer(req: Request, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next(error);
    }
  }
}
