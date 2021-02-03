import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AntraUiModule } from 'antra-ui';
import { HighlightModule, HIGHLIGHT_OPTIONS } from 'ngx-highlightjs';

import { ComponentsRoutingModule } from './components-routing.module';
import { ExampleDocComponent } from './example-doc/example-doc.component';
import { ButtonExampleComponent } from './pages/button-page/button-example/button-example.component';
import { ButtonPageComponent } from './pages/button-page/button-page.component';
import { ChangePasswordExampleComponent } from './pages/change-password-page/change-password-example/change-password-example.component';
import { ChangePasswordPageComponent } from './pages/change-password-page/change-password-page.component';

import { LoginExampleComponent } from './pages/login-page/login-example/login-example.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { LogoExampleComponent } from './pages/logo-page/logo-example/logo-example.component';
import { LogoPageComponent } from './pages/logo-page/logo-page.component';
import { PasswordResetExampleComponent } from './pages/password-reset-page/password-reset-example/password-reset-example.component';
import { PasswordResetPageComponent } from './pages/password-reset-page/password-reset-page.component';
import { PasswordResetSuccessfulExampleComponent } from './pages/password-reset-successful-page/password-reset-successful-example/password-reset-successful-example.component';
import { PasswordResetSuccessfulPageComponent } from './pages/password-reset-successful-page/password-reset-successful-page.component';

import { ProgressSpinnerExampleComponent } from './pages/progress-spinner-page/progress-spinner-example/progress-spinner-example.component';
import { ProgressSpinnerPageComponent } from './pages/progress-spinner-page/progress-spinner-page.component';
import { RaisedButtonExampleComponent } from './pages/raised-button-page/raised-button-example/raised-button-example.component';
import { RaisedButtonPageComponent } from './pages/raised-button-page/raised-button-page.component';
import { SidenavComponent } from './pages/sidenav-page/sidenav-example/sidenav/sidenav.component';
import { SidenavPageComponent } from './pages/sidenav-page/sidenav-page.component';
import { WidgetExampleComponent } from './pages/widget-page/widget-example/widget-example.component';
import { WidgetPageComponent } from './pages/widget-page/widget-page.component';

@NgModule({
    declarations: [
        ExampleDocComponent,

        ButtonExampleComponent,
        ButtonPageComponent,
        ChangePasswordExampleComponent,
        ChangePasswordPageComponent,

        LoginExampleComponent,
        LoginPageComponent,
        LogoExampleComponent,
        LogoPageComponent,

        PasswordResetExampleComponent,
        PasswordResetPageComponent,
        PasswordResetSuccessfulExampleComponent,
        PasswordResetSuccessfulPageComponent,

        ProgressSpinnerExampleComponent,
        ProgressSpinnerPageComponent,
        RaisedButtonExampleComponent,
        RaisedButtonPageComponent,

        SidenavComponent,
        SidenavPageComponent,
        WidgetExampleComponent,
        WidgetPageComponent
    ],
    imports: [
        ComponentsRoutingModule,
        CommonModule,
        AntraUiModule,
        HighlightModule
    ],
    exports: [
        ExampleDocComponent,

        ButtonExampleComponent,
        ButtonPageComponent,
        ChangePasswordExampleComponent,
        ChangePasswordPageComponent,

        LoginExampleComponent,
        LoginPageComponent,
        LogoExampleComponent,
        LogoPageComponent,

        PasswordResetExampleComponent,
        PasswordResetPageComponent,
        PasswordResetSuccessfulExampleComponent,
        PasswordResetSuccessfulPageComponent,

        ProgressSpinnerExampleComponent,
        ProgressSpinnerPageComponent,
        RaisedButtonExampleComponent,
        RaisedButtonPageComponent,

        SidenavComponent,
        SidenavPageComponent,
        WidgetExampleComponent,
        WidgetPageComponent,

        AntraUiModule,
    ],
    providers: [
        {
            provide: HIGHLIGHT_OPTIONS,
            useValue: {
                coreLibraryLoader: () => import('highlight.js/lib/core'),
                lineNumbersLoader: () => import('highlightjs-line-numbers.js'), // Optional, only if you want the line numbers
                languages: {
                    typescript: () => import('highlight.js/lib/languages/typescript'),
                    scss: () => import('highlight.js/lib/languages/scss'),
                    xml: () => import('highlight.js/lib/languages/xml'),
                },
            },
        },
    ],
})
export class ComponentsModule { }
