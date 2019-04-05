import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {
  commentForm = new FormGroup({
    content: new FormControl('')
  });
  selectedProgram = 'option1';
  selectedClient = 'option1';
  constructor() { }

  ngOnInit() {
  }

  OnSubmit() {

  }



}
