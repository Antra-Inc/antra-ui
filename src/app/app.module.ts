import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AntraUiModule } from 'antra-ui';
import { ExampleButtonComponent } from './components/example-button/example-button.component';
import { AppRoutingModule } from './app-routing.module';
import { ExampleRaisedButtonComponent } from './components/example-raised-button/example-raised-button.component';
import { HighlightModule, HIGHLIGHT_OPTIONS, HighlightOptions } from 'ngx-highlightjs';
import { ExampleWrapperComponent } from './components/example-wrapper/example-wrapper.component';
import { TestwrapperComponent } from './components/raised-button-doc/raised-button-doc.component';


@NgModule({
  declarations: [
    AppComponent,
    ExampleButtonComponent,
    ExampleRaisedButtonComponent,
    ExampleWrapperComponent,
    TestwrapperComponent
  ],
  imports: [
    AntraUiModule,
    AppRoutingModule,
    HighlightModule
  ],
  providers: [
    {
      provide: HIGHLIGHT_OPTIONS,
      useValue: {
        coreLibraryLoader: () => import('../../node_modules/highlight.js/lib/core'),
        lineNumbersLoader: () => import('highlightjs-line-numbers.js'),
        languages: {
          typescript: () => import('../../node_modules/highlight.js/lib/languages/typescript'),
          css: () => import('../../node_modules/highlight.js/lib/languages/css'),
          xml: () => import('../../node_modules/highlight.js/lib/languages/xml')
        }
      }
    }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
