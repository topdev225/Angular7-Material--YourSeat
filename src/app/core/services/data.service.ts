import { Injectable } from '@angular/core';
import { County } from '../models/county';
import {
  AGENCIES,
  CLIENTS,
  COMMENTS,
  COUNTIES,
  PROGRAMS,
  STATES,
  SURVEYS,
  PERMISSIONS
} from '../mocks/mock-data';
import { Agency } from '../models/agency';
import { Program } from '../models/program';
import { Client } from '../models/client';
import { Survey } from '../models/survey';
import { BehaviorSubject } from 'rxjs';
import { first, map } from 'rxjs/operators';
import { orderBy } from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  counties: County[] = COUNTIES;
  agencies: Agency[] = AGENCIES;
  programs: Program[] = PROGRAMS;
  clients: Client[] = CLIENTS;
  surveys: Survey[] = SURVEYS;
  comments = new BehaviorSubject(
    COMMENTS.map(comment => ({ ...comment, date: new Date(comment.date) }))
  );

  permissions = new BehaviorSubject(
    PERMISSIONS.map(x => ({
      ...x, initials: 'LL'

    }))
  );
  comments$ = this.comments
    .asObservable()
    .pipe(map(comments => orderBy(comments, ['date'], ['desc'])));

  permissions$ = this.permissions
    .asObservable()
    .pipe(map(x => orderBy(x, ['id'], ['asc'])));

  constructor() { }

  getCounties(): County[] {
    return this.counties;
  }

  getAgencies(): Agency[] {
    return this.agencies;
  }

  getPrograms(): Program[] {
    return this.programs;
  }

  getClients(): Client[] {
    return this.clients;
  }

  getSurveys(): Survey[] {
    return this.surveys;
  }

  getStates(): any[] {
    return STATES;
  }

  addProgram(newProgram: Program) {
    this.programs.push(newProgram);
  }

  addClient(newClient: Client) {
    this.clients.push(newClient);
  }

  addComment(newComment) {
    this.comments$.pipe(first()).subscribe(comments => {
      this.comments.next([...comments, newComment]);
    });
  }
}
