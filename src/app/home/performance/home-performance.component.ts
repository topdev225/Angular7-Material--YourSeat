import {Component, OnInit, ViewChild} from '@angular/core';
import {Client} from '../../core/models/client';
import {NgxDrpOptions, PresetItem, Range} from 'ngx-mat-daterange-picker';
import {StorageService} from '../../core/services/storage.service';
import {NgbDate} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-performance',
  templateUrl: './home-performance.component.html',
  styleUrls: ['./home-performance.component.css']
})

export class HomePerformanceComponent implements OnInit {

  @ViewChild('dateRangePicker') dateRangePicker;

  selectedProgram;
  selectedClient: Client;
  advancedOptions = false;

  selectedAgency;
  selectedCounty;

  clients;

  programs = [
    {
      name: 'Family Reunification',
      value: 1
    },
    {
      name: 'Substance Abuse & Preventation',
      value: 2
    },
    {
      name: 'Foster Care',
      value: 3
    }
  ];

  agencies = [
    {
      name: 'Human Services',
      value: 0
    },
    {
      name: 'Public Health',
      value: 1
    },
    {
      name: 'Housing',
      value: 2
    },
    {
      name: 'Corrections',
      value: 3
    },
  ];

  counties = [
    {
      name: 'Washington County',
      value: 0
    },
    {
      name: 'Anoka County',
      value: 1
    },
    {
      name: 'Becker County',
      value: 2
    },
    {
      name: 'Beltrami County',
      value: 3
    },
  ];

  range: Range = <Range>{fromDate: new Date(), toDate: new Date()};
  options: NgxDrpOptions;
  presets: Array<PresetItem> = [];

  hoveredDate: NgbDate;

  fromDate: NgbDate;
  toDate: NgbDate;

  fromShowedDate = 'Initial date';
  toShowedDate = 'Final date';

  constructor(private storageService: StorageService) {
  }

  selectDateRange() {
    if (this.fromDate !== null && this.toDate !== null) {

      const fromDateString = this.fromDate.month + '/' + this.fromDate.day + '/' + this.fromDate.year;
      const toDateString = this.toDate.month + '/' + this.toDate.day + '/' + this.toDate.year;

      this.fromShowedDate = fromDateString;
      this.toShowedDate = toDateString;
    }
  }

  onDateSelection(date: NgbDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgbDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgbDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgbDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  ngOnInit() {
    this.clients = this.storageService.getCurrentUser().clients;
    this.configureDateRangePicker();
  }

  toogleAdvancedOptions() {
    this.advancedOptions = !this.advancedOptions;
  }

  selectClient(event) {
    // console.log(event);
  }

  configureDateRangePicker() {
    const today = new Date();
    // const fromMin = new Date(today.getFullYear(), today.getMonth() - 2, 1);
    // const fromMax = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    // const toMin = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    // const toMax = new Date(today.getFullYear(), today.getMonth() + 2, 0);

    this.setupPresets();
    this.options = {
      presets: this.presets,
      format: 'mediumDate',
      range: {fromDate: today, toDate: today},
      applyLabel: 'Submit',
      calendarOverlayConfig: {
        shouldCloseOnBackdropClick: false,
        hasBackdrop: false
      }
      // cancelLabel: "Cancel",
      // excludeWeekends:true,
      // fromMinMax: {fromDate:fromMin, toDate:fromMax},
      // toMinMax: {fromDate:toMin, toDate:toMax}
    };
  }

  // helper function to create initial presets
  setupPresets() {

    const backDate = (numOfDays) => {
      const firstToday = new Date();
      return new Date(firstToday.setDate(firstToday.getDate() - numOfDays));
    };

    const today = new Date();
    const yesterday = backDate(1);
    const minus7 = backDate(7);
    const minus30 = backDate(30);
    const currMonthStart = new Date(today.getFullYear(), today.getMonth(), 1);
    const currMonthEnd = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    const lastMonthStart = new Date(today.getFullYear(), today.getMonth() - 1, 1);
    const lastMonthEnd = new Date(today.getFullYear(), today.getMonth(), 0);

    this.presets = [
      {presetLabel: 'Yesterday', range: {fromDate: yesterday, toDate: today}},
      {presetLabel: 'Last 7 Days', range: {fromDate: minus7, toDate: today}},
      {presetLabel: 'Last 30 Days', range: {fromDate: minus30, toDate: today}},
      {presetLabel: 'This Month', range: {fromDate: currMonthStart, toDate: currMonthEnd}},
      {presetLabel: 'Last Month', range: {fromDate: lastMonthStart, toDate: lastMonthEnd}}
    ];
  }

  updateRange(range: Range) {
    this.range = range;
    // console.log(this.range);
  }
}
