import {Trauma} from './trauma';

export interface Client {
  id: number;
  caseId: number;
  firstName: string;
  lastName: string;
  middleName: string;
  address: string;
  city: string;
  zipCode: string;
  state: string;
  dateOfBirth: string;
  picture: string;
  traumas: Trauma[];
  recommended_programs: any[];
  programs_history: any[];
}
