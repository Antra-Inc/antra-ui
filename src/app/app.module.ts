import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntraUiModule } from 'antra-ui';
import { ExampleButtonComponent } from './components/example-button/example-button.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleRaisedButtonComponent } from './components/example-raised-button/example-raised-button.component';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';


@NgModule({
  declarations: [AppComponent, ExampleButtonComponent, ExampleRaisedButtonComponent],
  imports: [
    AntraUiModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        lineNumbers: true,
        lineNumbersLoader: () => null
      } as HighlightOptions
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
