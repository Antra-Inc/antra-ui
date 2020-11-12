import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './components/pages/button-page/button-page.component';
import { ProgressSpinnerPageComponent } from './components/pages/progress-spinner-page/progress-spinner-page.component';
import { RaisedButtonPageComponent } from './components/pages/raised-button-page/raised-button-page.component';

const routes: Routes = [
  { path: 'components/button', component: ButtonPageComponent },
  { path: 'components/raised-button', component: RaisedButtonPageComponent },
  { path: 'components/progress-spinner', component: ProgressSpinnerPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
