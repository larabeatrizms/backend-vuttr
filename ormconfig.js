// const CI_DATABASE_URL = 'postgres://test:test@postgres:5432/test';

console.log(`ORMCONFIG configurou`);

const base = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  synchronize: false,
  logging: false,
  // username: 'xbhesezxhynube',
  // password: '7c40e26dda089d6d93e5a9235aaa83a8afbdd264a2bdd8eb4e43682338729228',
  // database: 'd2mv1jin8o0rjq',
  entities: ['./dist/models/*.js'],
  migrations: ['./dist/database/migrations/*.js'],
  cli: {
    entitiesDir: './dist/models',
    migrationsDir: './dist/database/migrations',
  },
  migrationsRun: true,
  // type: 'postgres',
  // url: process.env.DATABASE_URL,
  // schema: 'public',
  // synchronize: false,
  // logging: false,
  // entities: ['./src/models/*.ts'],
  // migrations: ['./src/database/migrations/*.ts'],
  // cli: {
  //   entitiesDir: './src/models',
  //   migrationsDir: './src/database/migrations',
  // },
  // migrationsRun: true,
};

// const config = {
//   test: {
//     url: process.env.CI
//       ? process.env.DATABASE_URL
//       : process.env.DATABASE_TEST_URL,
//     dropSchema: true,
//   },
//   development: {
//     host: 'localhost',
//     port: 5432,
//     url: '',
//     username: 'postgres',
//     password: 'docker',
//     database: 'vuttr',
//     entities: ['./src/models/*.ts'],
//     migrations: ['./src/database/migrations/*.ts'],
//     cli: {
//       migrationsDir: './src/database/migrations',
//     },
//   },
//   production: {
//     dropSchema: false,
//   },
// };

// module.exports = process.env.CI
//   ? { ...base }
//   : { ...base, ...config[process.env.NODE_ENV || 'development'] };

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

module.exports = { ...base };

// module.exports = { ...development };
