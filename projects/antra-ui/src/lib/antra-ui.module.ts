import { NgModule } from '@angular/core';
import { AntraUiComponent } from './antra-ui.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './components/button/button.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [AntraUiComponent, ButtonComponent],
  imports: [BrowserModule, MatButtonModule],
  exports: [AntraUiComponent, ButtonComponent],
})
export class AntraUiModule {}
