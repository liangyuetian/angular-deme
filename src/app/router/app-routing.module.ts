import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { FormInputComponent } from "../form-input/form-input.component";

const heroesRoutes: Routes = [
    {
        path: "word2",
        component: FormInputComponent
    },
    {
        path: "word/:id",
        component: FormInputComponent
    },
    {
        path: "",
        component: FormInputComponent,
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