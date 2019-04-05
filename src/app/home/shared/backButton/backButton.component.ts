import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-header-back-button',
  templateUrl: './backButton.component.html',
  styleUrls: ['./backButton.component.sass']
})
export class HeaderBackButtonComponent implements OnInit, OnDestroy {

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  public goBack() {
    this.router.navigate(['/home']);
  }
}
