// import { createConnection } from 'typeorm';
// import * as PostgressConnectionStringParser from 'pg-connection-string';

// createConnection();

// import {
//   getConnectionOptions,
//   ConnectionOptions,
//   createConnection,
// } from 'typeorm';
// import dotenv from 'dotenv';
// dotenv.config();

// const getOptions = async () => {
//   let connectionOptions: ConnectionOptions;
//   connectionOptions = {
//     type: 'postgres',
//     synchronize: false,
//     logging: false,
//     extra: {
//       ssl: false,
//     },
//     entities: ['./src/models/*.ts'],
//     migrations: ['./src/database/migrations/*.ts'],
//     cli: {
//       migrationsDir: './src/database/migrations',
//     },
//   };
//   if (process.env.DATABASE_URL) {
//     Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
//   }

//   connectionOptions = await getConnectionOptions();
//   return connectionOptions;
// };

import 'reflect-metadata';
import { createConnection } from 'typeorm';
import Tool from '../models/Tool';

const connect2Database = async (): Promise<void> => {
  await createConnection({
    type: 'postgres',
    url: process.env.DATABASE_URL,
    synchronize: true,
    // username: 'postgres',
    // password: 'docker',
    // database: 'vuttr',
    // entities: [Tool],
    // migrations: ['./src/database/migrations/*.ts'],
    // cli: {
    //   migrationsDir: './src/database/migrations',
    // },
  });
};

connect2Database().then(async () => {
  console.log('Connected to database');
});
