import * as ts from 'typescript'

declare global {
    namespace NodeJS {
        interface ProcessEnv {
            DATABASE_URL: string;
            DATABASE_MIGRATE_URL: string;
            NODE_ENV?: 'development' | 'production';
            PRISMA_CLIENT_ENGINE_TYPE: string;
            APP_SECRET: string;
        }
    }
}