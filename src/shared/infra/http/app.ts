import 'dotenv/config';

import express from 'express';

import '../typeorm';
import '@shared/container';

import routes from './routes';

const app = express();
app.use(express.json());

app.use(routes);

export default app;
