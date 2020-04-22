import app from './App';
import errorHandler from 'errorhandler';
import connectMongo from './libraries/database/mongo';
import './libraries/database/dynamodb';

const port = process.env.PORT || 3000;

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(port, (err) => {
  if (err) {
    return console.log(err);
  }

  return console.log(`Server is listening on ${port}`);
});

connectMongo();

