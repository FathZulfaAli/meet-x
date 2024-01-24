import { AuthController } from '../controllers/auth.controller';
import { Router } from 'express';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRouter();
  }

  //need to add verifyHash to login
  private initializeRouter(): void {
    this.router.post('/regist-cust', this.authController.registerCustomer);
    this.router.post('/login', this.authController.login);
  }

  getRouter(): Router {
    return this.router;
  }
}
