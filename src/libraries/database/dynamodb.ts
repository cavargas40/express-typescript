import AWS from 'aws-sdk';
import { DYNAMO } from '../utils/env.loader';

AWS.config.update({
  region: DYNAMO.region,
});

export const dynamoDocument = new AWS.DynamoDB.DocumentClient();

export const TABLE_NAME = 'task-manager';
