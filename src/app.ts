import 'reflect-metadata';
import 'dotenv/config';

import express from 'express';

import './database';

import routes from './routes';

const app = express();
app.use(express.json());

//app.get("/", (req, res) => res.json("hello Lara "));
app.use(routes);

export default app;
