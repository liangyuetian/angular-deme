import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import httpServer from "./http/http-component.js";

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { InfoListComponent } from './info-list/info-list.component';
import { CompSubjectComponent } from './comp-subject/comp-subject.component';
import { NewDirectiveDirective, UnlessDirective } from './new-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPipePipe } from './new-pipe.pipe';
import { appCompKey } from "./form/form-component";

@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    InfoListComponent,
    CompSubjectComponent,
    NewDirectiveDirective,
    UnlessDirective,
    NewPipePipe,
    appCompKey
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    httpServer
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
