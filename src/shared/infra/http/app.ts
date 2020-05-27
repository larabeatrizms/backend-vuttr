import 'dotenv/config';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';

import '../typeorm';
import 'express-async-errors';

import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/container';

import swaggerUi from 'swagger-ui-express';

import swaggerDocument from './swagger.json';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(`👎 ERRO ${err}`);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

export default app;
