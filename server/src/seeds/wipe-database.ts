import { createConnection } from 'typeorm';

createConnection()
  .then(connection => {
    return connection.query('DROP SCHEMA public CASCADE; CREATE SCHEMA public;');
  })