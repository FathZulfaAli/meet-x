import { NextFunction, Request, Response } from 'express';
import Cookies from 'js-cookie';
import { verify } from 'jsonwebtoken';

declare global {
  namespace Express {
    interface Request {
      dataUser: any;
    }
  }
}

export const verifyTokenCust = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    // const token = Cookies.get('token');
    const token = req.body.token;

    if (!token) {
      return res
        .status(401)
        .send('Unauthorized: No token provided, Please login first');
    }
    const verifiedToken = verify(token, 'JCWDOL12-1');
    req.dataUser = verifiedToken;
    if (req.dataUser.role !== 'customer') {
      throw new Error("You're not authorized to visit this page");
    }

    next();
  } catch (error) {
    next(error);
  }
};
