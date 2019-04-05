import {User} from '../models/user.model';
import {CLIENTS} from './mock-data';

export const USERS: User[] = [
  {id: '1', username: 'admin', email: 'admin@yourseat.co', password: 'password', clients: [CLIENTS[0], CLIENTS[1], CLIENTS[2], CLIENTS[3]]},
  {id: '2', username: 'roger', email: 'roger@yourseat.co', password: 'password', clients: [CLIENTS[4], CLIENTS[5], CLIENTS[6], CLIENTS[7]]},
  {id: '3', username: 'lukas', email: 'lukas@yourseat.co', password: 'password', clients: [CLIENTS[8], CLIENTS[9], CLIENTS[10], CLIENTS[11]]},
];
