import { Component, OnInit } from '@angular/core';

@Component({
    selector: "component2-selector",
    template: `
        <div class="component2"> 这是组件2名字是: {{name}} </div>
    `
})
export class Component2 implements OnInit {
    name: "Component2，组件2号"
    constructor() {

    }
    ngOnInit() {
        console.log("组件2号")
    }
}
