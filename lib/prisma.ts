import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function globalPrisma() {
  if (process.env.NODE_ENV === 'development') {
  
    if (!(global as any)._prisma) {
      global._prisma = prisma; 
    }
    return global._prisma; 
  }
  return prisma; 
}

const client = globalPrisma();

export default client; 
