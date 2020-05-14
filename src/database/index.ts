// import { createConnection } from 'typeorm';
// import * as PostgressConnectionStringParser from 'pg-connection-string';

// // createConnection();

import {
  getConnectionOptions,
  ConnectionOptions,
  createConnection,
} from 'typeorm';
import dotenv from 'dotenv';
dotenv.config();

const getOptions = async () => {
  let connectionOptions: ConnectionOptions;
  connectionOptions = {
    type: 'postgres',
    synchronize: false,
    logging: false,
    extra: {
      ssl: true,
    },
    entities: ['./src/models/*.ts'],
    migrations: ['./src/database/migrations/*.ts'],
    cli: {
      migrationsDir: './src/database/migrations',
    },
  };
  if (process.env.DATABASE_URL) {
    Object.assign(connectionOptions, { url: process.env.DATABASE_URL });
  } else {
    // gets your default configuration
    // you could get a specific config by name getConnectionOptions('production')
    // or getConnectionOptions(process.env.NODE_ENV)
    connectionOptions = await getConnectionOptions();
  }

  return connectionOptions;
};

const connect2Database = async (): Promise<void> => {
  const typeormconfig = await getOptions();
  await createConnection(typeormconfig);
};

connect2Database().then(async () => {
  console.log('Connected to database');
});
