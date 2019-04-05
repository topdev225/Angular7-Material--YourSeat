import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthorizatedGuard } from './core/guards/authorizated.guard';
import { SettingsComponent } from './settings/settings.component';
import { PasswordResetComponent } from './passwordReset/passwordReset.component';
import { AccountComponent } from './account/account.component';
import { PermissionComponent } from './permission/permission.component';
import { AdminComponent } from './admin/admin.component';
import { SummarysComponent } from './home/summary/home-summary.component';
// import { HomeDocumentsComponent } from './home/documents/home-documents.component';
import { HomeClientsComponent } from './home/clients/home-clients.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent, canActivate: [AuthorizatedGuard], children: [
      { path: 'summary', component: SummarysComponent },
      { path: 'clients', component: HomeClientsComponent }
      //{ path: 'documents', component: HomeDocumentsComponent }
    ]
  },
  { path: 'login', component: LoginComponent },
  {
    path: 'settings', component: SettingsComponent, children: [
      { path: 'account', component: AccountComponent },
      { path: 'permission', component: PermissionComponent },
      { path: 'admin', component: AdminComponent }
    ]
  },
  { path: 'reset-password', component: PasswordResetComponent },
  { path: '', redirectTo: '/home/summary', pathMatch: 'prefix' },
  { path: '**', redirectTo: '/home/summary' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
