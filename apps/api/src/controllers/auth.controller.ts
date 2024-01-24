import { NextFunction, Request, Response } from 'express';
import { compare, genSalt, hash } from 'bcrypt';
import { prisma } from '../prisma';
import { customAlphabet } from 'nanoid';
import { sign } from 'jsonwebtoken';

export class AuthController {
  async registerCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, use_ref_code } = req.body;

      const checkUser = await prisma.customer.findUnique({
        where: { email },
      });
      if (checkUser) {
        throw new Error('Account already exist with this email, Please login');
      }

      // Each new user regist must have generated ref code
      async function generateUniqueCode() {
        let nanoCustom = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6);
        let uniqueCode = nanoCustom();
        while (await isCodeExistsInDatabase(uniqueCode)) {
          uniqueCode = nanoCustom();
        }
        return uniqueCode;
      }

      async function isCodeExistsInDatabase(code: any) {
        const existingRecord = await prisma.customer.findFirst({
          where: { ref_code: code },
        });

        return !!existingRecord;
      }

      //If client provide used ref code, must check if that code exist

      if (use_ref_code) {
        const checkUsedCode = await prisma.customer.findUnique({
          where: {
            ref_code: req.body.use_ref_code,
          },
        });

        if (!checkUsedCode) {
          throw new Error("Referral number you provide doesn't exist");
        }
      }

      const uniqueCode = await generateUniqueCode();

      const salt = await genSalt();
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.customer.create({
        data: {
          name,
          email,
          password: hashPassword,
          ref_code: uniqueCode,
          use_ref_code: use_ref_code,
        },
      });

      // CREATE REFPOINT LOGIC HERE
      return res.status(201).send({ success: true, result: newUser });
    } catch (error) {
      next(error);
    }
  }
  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const isValidUser = await prisma.customer.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (!isValidUser) {
        throw new Error('Wrong email or password');
      }

      //comparing hashed password from db with req.body.password
      const isValidPassword = await compare(
        req.body.password,
        isValidUser.password,
      );
      if (!isValidPassword) {
        throw new Error('Wrong email or password');
      }

      //if user success login, continue create token for a session
      const jwt = sign(
        {
          id: isValidUser.customer_id,
          email: isValidUser.email,
          // role: isValidUser.role,
        },
        'JCWDOL12-1',
      );
      return res.status(200).send('Login success');
    } catch (error) {
      next(error);
    }
  }
}
