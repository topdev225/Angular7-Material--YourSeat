import { NgModule } from '@angular/core';
import {
  MatCardModule,
  MatFormFieldModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSidenavModule,
  MatListModule,
  MatMenuModule,
  MatTabsModule,
  MatExpansionModule,
  MatDatepickerModule,
  MatSnackBarModule,
  MatSelectModule,
  MatDialogModule,
  MatProgressBarModule,
  MatButtonToggleModule,
  MatRadioModule
} from '@angular/material';
import { NgxMatDrpModule } from 'ngx-mat-daterange-picker';

@NgModule({
  imports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    NgxMatDrpModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatRadioModule
  ],
  exports: [
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    MatMenuModule,
    MatTabsModule,
    MatExpansionModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatSelectModule,
    MatDialogModule,
    NgxMatDrpModule,
    MatProgressBarModule,
    MatButtonToggleModule,
    MatRadioModule
  ]
})
export class MaterialModule { }
