import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// mat modules
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';
import {MatTreeModule} from '@angular/material/tree';

// components
import { ButtonComponent } from './components/button/button.component';


@NgModule({
  declarations: [ButtonComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatTreeModule
  ],
  exports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatSidenavModule,
    MatToolbarModule,
    MatButtonModule,
    MatListModule,
    MatTreeModule,
    ButtonComponent
  ],
})
export class AntraUiModule { }
