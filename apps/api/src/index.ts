import App from './app';
import { prisma } from './prisma';

const main = async () => {
  async () => {
    await prisma.$connect();
  };
  const app = new App();
  app.start();
  app.dailyTask();
};

main();
