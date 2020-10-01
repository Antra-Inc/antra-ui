import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [ButtonComponent],
  imports: [BrowserModule, MatButtonModule],
  exports: [BrowserModule, ButtonComponent],
})
export class AntraUiModule {}
