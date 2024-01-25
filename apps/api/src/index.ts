import App from './app';
import { prisma } from './prisma';

const main = () => {
  async () => {
    await prisma.$connect();
  };
  const app = new App();
  app.start();
};

main();
