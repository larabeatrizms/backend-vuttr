import 'reflect-metadata';
import app from './app';

const port = process.env.DATABASE_URL ? process.env.PORT : 3000;

app.listen(port, () => {
  console.log('🚀 Server started on port 3000!');
});
