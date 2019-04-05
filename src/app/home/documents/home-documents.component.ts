import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { NgxDrpOptions, PresetItem, Range } from 'ngx-mat-daterange-picker';
import { Client } from '../../core/models/client';
import { Program } from '../../core/models/program';
import { StorageService } from '../../core/services/storage.service';
import { FormatService } from '../../core/services/format.service';
import { DataService } from '../../core/services/data.service';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCalendar, NgbDate } from '@ng-bootstrap/ng-bootstrap';

export interface DialogData {
  program: Program;
}

@Component({
  selector: 'app-home-documents',
  templateUrl: './home-documents.component.html',
  styleUrls: ['./home-documents.component.sass']
})
export class HomeDocumentsComponent implements OnInit {

  selectedProgram;
  selectedClient: Client;
  advancedOptions = false;

  selectedAgency;
  selectedCounty;

  programList = [];
  selectedProgramItems = [];
  dropdownProgramSettings = {};

  ngOnInit() {

    this.programList = [
      { item_id: 1, item_text: 'Family Reunification' },
      { item_id: 2, item_text: 'Substance Abuse & Preventation' },
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
      itemsShowLimit: 3,
      allowSearchFilter: true
    };
  }
 
  onProgramItemSelect(item: any) {
    console.log(item);
  }
  onProgramSelectAll(items: any) {
    console.log(items);
  }

  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService,
    calendar: NgbCalendar
  ) {
    // setTimeout(() => {
    //   this.openUploadDialog();
    // }, 1000);
  }
 
  openUploadDialog() {
    this.dialog.open(DialogUploadComponent, { panelClass: 'upload-dialog-container' });
  }

  selectClient(event) {
    // console.log(event);
  }

  search() {
    console.log('TODO: search in documents page');
  }
}

@Component({
  selector: 'app-dialog-comment',
  templateUrl: './dialog-comment.html',
  styleUrls: ['./dialog-comment.css']
})
export class DialogUploadComponent {
  selectedDocument = 'option1';
  selectedcasemanager = 'option1';
  uploadForm = new FormGroup({
    content: new FormControl('')
  });

  formatDate = this.formatService.getFormatDate();
  afuConfig = {
    multiple: true,
    formatsAllowed: '.jpg,.png,.txt,.zip,.docx,.doc',
    maxSize: '20',
    uploadAPI: {
      url: 'https://example-file-upload-api',
      headers: {
        'Content-Type': 'text/plain;charset=UTF-8',
        'Authorization': `Bearer token`
      }
    },
    theme: 'dragNDrop',
    hideProgressBar: true,
    hideResetBtn: true,
    hideSelectBtn: true,
    replaceTexts: {
      selectFileBtn: 'Select Files',
      resetBtn: 'Reset',
      uploadBtn: 'Upload',
      dragNDropBox: 'Drag and Drop files here',
      attachPinBtn: 'Attach Files...',
      afterUploadMsg_success: 'Successfully Uploaded !',
      afterUploadMsg_error: 'Upload Failed !'
    }
  };

  constructor(
    public dialogRef: MatDialogRef<DialogUploadComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private storageService: StorageService,
    private formatService: FormatService,
    private dataService: DataService
  ) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  UploadDoc() {

  }

  DeleteFile() {
    alert('delete me');
  }
}
