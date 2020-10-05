import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleButtonComponent } from './components/example-button/example-button.component';
import { ExampleBtn2Component } from './components/example-btn2/example-btn2.component';

const routes: Routes = [
    {path: 'button', component: ExampleButtonComponent},
    {path: 'btn2', component: ExampleBtn2Component},
    {path: '', redirectTo: '/button', pathMatch: 'full'},
  ];

@NgModule({
  imports: [

  RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
