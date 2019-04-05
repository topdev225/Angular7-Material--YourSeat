import { Connection, createConnection } from 'typeorm';
import generateDevelopmentSeeds from './development';

createConnection()  
  .then(connection => {
    return generateDevelopmentSeeds(connection);
  })
  .then(null, err => console.log(err));
