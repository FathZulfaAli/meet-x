import App from '../app';
import { prisma } from '../prisma';
import supertest from 'supertest';

const app = new App().app;

describe('Auth Test', () => {
  beforeAll(async () => {
    await prisma.$connect();
  });
  beforeEach(() => {});
  afterEach(() => {});
  afterAll(async () => {
    await prisma.$disconnect();
  });

  it('Regist user (customer) account and must generate ref code', async () => {
    const tryRegist = await supertest(app).post('auth/regist-cust').send({
      email: 'test@email.com',
      password: '123456',
    });

    expect(tryRegist.status).toBe(201);
    expect(tryRegist.body.success).toBeTruthy();
    expect(tryRegist.body.newUser.ref_code).toBeTruthy();
  });

  it('User can register using other user ref code', async () => {
    const tryRegist = await supertest(app).post('auth/regist-cust').send({
      email: 'test2@email.com',
      password: '123456',
      use_ref_code: 'KHKJLO',
    });

    expect(tryRegist.status).toBe(201);
    expect(tryRegist.body.success).toBeTruthy();
    expect(tryRegist.body.newUser.use_ref_code).toBeTruthy();
  });

  //Bad case
  it('If user use fake ref code should be error', async () => {
    const tryRegist = await supertest(app).post('auth/regist-cust').send({
      email: 'test3@email.com',
      password: '123456',
      use_ref_code: 'notExist',
    });

    expect(tryRegist.status).toBe(500);
    expect(tryRegist.error).toBe("Referral number you provide doesn't exist");
  });
});
