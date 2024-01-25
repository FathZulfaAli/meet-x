import { prisma } from '@/prisma';
import { NextFunction, Request, Response } from 'express';

export class CreateEventsController {
  async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      const newEvent = await prisma.event.create({
        data: {
          tittle: req.body.title,
          created_by: req.body.created_by,
          description: req.body.description,
          img: req.body.img,
          date_event: req.body.date_event,
          price_type: req.body.price_type,
          price: req.body.price,
          place: req.body.place,
          seats: req.body.seats,
          terms: req.body.terms,
          time: req.body.time,
          rating: req.body.rating,
          available: req.body.available,
        },
      });

      return res.status(201).send({ success: true, data: newEvent });
    } catch (error) {
      next(error);
    }
  }
}
