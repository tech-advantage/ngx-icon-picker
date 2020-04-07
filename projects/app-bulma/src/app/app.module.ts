import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppBulmaComponent } from './app.bulma.component';
import { CommonModule } from '@angular/common';
import { IconPickerModule } from 'ngx-icon-picker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppBulmaComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    IconPickerModule
  ],
  providers: [],
  bootstrap: [AppBulmaComponent]
})
export class AppModule { }
