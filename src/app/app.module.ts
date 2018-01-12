import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { InfoListComponent } from './info-list/info-list.component';
import { CompSubjectComponent } from './comp-subject/comp-subject.component';
import { NewDirectiveDirective, UnlessDirective } from './new-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    FormInputComponent,
    InfoListComponent,
    CompSubjectComponent,
    NewDirectiveDirective,
    UnlessDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
