import mongoose from 'mongoose';
import { MONGO } from '../utils/env.loader';

export default () => {
  const connectionString = `mongodb://${MONGO.host}:${MONGO.port}/${MONGO.database}`;

  const connect = () => {
    mongoose.set('useCreateIndex', true);
    mongoose
      .connect(connectionString, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => {
        return console.info(`Successfully connected to ${connectionString}`);
      })
      .catch((error) => {
        console.error('Error connecting to database: ', error);
        return process.exit(1);
      });
  };
  connect();

  mongoose.connection.on('disconnected', connect);
};
