/* eslint-disable @typescript-eslint/no-unused-vars */
import { PrismaClient } from '../src/generated/prisma/client';

const prisma = new PrismaClient();

const vans = [];

const main = async () => {
	// need to seed data

	console.log('DB main: Finished');
};

main();
