import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoPageComponent } from './pages/logo-page/logo-page.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';
import { PasswordResetSuccessfulPageComponent } from './pages/password-reset-successful-page/password-reset-successful-page.component';
import { ProgressSpinnerPageComponent } from './pages/progress-spinner-page/progress-spinner-page.component';
import { RaisedButtonPageComponent } from './pages/raised-button-page/raised-button-page.component';
import { SidenavPageComponent } from './pages/sidenav-page/sidenav-page.component';
import { WidgetPageComponent } from './pages/widget-page/widget-page.component';

const routes: Routes = [
    { path: 'button', component: ButtonPageComponent },
    { path: 'raised-button', component: RaisedButtonPageComponent },
    { path: 'login', component: LoginPageComponent },
    { path: 'progress-spinner', component: ProgressSpinnerPageComponent },
    { path: 'sidenav', component: SidenavPageComponent },
    { path: 'widget', component: WidgetPageComponent },
    { path: 'logo', component: LogoPageComponent },
    { path: 'password-reset', component: PasswordResetPageComponent },
    { path: 'change-password', component: ChangePasswordPageComponent },
    { path: 'password-reset-successful', component: PasswordResetSuccessfulPageComponent },
];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [
        RouterModule
    ],
})
export class ComponentsRoutingModule { }
