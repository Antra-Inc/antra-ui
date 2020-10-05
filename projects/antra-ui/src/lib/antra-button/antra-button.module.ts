import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// mat modules
import { MatButtonModule } from '@angular/material/button';

// antra components
import { ButtonComponent } from './components/button/button.component';
import { RaisedButtonComponent } from './components/raised-button/raised-button.component';

@NgModule({
  imports: [MatButtonModule],
  declarations: [ButtonComponent, RaisedButtonComponent],
  exports: [MatButtonModule, ButtonComponent, RaisedButtonComponent],
})
export class AntraButtonModule {}
