import { prisma } from '@/prisma';
import { NextFunction, Request, Response } from 'express';
import next from 'next';

export class CreateEventsController {
  async createEvent(req: Request, res: Response, next: NextFunction) {
    try {
      console.log(req.body);

      // return res.status(201).send({ success: true, data: "new" });
      const newEvent = await prisma.event.create({
        data: {
          tittle: req.body.tittle,
          description: req.body.description,
          img: req.body.img,
          date_event: req.body.date_event,
          price_type: req.body.price_type,
          price: parseInt(req.body.price),
          place: req.body.place,
          seats: parseInt(req.body.seats),
          terms: req.body.terms,
          time: req.body.time,
          category: req.body.category,
        },
      });

      return res.status(201).send({ success: true, data: newEvent });
    } catch (error) {
      next(error);
    }
  }
  async getEvents(req: Request, res: Response, next: NextFunction) {
    try {
      const getEvents = await prisma.event.findMany();
      return res.status(200).send({ getEvents });
    } catch (error) {
      next(error);
    }
  }
}
