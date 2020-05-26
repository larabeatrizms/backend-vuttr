// const CI_DATABASE_URL = 'postgres://test:test@postgres:5432/test';

console.log(`ORMCONFIG configurou`);

const base = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  synchronize: false,
  logging: false,
  entities: ['./dist/models/*.js'],
  migrations: ['./dist/database/migrations/*.js'],
  cli: {
    entitiesDir: './dist/models',
    migrationsDir: './dist/database/migrations',
  },
  migrationsRun: true,
};

const development = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  url: '',
  username: 'postgres',
  password: 'docker',
  database: 'vuttr',
  entities: ['./src/models/*.ts'],
  migrations: ['./src/database/migrations/*.ts'],
  cli: {
    migrationsDir: './src/database/migrations',
  },
};

module.exports = process.env.DATABASE_URL ? { ...base } : { ...development };

// module.exports = { ...development };
