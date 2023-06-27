import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({});

import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()