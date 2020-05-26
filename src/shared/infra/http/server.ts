import 'reflect-metadata';
import 'module-alias/register';

if (!process.env.IS_TS_NODE) {
  console.log('Using module alias...');
  require('module-alias/register');
}

import app from './app';

const port = process.env.DATABASE_URL ? process.env.PORT : 3000;

app.listen(port, () => {
  console.log('🚀 Server started!');
});
