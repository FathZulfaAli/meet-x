import { registValidator } from '@/middleware/registValidator';
import { AuthController } from '../controllers/auth.controller';
import { Router } from 'express';
import { verifyToken } from '@/middleware/verifyToken';

export class AuthRouter {
  private router: Router;
  private authController: AuthController;

  constructor() {
    this.authController = new AuthController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {
    this.router.post(
      '/regist-cust',
      registValidator,
      this.authController.registerCustomer,
    );
    this.router.post(
      '/regist-eo',
      registValidator,
      this.authController.registEo,
    );
    this.router.post('/login', this.authController.login);
    this.router.get('/get-role', this.authController.getRole);
  }

  getRouter(): Router {
    return this.router;
  }
}
