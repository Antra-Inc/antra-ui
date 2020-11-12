import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './components/pages/button-page/button-page.component';
import { LogoPageComponent } from './components/pages/logo-page/logo-page.component';
import { RaisedButtonPageComponent } from './components/pages/raised-button-page/raised-button-page.component';
import { WidgetPageComponent } from './components/pages/widget-page/widget-page.component';

const routes: Routes = [
  { path: 'components/button', component: ButtonPageComponent },
  { path: 'components/raised-button', component: RaisedButtonPageComponent },
  { path: 'components/widget', component: WidgetPageComponent },
  { path: 'components/logo', component: LogoPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
