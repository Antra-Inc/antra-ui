import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// mat modules

// Antra modules
import { AntraButtonModule } from './antra-button/antra-button.module';
import { AntraIconModule } from './antra-icon/antra-icon.module';
import { AntraSidenavModule } from './antra-sidenav/antra-sidenav.module';
import { AntraToolbarModule } from './antra-toolbar/antra-toolbar.module';

@NgModule({
  declarations: [],
  imports: [BrowserModule, BrowserAnimationsModule, AntraIconModule],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    AntraSidenavModule,
    AntraToolbarModule,
    AntraButtonModule,
    AntraButtonModule,
  ],
})
export class AntraUiModule {}
