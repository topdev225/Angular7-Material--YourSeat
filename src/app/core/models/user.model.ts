import {Client} from './client';

export class User {
  public id: string;
  public username: string;
  public email: string;
  public password?: string;
  public clients: Client[];
}

export class UpdateProfileModel {
  public displayName?: string;
  public photoURL?: string;
}
