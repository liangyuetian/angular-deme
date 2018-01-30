import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormInputComponent } from "../form-input/form-input.component";

const heroesRoutes: Routes = [
    {
        path: "",
        component: FormInputComponent,
    },
    {
        path: "word2",
        component: FormInputComponent,

    },
    {
        path: "word/:id",
        component: FormInputComponent,
        // loadChildren: "app/form-input/form-input.componentcomponent#FormInputComponent",
        // 惰性加载模块的位置是字符串而不是类型。 在本应用中，该字符串同时标记出了模块文件和模块类，两者用#分隔开。
    },

];

// router 声明：declare  即可以存在的参数
// export interface Route {
//     path?: string;
//     pathMatch?: string; // prefix or full
//     matcher?: UrlMatcher;
//     component?: Type<any>;
//     redirectTo?: string;
//     outlet?: string;
//     canActivate?: any[];
//     canActivateChild?: any[];
//     canDeactivate?: any[];
//     canLoad?: any[];
//     data?: Data;
//     resolve?: ResolveData;
//     children?: Routes;
//     loadChildren?: LoadChildren;
//     runGuardsAndResolvers?: RunGuardsAndResolvers;
// }
@NgModule({
    imports: [
        RouterModule.forRoot(
            heroesRoutes,
            // {
            //     // enableTracing: true // debugger
            // }
        )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRouterModule { }
