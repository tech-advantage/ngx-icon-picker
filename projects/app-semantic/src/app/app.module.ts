import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppSemanticComponent } from './app.semantic.component';
import { CommonModule } from '@angular/common';
import { IconPickerModule } from 'ngx-icon-picker';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppSemanticComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BrowserModule,
    IconPickerModule
  ],
  providers: [],
  bootstrap: [AppSemanticComponent]
})
export class AppModule { }
