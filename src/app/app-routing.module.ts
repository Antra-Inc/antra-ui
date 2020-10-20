import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ButtonPageComponent } from './components/pages/button-page/button-page.component';
import { RaisedButtonPageComponent } from './components/pages/raised-button-page/raised-button-page.component';
import { SidenavPageComponent } from './components/pages/sidenav-page/sidenav-page.component';

const routes: Routes = [
  {
    path: 'components/button',
    component: ButtonPageComponent
  },
  {
    path: 'components/raised-button',
    component: RaisedButtonPageComponent
  },
  {
    path: 'components/sidenav',
    component: SidenavPageComponent,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule],
})
export class AppRoutingModule { }
