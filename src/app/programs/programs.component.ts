import { Component, OnInit } from '@angular/core';
import { County } from '../core/models/county';
import { Agency } from '../core/models/agency';
import { Program } from '../core/models/program';
import { DataService } from '../core/services/data.service';
import { MatSnackBar } from '@angular/material';
import { Survey } from '../core/models/survey';

@Component({
  selector: 'app-programs',
  templateUrl: './programs.component.html',
  styleUrls: ['./programs.component.css']
})
export class ProgramsComponent implements OnInit {
  counties: County[];
  agencies: Agency[];
  states: any[];

  res = [{ id: 1, value: 'Yes' }, { id: 0, value: 'No' }];

  showForm = false;
  expandState = false;

  programs: Program[];
  surveys: Survey[];

  showProgramList = false;

  programForm = {
    id: 0,
    name: '',
    state: '',
    address: '',
    busAccessible: false,
    metroAccessible: false,
    description: ''
  };

  selectedCounty;
  selectedAgency;

  constructor(private dataService: DataService, public snackBar: MatSnackBar) {}

  ngOnInit() {
    this.counties = this.dataService.getCounties();
    this.agencies = this.dataService.getAgencies();
    this.programs = this.dataService.getPrograms();
    this.states = this.dataService.getStates();
    this.surveys = this.dataService.getSurveys();
  }

  addNewProgram(newProgram: Program) {
    this.dataService.addProgram(newProgram);
    this.showForm = false;
    this.openSnackBar('Program added! ');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 500
    });
  }
}
