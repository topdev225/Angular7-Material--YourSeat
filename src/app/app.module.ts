import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatNativeDateModule,
  MatMenuModule,
  MatSnackBarModule,
} from '@angular/material';
import { MatIconModule } from '@angular/material/icon';
import { ServiceWorkerModule } from '@angular/service-worker';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerModule } from 'ngx-spinner';
import { AngularFileUploaderModule } from 'angular-file-uploader';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import { CoreModule } from './core/core.module';
import { AuthenticationService } from './core/services/authentication.service';
import { environment } from '../environments/environment';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LoginComponent } from './login/login.component';
import { AccountComponent } from './account/account.component';
import { SettingsComponent } from './settings/settings.component';
import { ProgramsComponent } from './programs/programs.component';
import { SurveysComponent } from './surveys/surveys.component';
import { ClientsComponent } from './clients/clients.component';
import { SummarysComponent, PermissionDialogCommentComponent } from './home/summary/home-summary.component';
import { HomePerformanceComponent } from './home/performance/home-performance.component';
import { HomeHeaderComponent } from './home/shared/header/header.component';
import { HomeAccountAvatarComponent } from './home/shared/accountAvatar/accountAvatar.component';
import { HeaderBackButtonComponent } from './home/shared/backButton/backButton.component';
import { PasswordResetComponent } from './passwordReset/passwordReset.component';
import {
  DialogCommentComponent,
  ModalComponentComponent,
  HomeClientsComponent,
  DialogCreateClientComponent,
  DialogUploadComponent
} from './home/clients/home-clients.component';
import { LoginModalDialogComponent } from './login/login-modal/loginmodal.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { MatCheckboxModule } from '@angular/material';
import { HomeDocumentsComponent } from './home/documents/home-documents.component';
// import { DialogUploadComponent } from './home/documents/home-documents.component';
import { AdminComponent } from './admin/admin.component';
import { PermissionComponent } from './permission/permission.component';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';

@NgModule({
  entryComponents: [
    DialogCommentComponent,
    ModalComponentComponent,
    LoginModalDialogComponent,
    DialogUploadComponent,
    PermissionDialogCommentComponent,
    DialogCreateClientComponent
  ],
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomeComponent,
    AccountComponent,
    SettingsComponent,
    ProgramsComponent,
    SurveysComponent,
    ClientsComponent,
    /*Home components*/
    SummarysComponent,
    HomePerformanceComponent,
    HomeClientsComponent,
    DialogCommentComponent,
    ModalComponentComponent,
    LoginModalDialogComponent,
    HomeHeaderComponent,
    HomeAccountAvatarComponent,
    HeaderBackButtonComponent,
    PasswordResetComponent,
    HomeDocumentsComponent,
    DialogUploadComponent,
    AdminComponent,
    PermissionComponent,
    PermissionDialogCommentComponent,
    DialogCreateClientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    MatMenuModule,
    FormsModule,
    BrowserAnimationsModule,
    CoreModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatNativeDateModule,
    AngularFileUploaderModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production
    }),
    NgbModule,
    MatIconModule,
    NgxSpinnerModule,
    MatSnackBarModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
    NgCircleProgressModule.forRoot({
      radius: 100,
      outerStrokeWidth: 16,
      innerStrokeWidth: 8,
      outerStrokeColor: '#78C000',
      innerStrokeColor: '#C7E596',
      animationDuration: 300
    }),
    MatCheckboxModule,
    NgMultiSelectDropDownModule.forRoot()
  ],
  providers: [AuthenticationService, Title, HomeHeaderComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
