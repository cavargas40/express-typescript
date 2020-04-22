import express, { Request, Response } from 'express';
import api from './routes';
import './libraries/utils/env.loader';
import bodyParser from 'body-parser'

class App {
  public express;

  constructor() {
    this.express = express();
    this.bodyParserer();
    this.mountRoutes();
  }

  private mountRoutes(): void {
    this.express.use(`/api`, api);

    const router = express.Router();
    router.get('/', (req: Request, res: Response) => {
      res.json({
        message: 'Health Check!',
      });
    });
    this.express.use('/', router);
  }

  private bodyParserer(): void {
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  }
}

export default new App().express;
