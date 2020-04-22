import * as dotenv from 'dotenv';
import fs from 'fs';

try {
  if (!fs.existsSync(`${__dirname}/../../.env`)) {
    console.log('The .env file is required to run the project');
    process.exit(1);
  }
} catch (error) {
  console.log('The .env file is required to run the project');
}

dotenv.config();
let path;
switch (process.env.NODE_ENV) {
  case 'test':
    path = `${__dirname}/../../.env.test`;
    break;
  case 'production':
    path = `${__dirname}/../../.env.production`;
    break;
  default:
    path = `${__dirname}/../../.env`;
    break;
}
dotenv.config({ path });

const { MONGODB_HOST, MONGODB_PORT, MONGODB_DATABASE } = process.env;

export const MONGO = {
  host: MONGODB_HOST,
  port: MONGODB_PORT,
  database: MONGODB_DATABASE,
};
