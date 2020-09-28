import { NgModule } from '@angular/core';
import { AntraUiComponent } from './antra-ui.component';
import { MatButtonModule } from '@angular/material/button';
import { ButtonComponent } from './componenets/button/button.component';

@NgModule({
  declarations: [AntraUiComponent, ButtonComponent],
  imports: [MatButtonModule],
  exports: [AntraUiComponent, ButtonComponent],
})
export class AntraUiModule {}
