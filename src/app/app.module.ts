import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntraUiModule } from 'antra-ui';
import { ExampleButtonComponent } from './components/example-button/example-button.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleRaisedButtonComponent } from './components/example-raised-button/example-raised-button.component';

@NgModule({
  declarations: [AppComponent, ExampleButtonComponent, ExampleRaisedButtonComponent],
  imports: [AntraUiModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
