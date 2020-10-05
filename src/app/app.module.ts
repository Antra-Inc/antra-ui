import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntraUiModule } from 'antra-ui';



@NgModule({
  declarations: [AppComponent],
  imports: [AntraUiModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
