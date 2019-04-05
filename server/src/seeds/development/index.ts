import { Connection } from 'typeorm';
import generateUsers from './users';

export default async (connection: Connection): Promise<any> => {  
  console.log('Generating data...');

  await generateUsers(connection);  
};
