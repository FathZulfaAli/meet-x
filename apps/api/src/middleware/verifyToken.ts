import { NextFunction, Request, Response } from 'express';
import { verify } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      dataUser: any;
    }
  }
}

export const verifyToken = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res
        .status(401)
        .send('Unauthorized: No token provided, Please login first');
    }
    const verifiedToken = verify(token, 'JCWDOL12-1');
    req.dataUser = verifiedToken;
    next();
  } catch (error) {
    next(error);
  }
};
