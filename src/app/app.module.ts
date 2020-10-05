import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntraUiModule } from 'antra-ui';
import { ExampleButtonComponent } from './components/example-button/example-button.component';



@NgModule({
  declarations: [AppComponent, ExampleButtonComponent],
  imports: [AntraUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
