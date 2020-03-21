# Angular2+
---------------------------------------
https://wellwind.idv.tw/blog/2016/10/18/angular-tutorial-4-basic-concepts-and-create-components/

## Angular cli 
---------------------------------------
習慣取代配置 -> Angular cli 
TypeScript -> 編譯環境需求 node.js (webpack已含在ng內)

常用指令 
---------------------------------------
> ng --help

> ng --help [command]

> ng new [專案名稱]
---------------------------------------
> ng generate

> ng g

> Decorator（ES6裝飾器@）

> 元件 : https://angular.io/cli/generate
---------------------------------------
> ng build

> ng build --prod -> 最小化

> ng build -w

> JIT Just-in-Time

> AOT Ahead-of-Time
---------------------------------------
https://ithelp.ithome.com.tw/articles/10195363
|Characteristic|JiT|AoT|
|-|-|-|
|Compilation target|Browser|Server|
|Compilation context|Runtime|Build|
|Bundle size|Huge (~1.2 MB)|Smaller (~400 KB)|
|Execution Performance|-|Better|
|Startup time|-|Shorter|
---------------------------------------
> ng serve
>
> ng lint TypeScript 撰寫風格