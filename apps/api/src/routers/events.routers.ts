import { eventsController } from '@/controllers/events.controllers';
import { Router } from 'express';

export class EventRouter {
  private router: Router;
  private eventsController: eventsController;

  constructor() {
    this.eventsController = new eventsController();
    this.router = Router();
    this.initializeRoutes();
  }

  private initializeRoutes(): void {
    this.router.get('/', this.eventsController.getEvents);
    // this.router.get('/:id', this.sampleController.getSampleDataById);
    // this.router.post('/', this.sampleController.createSampleData);
  }

  getRouter(): Router {
    return this.router;
  }
}
