import { DB_CONNECTION_TOKEN } from './constants';
import { createConnection } from 'typeorm';
import * as config from 'config';

export default {
  provide: DB_CONNECTION_TOKEN,
  useFactory: async () => await createConnection({
    type: 'postgres',
    host: config.get<string>('database.host'),
    port: config.get<number>('database.port'),
    username: config.get<string>('database.username'),
    password: config.get<string>('database.password'),
    database: config.get<string>('database.database'),
    entities: [
      __dirname + `/../../../${config.get<string>('typeorm.entitiesGlob')}`,
    ],
  }),
};