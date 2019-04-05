import { Component, OnInit, Inject } from '@angular/core';
import { NgxDrpOptions, PresetItem } from 'ngx-mat-daterange-picker';
import { Client } from '../../core/models/client';
import { FormGroup, FormControl } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA, MatDialog } from '@angular/material';
import { DialogData, DialogCommentComponent } from '../clients/home-clients.component';
import { StorageService } from 'src/app/core/services/storage.service';
import { FormatService } from 'src/app/core/services/format.service';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home-summary',
  templateUrl: './home-summary.component.html',
  styleUrls: ['./home-summary.component.sass']
})
export class SummarysComponent implements OnInit {
  selectedProgram;
  selectedClient;
  selectedSummary: Client;
  advancedOptions = false;

  selectedAgency;
  selectedCounty;

  summarys;

  clientList = [];
  programList = [];
  selectedClientItems = [];
  selectedProgramItems = [];
  dropdownClientSettings = {};
  dropdownProgramSettings = {};

  ngOnInit() {
    this.summarys = [];
    this.clientList = [
      { item_id: 1, item_text: 'Human Services' },
      { item_id: 2, item_text: 'Public Health' },
      { item_id: 3, item_text: 'Housing' },
      { item_id: 4, item_text: 'Corrections' }
    ];
    this.selectedClientItems = [
    ];
    this.dropdownClientSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
    this.programList = [
      { item_id: 1, item_text: 'Family Reunification' },
      { item_id: 2, item_text: 'Substance' },
      { item_id: 3, item_text: 'Foster Care' }
    ];
    this.selectedProgramItems = [
    ];
    this.dropdownProgramSettings = {
      singleSelection: false,
      idField: 'item_id',
      textField: 'item_text',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 2,
      allowSearchFilter: true
    };
  }
  onClientItemSelect(item: any) {
    console.log(item);
  }
  onClientSelectAll(items: any) {
    console.log(items);
  }
  onProgramItemSelect(item: any) {
    console.log(item);
  }
  onProgramSelectAll(items: any) {
    console.log(items);
  }

  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];

  constructor(public dialog: MatDialog) {
    // setTimeout(() => {
    //   this.openDialog();
    // }, 2000);
  }

  toogleAdvancedOptions() {
    this.advancedOptions = !this.advancedOptions;
  }

  selectSummary(event) {
    // console.log(event);
  }

  search() {
    console.log('TODO: search in summarys page');
  }

  openDialog() {
    this.dialog.open(PermissionDialogCommentComponent, { panelClass: 'permission-dialog-container' });
  }
}

@Component({
  selector: 'app-dialog-comment',
  templateUrl: './permissondialog-comment.html',
  styleUrls: ['./permissondialog-comment.css']
})
export class PermissionDialogCommentComponent {
  showForm = false;
  selectedProgram = 'option1';
  permissions$ = this.dataService.permissions$;

  permisssionForm = new FormGroup({
    content: new FormControl('')
  });

  formatDate = this.formatService.getFormatDate();

  constructor(
    public dialogRef: MatDialogRef<PermissionDialogCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private storageService: StorageService,
    private formatService: FormatService,
    private dataService: DataService
  ) {
    console.log(this.permissions$);

  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  AddEditPermission() {

  }
}
