import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const jobData = req.body;
    const newJob = await prisma.job.create({
      data: jobData,
    });
    res.status(200).json(newJob);
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
