import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntraUiModule } from 'antra-ui';
import { ExampleButtonComponent } from './components/example-button/example-button.component';
import { ExampletSidnavComponent } from './components/examplet-sidnav/examplet-sidnav.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleBtn2Component } from './components/example-btn2/example-btn2.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    ExampleButtonComponent,
    ExampletSidnavComponent,
    ExampleBtn2Component
  ],
  imports: [
    AntraUiModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ],
})
export class AppModule { }
