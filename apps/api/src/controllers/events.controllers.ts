import { NextFunction, Request, Response } from 'express';

import prisma from '@/prisma';
import { NextRequest } from 'next/server';

export class eventsController {
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const events = await prisma.event.findMany();
    } catch (error) {
      next(error);
    }
  }
}
