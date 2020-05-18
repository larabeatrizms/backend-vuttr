// const CI_DATABASE_URL = 'postgres://test:test@postgres:5432/test';

console.log(`ORMCONFIG configurou, DataBaseURL: ${process.env.DATABASE_URL}`);

const base = {
  type: 'postgres',
  url: process.env.DATABASE_URL,
  schema: 'public',
  synchronize: false,
  logging: false,
  migrationsRun: true,
  username: 'xbhesezxhynube',
  password: '7c40e26dda089d6d93e5a9235aaa83a8afbdd264a2bdd8eb4e43682338729228',
  database: 'd2mv1jin8o0rjq',
  entities: ['./src/models/*.js'],
  migrations: ['./src/database/migrations/*.js'],
  cli: {
    entitiesDir: './src/models',
    migrationsDir: './src/database/migrations',
  },
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
//     url: process.env.CI ? CI_DATABASE_URL : process.env.DATABASE_TEST_URL,
//     dropSchema: true,
//   },
//   development: {},
//   production: {
//     dropSchema: false,
//   },
// };

// module.exports = process.env.CI
//   ? { ...base, ...config['test'] }
//   : { ...base, ...config[process.env.NODE_ENV || 'development'] };

module.exports = process.env.CI ? { ...base } : { ...base };
