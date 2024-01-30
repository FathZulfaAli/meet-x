import express, {
  json,
  urlencoded,
  Express,
  Request,
  Response,
  NextFunction,
} from 'express';
import cors from 'cors';
import { PORT } from './config';
import { AuthRouter } from './routers/auth.router';
import cron from 'node-cron';
import { expiredPointsSchedule } from './helpers/expiredPoinrs';
import { TransactionsRouter } from './routers/transactions.router';

export default class App {
  readonly app: Express;

  constructor() {
    this.app = express();
    this.configure();
    this.routes();
    this.handleError();
  }

  private configure(): void {
    this.app.use(cors());
    this.app.use(json());
    this.app.use(urlencoded({ extended: true }));
  }

  private routes(): void {
    const authRouter = new AuthRouter();
    const transactionsRouter = new TransactionsRouter();

    this.app.use('/auth', authRouter.getRouter());
    this.app.use('/buy', transactionsRouter.getRouter());
  }

  private handleError(): void {
    // error
    this.app.use(
      (err: Error, req: Request, res: Response, next: NextFunction) => {
        console.log('ERROR :', err.stack);
        res.status(500).send(err.message);
      },
    );

    // not found
    this.app.use((req: Request, res: Response, next: NextFunction) => {
      if (req.path.includes('/api/')) {
        res.status(404).send('Not found !');
      } else {
        next();
      }
    });
  }

  public dailyTask(): void {
    expiredPointsSchedule();
  }

  public start(): void {
    this.app.listen(PORT, () => {
      console.log(`  ➜  [API] Local:   http://localhost:${PORT}/`);
    });
  }
}
