import { createConnection } from 'typeorm';
import * as PostgressConnectionStringParser from 'pg-connection-string';

// createConnection();

const databaseUrl: string = process.env.DATABASE_URL;
const connectionOptions = PostgressConnectionStringParser.parse(databaseUrl);
const typeOrmOptions: PostgresConnectionOptions = {
  type: 'postgres',
  name: connectionOptions.name,
  host: connectionOptions.host,
  port: connectionOptions.port,
  username: connectionOptions.username,
  password: connectionOptions.password,
  database: connectionOptions.database,
  synchronize: true,
  entities: ['target/entity/**/*.js'],
  extra: {
    ssl: true,
  },
};
const connection = createConnection(typeOrmOptions);
