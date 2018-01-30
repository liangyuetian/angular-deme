import { Component, OnInit } from '@angular/core';

@Component({
    selector: "component1-selector",
    template: `
        <div> 这是组件1名字是: {{name}} </div>
    `
})
export class Component1 implements OnInit {
    name: "Component1，组件1号"
    constructor() {

    }
    ngOnInit() {
        console.log("组件1号")
    }
}
