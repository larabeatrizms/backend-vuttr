import 'dotenv/config';

import express from 'express';

// import './database';
import connect2Database from './database';

import routes from './routes';

connect2Database().then(async () => {
  console.log('Connected to database');
});

const app = express();
app.use(express.json());

//app.get("/", (req, res) => res.json("hello Lara "));
app.use(routes);

export default app;
