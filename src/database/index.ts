import { createConnection } from 'typeorm';

createConnection();

// import { createConnection } from 'typeorm';
// import Tool from '../models/Tool';

// const connect2Database = async (): Promise<void> => {
//   await createConnection({
//     type: 'postgres',
//     url: process.env.DATABASE_URL,
//     // synchronize: false,
//     migrationsRun: true,
//     // username: 'postgres',
//     // password: 'docker',
//     // database: 'vuttr',
//     // entities: [Tool],
//     // entities: [Tool],
//     entities: ['../models/*.ts'],
//     migrations: ['./migrations/*.ts'],
//     cli: {
//       migrationsDir: './migrations',
//     },
//   });
// };

// export default connect2Database;
