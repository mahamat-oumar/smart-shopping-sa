import { PrismaClient } from '../generated/prisma/client';

const PrismaClientAny: any = PrismaClient as unknown as any;
const prisma = new PrismaClientAny();

async function main() {
  console.log('Running Prisma seed...');
  // TODO: Add your seed data here, for example:
  // await prisma.user.create({ data: { name: 'Seed User' } });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
