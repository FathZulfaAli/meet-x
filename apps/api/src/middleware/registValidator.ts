import { NextFunction, Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

export const registValidator = [
  body('first_name').notEmpty().withMessage('Please provide your name'),
  body('email').notEmpty().withMessage('Email is required'),
  body('email').isEmail().withMessage('Wrong email format'),
  body('password').notEmpty().withMessage('Password required'),
  body('password')
    .isStrongPassword({
      minLength: 8,
      minLowercase: 1,
      minNumbers: 1,
      minSymbols: 0,
      minUppercase: 1,
    })
    .withMessage(
      'Please provide password with minimum 6 character, 1 alphabet, 1 number',
    ),
  body('used_ref_code')
    .optional()
    .isLength({ max: 6 })
    .withMessage('Invalid referral code'),
  (req: Request, res: Response, next: NextFunction) => {
    const errorValidator = validationResult(req);
    if (!errorValidator.isEmpty()) {
      return res.status(400).send({ error: errorValidator });
    }
    next();
  },
];
