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
  selector: 'app-home-clients',
  templateUrl: './home-clients.component.html',
  styleUrls: ['./home-clients.component.sass']
})
export class HomeClientsComponent implements OnInit {
  selectedProgram;
  selectedClient: Client;
  advancedOptions = false;
  showDefaultForm = false;
  showEditForm = true;
  verifymodalshow = true;
  verified = true;
  showInsightFrom = true;
  showScoreForm = true;
  selectedAgency;
  selectedCounty;

  clientList = [];
  programList = [];
  selectedClientItems = [];
  selectedProgramItems = [];
  dropdownClientSettings = {};
  dropdownProgramSettings = {};
  
  ngOnInit() {

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

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  fromShowedDate = 'Initial date';
  toShowedDate = 'Final date';

  constructor(
    public dialog: MatDialog,
    private storageService: StorageService,
    calendar: NgbCalendar
  ) {
  }

  openDialog() {
    this.dialog.open(DialogCommentComponent, { panelClass: 'client-dialog-container' });
  }
  openConfirmDialog() {
    this.dialog.open(ModalComponentComponent);
  }
  openCreateClientDialog() {
    this.dialog.open(DialogCreateClientComponent, { panelClass: 'create-client-container' });
  }
  openUploadDialog() {
    this.dialog.open(DialogUploadComponent, { panelClass: 'upload-dialog-container' });
  }
  toogleAdvancedOptions() {
    this.advancedOptions = !this.advancedOptions;
  }

  selectClient(event) {
    // console.log(event);
  }

  search() {
    console.log('TODO: search in clients page');
  }
}

@Component({
  selector: 'app-dialog-comment',
  templateUrl: './dialog-comment.html',
  styleUrls: ['./dialog-comment.css']
})
export class DialogCommentComponent {
  showForm = false;

  comments$ = this.dataService.comments$;

  commentForm = new FormGroup({
    content: new FormControl('')
  });

  formatDate = this.formatService.getFormatDate();

  constructor(
    public dialogRef: MatDialogRef<DialogCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
    private storageService: StorageService,
    private formatService: FormatService,
    private dataService: DataService
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewComment() {
    const newComment = {
      date: new Date(),
      autor: this.storageService.getCurrentUser().username,
      content: this.commentForm.get('content').value
    };
    this.dataService.addComment(newComment);
    this.showForm = false;
    this.commentForm.reset();
  }
}

@Component({
  selector: 'app-dialog-recommended-program',
  templateUrl: './dialog-recommended-program.html',
  styleUrls: ['./dialog-recommended-program.css']
})

export class ModalComponentComponent {

  public visible = true;
  public visibleAnimate = false;
  public verifymodalshow = true;
  constructor(
    public dialogRef: MatDialogRef<DialogCommentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  public show(): void {
    this.visible = true;
    this.verifymodalshow = true;
    setTimeout(() => this.visibleAnimate = true, 100);
  }

  public hide(): void {
    this.visibleAnimate = false;
    this.verifymodalshow = false;
    this.dialogRef.close();
    setTimeout(() => this.visible = false, 300);
  }

  public onContainerClicked(event: MouseEvent): void {
    if ((<HTMLElement>event.target).classList.contains('modal')) {
      this.dialogRef.close();
    }
  }
}
@Component({
  selector: 'app-dialog-create-client',
  templateUrl: './dialog-create-client.html',
  styleUrls: ['./dialog-create-client.css']
})
export class DialogCreateClientComponent {

  commentForm = new FormGroup({
    content: new FormControl('')
  });

  constructor(
    public dialogRef: MatDialogRef<DialogCreateClientComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  addNewComment() {
    const newComment = {
      content: this.commentForm.get('content').value
    };
    this.commentForm.reset();
  }
}
@Component({
  selector: 'app-dialog-upload',
  templateUrl: './dialog-upload.html',
  styleUrls: ['./dialog-upload.css']
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