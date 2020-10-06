import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ExampleButtonComponent } from './components/example-button/example-button.component';
import { ExampleRaisedButtonComponent } from './components/example-raised-button/example-raised-button.component';

const routes: Routes = [
  { path: 'components/button', component: ExampleButtonComponent },
  { path: 'components/raised-button', component: ExampleRaisedButtonComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
