import 'reflect-metadata';
import app from './app';

app.listen(process.env.PORT, () => {
  console.log('🚀 Server started on port 3000!');
});

// app.listen(3000, () => {
//   console.log('🚀 Server started on port 3000!');
// });
