import { Component, OnInit } from '@angular/core';
import {County} from '../core/models/county';
import {Agency} from '../core/models/agency';
import {Program} from '../core/models/program';
import {Client} from '../core/models/client';
import {DataService} from '../core/services/data.service';
import {MatSnackBar} from '@angular/material';
import {User} from '../core/models/user.model';
import {StorageService} from '../core/services/storage.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  counties: County[];
  agencies: Agency[];
  programs: Program[];
  clients: Client [];
  states: any[];

  showClientList = false;
  showForm = false;
  expandState = false;

  clientForm = {
    id: 0,
    caseId: 0,
    firstName: '',
    lastName: '',
    middleName: '',
    address: '',
    city: '',
    zipCode: '',
    state: '',
    dateOfBirth: ''
  };

  public user: User;

  constructor(
    private dataService: DataService,
    public snackBar: MatSnackBar,
    private storageService: StorageService,
  ) { }

  ngOnInit() {
    this.user = this.storageService.getCurrentUser();
    this.counties = this.dataService.getCounties();
    this.agencies = this.dataService.getAgencies();
    this.programs =  this.dataService.getPrograms();
    this.clients =  this.user.clients;
    this.states = this.dataService.getStates();
  }

  addNewClient(newClient: Client) {
    this.dataService.addClient(newClient);
    this.showForm = false;
    this.openSnackBar('Client added! ');
  }

  openSnackBar(message: string) {
    this.snackBar.open(message, '', {
      duration: 500
    });
  }
}
