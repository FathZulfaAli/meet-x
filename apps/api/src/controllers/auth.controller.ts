import { NextFunction, Request, Response } from 'express';
import { compare, genSalt, hash } from 'bcrypt';
import { prisma } from '../prisma';
import { customAlphabet } from 'nanoid';
import { sign } from 'jsonwebtoken';
import Cookies from 'js-cookie';

export class AuthController {
  async registerCustomer(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, first_name, last_name, used_ref_code } =
        req.body;

      const checkUser = await prisma.auth.findUnique({
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
        const existingRecord = await prisma.customer.findUnique({
          where: { ref_code: code },
        });

        return !!existingRecord;
      }

      //If client provide used ref code, must check if that code exist
      let isDiscount = false;
      if (req.body.used_ref_code) {
        const checkUsedCode = await prisma.customer.findUnique({
          where: {
            ref_code: req.body.used_ref_code,
          },
        });
        isDiscount = true; //if used code is exist => set isDiscount true

        if (!checkUsedCode) {
          throw new Error("Referral number you provide doesn't exist");
        }
      }

      const uniqueCode = await generateUniqueCode();

      const salt = await genSalt();
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.auth.create({
        data: {
          email,
          password: hashPassword,
          role: req.body.role,
        },
      });

      const authId = newUser.id;

      const profileUser = await prisma.customer.create({
        data: {
          auth: {
            connect: {
              id: authId,
            },
          },
          first_name,
          last_name,
          used_ref_code,
          isDiscount: isDiscount,
          ref_code: uniqueCode,
        },
      });

      // Ref code user and provider each will grant with reward
      let response;
      if (req.body.used_ref_code) {
        const custRefId = await prisma.customer.findUnique({
          where: {
            ref_code: req.body.used_ref_code,
          },
        });

        async function expirationDate() {
          const expirationDate = new Date();
          expirationDate.setMonth(expirationDate.getMonth() + 3);
          return expirationDate;
        }
        const pointExpired = await expirationDate();

        const addPoints = await prisma.referralCode.create({
          data: {
            ref_code: {
              connect: {
                customer_id: custRefId?.customer_id,
              },
            },

            amount_Point: 10000,
            expired_at: pointExpired,
          },
        });
        response = {
          success: true,
          result: { auth: newUser, profile: profileUser, ref: addPoints },
        };
      } else {
        response = {
          success: true,
          result: { auth: newUser, profile: profileUser },
        };
      }

      return res.status(201).send({
        success: true,
        result: { response },
      });
    } catch (error) {
      next(error);
    }
  }

  async registEo(req: Request, res: Response, next: NextFunction) {
    try {
      const { email, password, first_name, last_name, company_name } = req.body;
      const checkUser = await prisma.auth.findUnique({
        where: {
          email: email,
        },
      });
      if (checkUser) {
        throw new Error('Account already exist with this email, Please login');
      }

      const salt = await genSalt();
      const hashPassword = await hash(password, salt);

      const newUser = await prisma.auth.create({
        data: {
          email,
          password: hashPassword,
          role: req.body.role,
        },
      });

      const authId = newUser.id;

      const profileEo = await prisma.eventOrganizer.create({
        data: {
          auth: {
            connect: {
              id: authId,
            },
          },
          first_name,
          last_name,
          company_name,
        },
      });

      return res.status(201).send(profileEo);
    } catch (error) {
      next(error);
    }
  }

  async login(req: Request, res: Response, next: NextFunction) {
    try {
      const isValidUser = await prisma.auth.findUnique({
        where: {
          email: req.body.email,
        },
      });

      if (!isValidUser) {
        throw new Error('Wrong email or password');
      }

      const authId = isValidUser.id;

      let getProfile;

      if (isValidUser.role === 'customer') {
        getProfile = await prisma.customer.findUnique({
          where: {
            auth_id: authId,
          },
        });
      } else if (isValidUser.role === 'Seller') {
        getProfile = await prisma.eventOrganizer.findUnique({
          where: {
            auth_id: authId,
          },
        });
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
          id: isValidUser.id,
          email: isValidUser.email,
          role: isValidUser.role,
          profile: getProfile,
        },
        'JCWDOL12-1',
      );

      // Cookies.set('token', jwt, { domain: 'example.com' });
      return res.status(200).send({ success: true, token: jwt });
    } catch (error) {
      next(error);
    }
  }
  async getRole(req: Request, res: Response, next: NextFunction) {
    try {
      const getRole = await prisma.auth.findUnique({
        where: {
          email: req.body.email,
        },
      });
      return res.status(201).send({ role: getRole?.role });
    } catch (error) {
      next(error);
    }
  }
}
