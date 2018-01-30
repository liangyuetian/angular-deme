import { NgModule, Component } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { Component1 } from './components/component1';
import { Component2 } from './components/component2';
import { AwesomePipe } from './pipe/awesome.pipe';

@NgModule({
    imports: [CommonModule, FormsModule],
    declarations: [
        Component1,
        Component2,
        AwesomePipe
    ],
    exports: [
        Component1,
        Component2
    ]

})
export class ContactModule { }
