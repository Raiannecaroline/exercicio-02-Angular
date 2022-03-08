import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { InputTextComponent } from './input-text/input-text.component';
import { InputDateComponent } from './input-date/input-date.component';
import { InputPasswordComponent } from './input-password/input-password.component';
import { InputNumberComponent } from './input-number/input-number.component';
import { ButtonInputComponent } from './button-input/button-input.component';

@NgModule({
  declarations: [
    AppComponent,
    InputTextComponent,
    InputDateComponent,
    InputPasswordComponent,
    InputNumberComponent,
    ButtonInputComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
