import { Directive, ElementRef, Input, HostListener, TemplateRef, ViewContainerRef } from '@angular/core';
// ElementRef 获取 dom引用
// HostListener 设置事件监听
// 为什么要加@Input？
// @Input装饰器都告诉Angular，该属性是公共的，并且能被父组件绑定。 如果没有@Input，Angular就会拒绝绑定到该属性。
// 属性指令，不建议传递函数，因为this对象不容易绑定，不符合语境与用法
@Directive({
    selector: '[appNewDirective]'
})
export class NewDirectiveDirective {
    // el: ElementRef;
    // constructor(el: ElementRef) {
    //     this.el = el;
    // }
    @Input() highlightColor: string;
    @Input("appNewDirective") highlightColorLeave: string;
    @Input() obj;
    @Input() clicks; //
    originalColor: string;
    constructor(private el: ElementRef) {
        // private 有公开作用域的作用
        let style = window.getComputedStyle(this.el.nativeElement);
        this.originalColor = style.backgroundColor;
    }
    // 使用HostListener装饰器添加两个事件处理器，它们会在鼠标进入或离开时进行响应
    @HostListener("mouseenter") onMouseEnter() {
        // @HostListener装饰器引用属性型指令的宿主元素
        // console.log(this);
        this.highlight(this.highlightColor || "yellow");
        this.obj.id = Math.random(); // @Input 的值是引用类型， 在子指令中修改后，回映射到父组件中
    }
    @HostListener('mouseleave') onMouseLeave() {
        // console.log("originalColor", this.originalColor)
        this.highlight(this.highlightColorLeave || this.originalColor);
    }
    @HostListener("click") onClick() {
        console.log("点击属性指令:", this);
        this.clicks();
    }
    highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}

// 结构型指令
// 结构型指令的职责是HTML布局，他们塑造或重塑DOM结构，比如添加，移除，或维护这些元素
// 结构型指令非常容易识别。 在这个例子中，星号（*）被放在指令的属性名之前
// 三个常用的内置结构型指令 —— NgIf、NgFor和NgSwitch...。

// <ng-container> 的救赎
// 使用<ng-container>把一些兄弟元素归为一组
// <ng-container>是一个由 Angular 解析器负责识别处理的语法元素。 \
// 它不是一个指令、组件、类或接口，更像是 JavaScript 中 if 块中的花括号。
// TemplateRef, ViewContainerRef  需要的组件 Directive, Input

@Directive({ selector: '[appUnless]' })
export class UnlessDirective {
    // 把它们都注入到指令的构造函数中，作为该类的私有属性
    // 强调：类的私有属性
    constructor(
        private templateRef: TemplateRef<any>, // 大概等于 react中的 this.props.children
        private viewContainer: ViewContainerRef
    ) { }
    hasView;
    @Input()
    set appUnless(condition: boolean) {
        if (!condition && !this.hasView) {
            this.viewContainer.createEmbeddedView(this.templateRef);
            this.hasView = true;
        }
        else if (condition && this.hasView) {
            this.viewContainer.clear();
            this.hasView = false;
        }
    }
}