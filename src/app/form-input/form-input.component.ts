import { Component, OnInit, NgModule, Renderer2, ElementRef, Directive } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AfterViewInit, ViewChild } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { InfoListComponent } from "../info-list/info-list.component"; // 导入子组件
import { HttpClient } from "@angular/common/http";
import httpServer from "../http/http-component.js";

import { ActivatedRoute } from "@angular/router";
interface HeroT {
    id: number
}
// @ 修饰符得放在 interface 的下面
@Component({
    selector: 'app-form-input',
    templateUrl: './form-input.component.html',
    styleUrls: ['./form-input.component.css'],
    animations: [
        trigger('heroState', [
            state('inactive', style({
                backgroundColor: '#eee',
                transform: 'scale(1)'
            })),
            state('active', style({
                backgroundColor: '#cfd8dc',
                transform: 'scale(1.1)'
            })),
            transition('inactive => active', animate('100ms ease-in')),
            transition('active => inactive', animate('100ms ease-out'))
        ])
    ]
})
export class FormInputComponent implements OnInit {
    name = "alasiding";
    redColor: string = "red";
    inputCheckbox = true;
    spanHtml: SafeHtml;
    isShowList: true;
    renderHtml;
    item = { id: 1, name: "王闯" };
    heros = [];
    state = "active";

    @ViewChild(InfoListComponent) // 
    private infoList: InfoListComponent; // 获取子组件
    constructor(private activatedRoute: ActivatedRoute, private userApi: httpServer, private http: HttpClient, private domSanitizer: DomSanitizer, private renderer: Renderer2) {
    }
    ngOnInit() {
        this.spanHtml = this.domSanitizer.bypassSecurityTrustHtml(`<span style='color: red;'>红色${this.inputCheckbox}</span>`);
        // this.renderHtml = this.renderer("<span style='color: green;'>绿色</span>");
        let hero = [];
        for (let i = 0; i < 10; i++) {
            hero.push({
                id: Math.random().toFixed(2)
            })
        }
        this.heros = hero;
        console.log(this.http);
        // let httpserver = new httpServer(this.http);
        // httpserver.show({ observe: 'response' }).subscribe((data) => {
        //     console.log(data)
        // });
        this.userApi.show({ observe: 'response' }).subscribe((data) => {
            console.log(data)
        });

        console.log("路由信息", this.activatedRoute);
    }
    inputChange(e) {
        // e.preventDefault();
        this.inputCheckbox = !this.inputCheckbox;
        this.spanHtml = this.domSanitizer.bypassSecurityTrustHtml(`<span style='color: red;'>红色${this.inputCheckbox}</span>`);

        let hero = [];
        for (let i = 0; i < 10; i++) {
            hero.push({
                id: Math.random()
            })
        }
        this.heros = hero;
    }
    trackByHeroes(index: number, hero: HeroT) {
        // 如果hero.id 相同，不更新
        return hero.id
    }
    onVoted(params) {
        console.log("父组件触发", params)
    }
    directiveEmit() {
        console.log("由指令触发，输出一个父组件的值redColor：", this.redColor);
        console.log(this);
        // 此时的this作用域为子组件
        // 写法为：[clicks]="directiveEmit"
        // 此时的作用域为当前组件,但是会不按规则的触发
        // 写法为 [clicks]="directiveEmit()"

    }
    toggleState() {
        this.state = this.state === 'active' ? 'inactive' : 'active';
    }
    // ngAfterViewInit() {

    // }
    ngOnChanges() {
        // （重新）设置数据绑定输入属性时响应，该方法接受当前和上一属性值的
        console.log("设置");
    }
    ngDoCheck() {
        // 检测，并在发生Angular无法或不愿意自己检测的变化时作出反应。
        // 在每个Angular变更检测周期中调用，ngOnChanges()和ngOnInit()之后。

    }
    ngAfterContentInit() {
        // 当把内容投影进组件后之后调用，
        // 第一次ngDoCheck()之后调用，只调用一次。
        // 只调用一次
        console.log("@ViewChild");
        console.log(this.infoList);
    }
    ngAfterViewInit() {
        // 初始化完组件视图及其子视图之后调用。
        // 第一次ngAfterContentChecked()之后调用，只调用一次。
        // 只适合组件。

    }
    ngAfterViewChecked() {

        // 每次做完组件视图和子视图的变更检测之后调用。

        // ngAfterViewInit()和每次ngAfterContentChecked()之后调用。

        // 只适合组件。
    }
    ngOnDestroy() {
        // 当Angular每次销毁指令/组件之前调用并清扫。 在这儿反订阅可观察对象和分离事件处理器，以防内存泄漏。
        // 在Angular销毁指令/组件之前调用。
    }

}
