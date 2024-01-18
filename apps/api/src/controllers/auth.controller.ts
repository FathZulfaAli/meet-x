import { NextFunction, Request, Response } from 'express';
import { genSalt, hash } from 'bcrypt';
import { prisma } from '../prisma';
import { customAlphabet } from 'nanoid';

export class AuthController {
  async registerCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password } = req.body;

      const checkUser = await prisma.customer.findUnique({
        where: { email },
      });
      if (checkUser) {
        throw new Error('Account already exist with this email, Please login');
      }

      async function generateUniqueCode() {
        let nanoCustom = customAlphabet('ABCDEFGHIJKLMNOPQRSTUVWXYZ', 6); // First generate
        let uniqueCode = nanoCustom();
        // Check if the generated code already exists in the database
        while (await isCodeExistsInDatabase(uniqueCode)) {
          uniqueCode = nanoCustom(); // Regenerate again if code exists
        }
        console.log({ uniqueCode });
        return uniqueCode;
      }

      async function isCodeExistsInDatabase(code: any) {
        try {
          // Check if the code already exists in the database
          const existingRecord = await prisma.customer.findFirst({
            where: { ref_code: code },
          });

          return !!existingRecord;
        } catch (error) {
          next(error);
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
          use_ref_code: req.body.use_ref_code,
        },
      });

      // CREATE REFPOINT LOGIC HERE
      return res.status(201).send({ success: true, result: newUser });
    } catch (error) {
      next(error);
    }
  }

  async registerOrganizer(req: Request, res: Response, next: NextFunction) {
    try {
      const { name, email, password, organizer_name } = req.body;
    } catch (error) {
      next(error);
    }
  }
}
