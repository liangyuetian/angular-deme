import { Pipe, PipeTransform } from '@angular/core';
// Angular内置了一些管道，比如DatePipe、UpperCasePipe、LowerCasePipe、CurrencyPipe和PercentPipe。 它们全都可以直接用在任何模板中。

@Pipe({
  name: 'newPipe',
  // pure: false, // 设置为非纯管道
})
export class NewPipePipe implements PipeTransform {

  // transform(value: any, args?: any): any {
  //   return null;
  // }
  transform(value: any, args?: any): any {

    return value + "kk";
  }

}
// 在这个管道的定义中体现了几个关键点：

// 管道是一个带有“管道元数据(pipe metadata)”装饰器的类。

// 这个管道类实现了PipeTransform接口的transform方法，该方法接受一个输入值和一些可选参数，并返回转换后的值。

// 当每个输入值被传给transform方法时，还会带上另一个参数，比如我们这个管道中的exponent(放大指数)。

// 我们通过@Pipe装饰器告诉Angular：这是一个管道。该装饰器是从Angular的core库中引入的。

// 这个@Pipe装饰器允许我们定义管道的名字，这个名字会被用在模板表达式中。它必须是一个有效的JavaScript标识符。 比如，我们这个管道的名字是exponentialStrength。

// PipeTransform接口

// transform方法是管道的基本要素。 PipeTransform接口中定义了它，并用它指导各种工具和编译器。 理论上说，它是可选的。Angular不会管它，而是直接查找并执行transform方法。

// 纯(pure)管道与非纯(impure)管道
// 有两类管道：纯的与非纯的。 默认情况下，管道都是纯的。我们以前见到的每个管道都是纯的。 通过把它的pure标志设置为false，我们可以制作一个非纯管道。我们可以像这样让FlyingHeroesPipe变成非纯的：

// 纯管道
// Angular只有在它检测到输入值发生了纯变更时才会执行纯管道。 纯变更是指对原始类型值(String、Number、Boolean、Symbol)的更改， 或者对对象引用(Date、Array、Function、Object)的更改。

// Angular会忽略(复合)对象内部的更改。 如果我们更改了输入日期(Date)中的月份、往一个输入数组(Array)中添加新值或者更新了一个输入对象(Object)的属性，Angular都不会调用纯管道。

