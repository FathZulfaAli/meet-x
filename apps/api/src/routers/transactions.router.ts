import { Router } from 'express';
import { TransactionsController } from '@/controllers/transactions.controller';
import { verifyTokenCust } from '@/middleware/verifyTokenCust';

export class TransactionsRouter {
  private router: Router;
  private transactionsController: TransactionsController;

  constructor() {
    this.transactionsController = new TransactionsController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {
    this.router.post(
      '/transactions',
      verifyTokenCust,
      this.transactionsController.registerCustomer,
    );
  }

  getRouter(): Router {
    return this.router;
  }
}
