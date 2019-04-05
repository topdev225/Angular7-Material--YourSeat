import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FormatService {
  formatDate = 'M/dd/yy';

  constructor() {}

  getFormatDate(): string {
    return this.formatDate;
  }
}
