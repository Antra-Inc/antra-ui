import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Mat modules

// Antra modules
import { AntraButtonModule } from './antra-button/antra-button.module';
import { AntraIconModule } from './antra-icon/antra-icon.module';
import { AntraListModule } from './antra-list/antra-list.module';
import { AntraSidenavModule } from './antra-sidenav/antra-sidenav.module';
import { AntraTabsModule } from './antra-tabs/antra-tabs.module';
import { AntraToolbarModule } from './antra-toolbar/antra-toolbar.module';
import { AntraTreeModule } from './antra-tree/antra-tree.module';
import { FormsModule } from '@angular/forms';

// directives
import { PasswordPatternDirective } from './directives/password-pattern.directive';

// components
import { ButtonComponent } from './components/button/button.component';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [PasswordPatternDirective, LoginComponent, ButtonComponent, RaisedButtonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AntraIconModule,
    AntraSidenavModule,
    AntraToolbarModule,
    AntraButtonModule,
    AntraButtonModule,
    AntraTabsModule,
    AntraTreeModule,
    AntraListModule,
    FormsModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AntraIconModule,
    AntraSidenavModule,
    AntraToolbarModule,
    AntraButtonModule,
    AntraButtonModule,
    AntraTabsModule,
    AntraTreeModule,
    AntraListModule,
    LoginComponent,
    FormsModule,
    // Components
    ButtonComponent,
    RaisedButtonComponent,
  ],
})
export class AntraUiModule {}
