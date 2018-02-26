import { Pipe, PipeTransform } from '@angular/core';
// Angular内置了一些管道，比如DatePipe、UpperCasePipe、LowerCasePipe、CurrencyPipe和PercentPipe。 它们全都可以直接用在任何模板中。

@Pipe({
    name: 'awesomePipe',
    // pure: false, // 设置为非纯管道
})
export class AwesomePipe implements PipeTransform {

    // transform(value: any, args?: any): any {
    //   return null;
    // }
    transform(value: any, args?: any): any {

        return value + "222";
    }

}
