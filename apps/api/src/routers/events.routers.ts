import { CreateEventsController } from '@/controllers/events.controllers';
import { Router } from 'express';

export class CreateEventsRouter {
  private router: Router;
  private createEvents: CreateEventsController;

  constructor() {
    this.createEvents = new CreateEventsController();
    this.router = Router();
    this.initializeRouter();
  }

  private initializeRouter(): void {
    this.router.post('/create-event', this.createEvents.createEvent);
    this.router.get('/list-events', this.createEvents.getEvents);
  }

  getRouter(): Router {
    return this.router;
  }
}
