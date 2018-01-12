import { Directive, ElementRef, Input, HostListener } from '@angular/core';
// ElementRef 获取 dom引用
// HostListener 设置事件监听
// 为什么要加@Input？
// @Input装饰器都告诉Angular，该属性是公共的，并且能被父组件绑定。 如果没有@Input，Angular就会拒绝绑定到该属性。
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

    originalColor: string;
    constructor(private el: ElementRef) {
        // private 有公开作用域的作用
        let style = window.getComputedStyle(this.el.nativeElement);
        this.originalColor = style.backgroundColor;
    }
    // 使用HostListener装饰器添加两个事件处理器，它们会在鼠标进入或离开时进行响应
    @HostListener("mouseenter") onMouseEnter() {
        // @HostListener装饰器引用属性型指令的宿主元素
        console.log(this);
        this.highlight(this.highlightColor || "yellow");
    }
    @HostListener('mouseleave') onMouseLeave() {
        console.log("originalColor", this.originalColor)
        this.highlight(this.highlightColorLeave || this.originalColor);
    }
    @HostListener("click") onClick() {
        console.log("点击属性指令:", this)
    }
    highlight(color: string) {
        this.el.nativeElement.style.backgroundColor = color;
    }

}

// 使用数据绑定向指令传递值
@Directive({
    selector: '[highlightColor]'
})
export class HighlightColor {
    @Input() highlightColor: string;

}