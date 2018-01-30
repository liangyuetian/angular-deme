import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { httpServer } from "./http/http-component.js";
// import { apRouters } from "./router/router-component";
import { AppRouterModule } from "./router/app-routing.module";
import { ElModule, ElChildModules } from 'element-angular';
import 'element-angular/theme/index.css';

import { AppComponent } from './app.component';
import { FormInputComponent } from './form-input/form-input.component';
import { InfoListComponent } from './info-list/info-list.component';
import { CompSubjectComponent } from './comp-subject/comp-subject.component';
import { NewDirectiveDirective, UnlessDirective } from './new-directive.directive';
import { ReactiveFormsModule } from '@angular/forms';
import { NewPipePipe } from './new-pipe.pipe';
import { appCompKey } from "./form/form-component";

import { ContactModule } from "./module/contact.module";
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
        CommonModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AppRouterModule,
        ElModule.forRoot(),
        ContactModule
        // RouterModule.forRoot(
        //   apRouters,
        //   {
        //     // enableTracing: true, // debugging 模式，会打印出各种路由信息
        //   }
        // )
    ],
    providers: [ // 服务，供应商，使用时需要依赖注入
        httpServer
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
