import { prisma } from '@/prisma';
import cron from 'node-cron';

// Schedule the job to run every day at midnight
export const expiredPointsSchedule = () => {
  cron.schedule('0 0 * * *', async () => {
    try {
      await deleteExpiredData();
      console.log('Expired data has been deleted.');
    } catch (error) {
      console.error('Error deleting expired data:', error);
    }
  });

  async function deleteExpiredData() {
    const expiredData = await prisma.referralCode.findMany({
      where: {
        expired_at: {
          lt: new Date(),
        },
      },
    });

    if (!expiredData) {
      await prisma.cronLog.create({
        data: {
          status: `Running Check`,
        },
      });
    }

    for (const data of expiredData) {
      await prisma.referralCode.delete({
        where: {
          ref_log_id: data.ref_log_id,
        },
      });

      const Deleted = data.ref_log_id;

      await prisma.cronLog.create({
        data: {
          status: `Deleted Id : ${Deleted}`,
        },
      });
    }
  }
};
