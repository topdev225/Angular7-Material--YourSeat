import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.sass']
})
export class SettingsComponent implements OnInit {
  tabNames: string[] = ['account', 'admin'];
  constructor(private router: Router) { }

  ngOnInit() { }

  public goBack() {
    this.router.navigate(['/home']);
  }
}
