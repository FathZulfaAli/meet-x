import { prisma } from '@/prisma';
import cron from 'node-cron';

// Schedule the job to run every day at midnight
export const expiredPointsSchedule = () => {
  cron.schedule('0 */12 * * *', async () => {
    try {
      const expiredData = await prisma.referralCode.findMany({
        where: {
          expired_at: {
            lt: new Date(),
          },
        },
      });

      if (expiredData.length === 0) {
        await prisma.cronLog.create({
          data: {
            status: 'Running Check',
          },
        });
      }

      for (const data of expiredData) {
        await prisma.referralCode.delete({
          where: {
            ref_log_id: data.ref_log_id,
          },
        });

        const userdata = await prisma.customer.findUnique({
          where: {
            customer_id: data.rc_provider,
          },
        });

        if (userdata) {
          const walletBalance = userdata.amouth_points ?? 0;
          const addNewPoint = walletBalance - 10000;

          await prisma.customer.update({
            where: {
              customer_id: userdata.customer_id,
            },
            data: {
              amouth_points: addNewPoint,
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
    } catch (error) {
      console.error('Error deleting expired data:', error);
    }
  });
};
