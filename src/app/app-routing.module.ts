import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './components/pages/button-page/button-page.component';
import { LoginPageComponent } from './components/pages/login-page/login-page.component';
import { ProgressSpinnerPageComponent } from './components/pages/progress-spinner-page/progress-spinner-page.component';
import { LogoPageComponent } from './components/pages/logo-page/logo-page.component';
import { RaisedButtonPageComponent } from './components/pages/raised-button-page/raised-button-page.component';
import { SidenavPageComponent } from './components/pages/sidenav-page/sidenav-page.component';
import { WidgetPageComponent } from './components/pages/widget-page/widget-page.component';
import { PasswordResetPageComponent } from './components/pages/password-reset-page/password-reset-page.component';
import { ChangePasswordPageComponent } from './components/pages/change-password-page/change-password-page.component';
import { NotificationDialogPageComponent } from './components/pages/notification-dialog-page/notification-dialog-page.component';

const routes: Routes = [
  { path: 'components/button', component: ButtonPageComponent },
  { path: 'components/raised-button', component: RaisedButtonPageComponent },
  { path: 'components/login', component: LoginPageComponent },
  { path: 'components/progress-spinner', component: ProgressSpinnerPageComponent },
  { path: 'components/sidenav', component: SidenavPageComponent },
  { path: 'components/widget', component: WidgetPageComponent },
  { path: 'components/logo', component: LogoPageComponent },
  { path: 'components/password-reset', component: PasswordResetPageComponent },
  { path: 'components/change-password', component: ChangePasswordPageComponent },
  { path: 'components/notification-dialog', component: NotificationDialogPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
