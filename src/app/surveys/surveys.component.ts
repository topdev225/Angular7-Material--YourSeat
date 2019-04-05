import { Component, OnInit } from '@angular/core';
import {County} from '../core/models/county';
import {Agency} from '../core/models/agency';
import {Program} from '../core/models/program';
import {Survey} from '../core/models/survey';

@Component({
  selector: 'app-surveys',
  templateUrl: './surveys.component.html',
  styleUrls: ['./surveys.component.css']
})
export class SurveysComponent implements OnInit {

  counties: County[] = [
    {id: 1, name: 'County 1'},
    {id: 2, name: 'County 2'},
    {id: 3, name: 'County 3'},
    {id: 4, name: 'County 4'},
  ];

  agencies: Agency[] = [
    {id: 1, name: 'Agency 1'},
    {id: 2, name: 'Agency 2'},
    {id: 3, name: 'Agency 3'},
    {id: 4, name: 'Agency 4'},
  ];

  programs: Program [] = [
    {
      id: 1,
      name: 'Program 1 name',
      state: 'Program 1 State',
      address: 'Program 1 Address',
      busAccessible: false,
      metroAccessible: false,
      description: 'Program 1 descripton'
    },
    {
      id: 1,
      name: 'Program 2 name',
      state: 'Program 2 State',
      address: 'Program 2 Address',
      busAccessible: false,
      metroAccessible: false,
      description: 'Program 2 descripton'},
  ];

  surveys: Survey [] = [
    {
      id: 1,
      name: 'Survey 1',
      description: 'Survey 1 descripton',
      link: 'https://bit.ly/2Eq3RnB'
    },
    {
      id: 2,
      name: 'Survey 2',
      description: 'Survey 2 descripton',
      link: 'https://bit.ly/2Eq3RnA'
    },
  ];

  showSurveyList = false;
  showForm = false;
  expandState = false;

  constructor() { }

  ngOnInit() {
  }

}
