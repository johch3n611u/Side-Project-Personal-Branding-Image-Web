# Angular2+
---------------------------------------
https://wellwind.idv.tw/blog/2016/10/18/angular-tutorial-4-basic-concepts-and-create-components/

## Angular cli 

>習慣取代配置 -> Angular cli 

>TypeScript -> 編譯環境需求 node.js (webpack已含在ng內)

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

> ng lint TypeScript 撰寫風格

> ng test (Unit Testing) jasmine、karma 套件

> ng e2e (end to end) karma、Protractor 套件
---------------------------------------
[ng new]](https://medium.com/angular-%E7%9A%84%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98/angular-3-%E8%AA%8D%E8%AD%98-angular-cli-%E7%94%A2%E7%94%9F%E7%9A%84%E5%B0%88%E6%A1%88%E7%9B%AE%E9%8C%84%E7%B5%90%E6%A7%8B-ba20c77d0029)

* e2e - 測試資料夾
* node_modules - npm套件
* src - 所有撰寫的程式碼會存放的目錄
    * app - 根目錄
    * assets - 放置網站影像和靜態資源檔案
    * environments - 放置環境變數的設定檔
        * favicon.ico - 瀏覽器網址列、書籤、頁籤的小 icon 圖檔。
        * index.html - 網站首頁，也是 SPA 唯一一頁。
        * main.ts - 網頁應用程式主要切入點
        * polyfills.ts - 用於實現瀏覽器並不支援的原生API的程式碼
        * styles.css - 整個網站共用的 CSS 樣式檔。
        * test.ts - 單元測試的主入口點
        * tsconfig.json - 專案預設的 TypeScript 設定。
        * typings.d.ts - ts模組定義檔
    * .editorconfig - 幫助開發者在不同的編輯器和 IDE 之間定義和維護一致的編碼樣式。
    * .gitignore - git版控
    * angular-cli.json - cli設定檔
    * karma.conf.js - karma設定檔
    * package.json - npm 套件版本資訊。 
    * protractor.conf.js - 測試設定檔
    * README.md - 自述文件
    * tslint.json - 專案預設的 TSLint 設定。
