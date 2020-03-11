import app from './app';
import errorHandler from 'errorhandler';

const port = process.env.PORT || 3000;

/**
 * Error Handler. Provides full stack - remove for production
 */
app.use(errorHandler());

/**
 * Start Express server.
 */
app.listen(port, err => {
  if (err) {
    return console.log(err);
  }

  return console.log(`server is listening on ${port}`);
});
