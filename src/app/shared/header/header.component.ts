import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  @Output() clickLogin: EventEmitter<any> = new EventEmitter();
  constructor() {}

  ngOnInit() {}

  onLogin() {
    this.clickLogin.emit();
  }
}
