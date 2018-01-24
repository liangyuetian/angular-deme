# angular-deme
自己学习angular时的示例代码，供自己查阅

```js
delete node_modules
run npm install -g nrm

run nrm use taobao
run npm instll
-----or------
run nrm use cnpm
run npm instll
```
ng build --prod --no-extract-license
# Demo

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


一. angular-cli.json常见配置

  
```
{
  "project": {
    "name": "ng-admin", //项目名称
    "ejected": false // 标记该应用是否已经执行过eject命令把webpack配置释放出来
  },
  "apps": [
    {
      "root": "src", // 源码根目录
      "outDir": "dist", // 编译后的输出目录，默认是dist/
      "assets": [ // 记录资源文件夹，构建时复制到`outDir`指定的目录
        "assets",
        "favicon.ico"
      ],
      "index": "index.html", // 指定首页文件，默认值是"index.html"
      "main": "main.ts", // 指定应用的入门文件
      "polyfills": "polyfills.ts", // 指定polyfill文件
      "test": "test.ts", // 指定测试入口文件
      "tsconfig": "tsconfig.app.json", // 指定tsconfig文件
      "testTsconfig": "tsconfig.spec.json", // 指定TypeScript单测脚本的tsconfig文件
      "tsconfig":"tsconfig.app.json",
      "prefix": "app", // 使用`ng generate`命令时，自动为selector元数据的值添加的前缀名
      "deployUrl": "//cdn.com.cn", // 指定站点的部署地址，该值最终会赋给webpack的output.publicPath，常用于CDN部署
      "styles": [ // 引入全局样式，构建时会打包进来，常用于第三方库引入的样式
        "styles.css"
      ],
      "scripts": [ // 引入全局脚本，构建时会打包进来，常用语第三方库引入的脚本
      ],
      "environmentSource": "environments/environment.ts", // 基础环境配置
      "environments": { // 子环境配置文件
        "dev": "environments/environment.ts",
        "prod": "environments/environment.prod.ts"
      }
    }
  ],
  "e2e": {
    "protractor": {
      "config": "./protractor.conf.js"
    }
  },
  "lint": [
    {
      "project": "src/tsconfig.app.json"
    },
    {
      "project": "src/tsconfig.spec.json"
    },
    {
      "project": "e2e/tsconfig.e2e.json"
    }
  ],
  "test": {
    "karma": {
      "config": "./karma.conf.js"
    }
  },
  "defaults": { // 执行`ng generate`命令时的一些默认值
    "styleExt": "scss", // 默认生成的样式文件后缀名
    "component": {
      "flat": false, // 生成组件时是否新建文件夹包装组件文件，默认为false（即新建文件夹）
      "spec": true, // 是否生成spec文件，默认为true
      "inlineStyle": false, // 新建时是否使用内联样式，默认为false
      "inlineTemplate": false, // 新建时是否使用内联模板，默认为false
      "viewEncapsulation": "Emulated", // 指定生成的组件的元数据viewEncapsulation的默认值
      "changeDetection": "OnPush", // 指定生成的组件的元数据changeDetection的默认值
    }
  }
}

```