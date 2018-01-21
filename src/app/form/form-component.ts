import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

// 创建响应式表单组件
@Component({
    selector: 'app-comp-key',
    templateUrl: './form-component.html',
    //   styleUrls: ['./comp-subject.component.css']
})
export class appCompKey implements OnInit {

    constructor() { }
    name = new FormControl();
    // 这里我们创建了一个名叫name的FormControl。 它将会绑定到模板中的一个input框，表示英雄的名字
    // FormControl构造函数接收三个可选参数： 初始值、验证器数组和异步验证器数组。
    // 要让Angular知道我们希望把这个输入框关联到类中的FormControl型属性name，我们需要在模板中的<input>上加一句[formControl]="name"。

    ngOnInit() {
    }

}
