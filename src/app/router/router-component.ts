import { RouterModule, Routes } from '@angular/router';
import { FormInputComponent } from "../form-input/form-input.component";

// import { NavigationStart, RouterEvent } from '@angular/router';




const apRouters: Routes = [
    {
        path: "crisis-center",
        component: FormInputComponent
    },
    {
        path: "heroes/:id",
        component: FormInputComponent,
        data: {
            title: "这是路由传递的参数"
        }
    },
    {
        path: "",
        redirectTo: "/heroes",
        pathMatch: "full",
    },
    {
        path: "**", // 404 - Not Found
        component: FormInputComponent,
    }
]
export default apRouters
// @NgModule({
//     imports: [
//       RouterModule.forRoot(
//         appRoutes,
//         { enableTracing: true } // <-- debugging purposes only
//       )
//       // other imports here
//     ],
//     ...
//   })
//   export class AppModule { }

// 每个Route都会把一个URL的path映射到一个组件。 
// 注意，path不能以斜杠（/）开头。 路由器会为解析和构建最终的URL，这样当我们在应用的多个视图之间导航时，可以任意使用相对路径和绝对路径

// 第二个路由中的:id是一个路由参数的令牌(Token)。比如/hero/42这个URL中，“42”就是id参数的值。 此URL对应的HeroDetailComponent组件将据此查找和展现id为42的英雄。 在本章中稍后的部分，我们将会学习关于路由参数的更多知识。

// 第三个路由中的data属性用来存放于每个具体路由有关的任意信息。该数据可以被任何一个激活路由访问，并能用来保存诸如 页标题、面包屑以及其它静态只读数据。本章稍后的部分，我们将使用resolve守卫来获取动态数据。

// 第四个路由中的空路径（''）表示应用的默认路径，当URL为空时就会访问那里，因此它通常会作为起点。 这个默认路由会重定向到URL /heroes，并显示HeroesListComponent。

// 最后一个路由中的**路径是一个通配符。当所请求的URL不匹配前面定义的路由表中的任何路径时，路由器就会选择此路由。 这个特性可用于显示“404 - Not Found”页，或自动重定向到其它路由。