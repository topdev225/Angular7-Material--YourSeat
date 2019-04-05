import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-home-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HomeHeaderComponent implements OnInit, OnDestroy {
  @Input() tabNames: string[];
  @Input() parentRoute: string;
  @Input() userName: string;
  paramsSub: any;
  selectedTab: string;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit() {
    this.paramsSub = this.activatedRoute.params.subscribe(params => {
      this.spinner.show();
      setTimeout(() => {
        this.spinner.hide();
        const paramName = Object.keys(params)[0];
        if (!params[paramName] || this.tabNames.indexOf(params[paramName]) < 0) {
          return this.router.navigate([this.parentRoute, this.tabNames[0]]);
        }
        this.selectedTab = params[paramName];
      }, 1000);
    });
  }

  ngOnDestroy() {
    this.paramsSub.unsubscribe();
  }
}
