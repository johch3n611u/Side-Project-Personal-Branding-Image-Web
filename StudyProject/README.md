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
##[](https://medium.com/angular-%E7%9A%84%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98/angular-3-%E8%AA%8D%E8%AD%98-angular-cli-%E7%94%A2%E7%94%9F%E7%9A%84%E5%B0%88%E6%A1%88%E7%9B%AE%E9%8C%84%E7%B5%90%E6%A7%8B-ba20c77d0029)

* e2e - 測試資料夾。
* node_modules - npm套件。
* src - 所有撰寫的程式碼會存放的目錄。
    * app - 根目錄。
    * assets - 放置網站影像和靜態資源檔案。
    * environments - 放置環境變數的設定檔。
        * favicon.ico - 瀏覽器網址列、書籤、頁籤的小icon圖檔。
        * index.html - 網站首頁，也是SPA唯一一頁。
        * main.ts - 網頁應用程式主要切入點。
        * polyfills.ts - 用於實現瀏覽器並不支援的原生API的程式碼。
        * styles.css - 整個網站共用的CSS樣式檔。
        * test.ts - 單元測試的主入口點。
        * tsconfig.json - 專案預設的TypeScript設定。
        * typings.d.ts - TypeScript模組定義檔。
    * .editorconfig - 幫助開發者在不同的編輯器和IDE之間定義和維護一致的編碼樣式。
    * .gitignore - git版控。
    * angular-cli.json - cli設定檔。
    * karma.conf.js - karma設定檔。
    * package.json - npm套件版本資訊。 
    * protractor.conf.js - 測試設定檔。
    * README.md - 自述文件。
    * tslint.json - 專案預設的TypeScript風格設定。
---------------------------------------

## 環境建置

#### cmd常用指令 ctrl + ~

> cls 清空終端機

> cd.. 上層資料夾

> Ctrl+C 結束程序 ex : ng serve

#### nvm nodejs 安裝

> 1.nvm for windows https://github.com/coreybutler/nvm-windows

> 2.nvm list available https://www.onejar99.com/nvm-install-for-windows/

> nvm install 版本號

> nvm use 版本號
 
#### Angular 安裝

> npm install -g @angular/cli

Angular CLI: 9.0.7

Node: 12.16.1

OS: win32 x64

 #### 數位簽署坑

 http://limitedcode.blogspot.com/2016/03/powershell-ps1.html

> get-executionpolicy

Restricted：所有PowerShell Script(.ps1) 皆無法執行。(Windows系統預設)

AllSigned：所有PowerShell Script都要經過受信任的發行者簽屬過後才可執行。

RemoteSigned：針對從異地下載下來的PowerShell Script需要經過受信任的發行者簽屬過後才可執行，本機的PowerShell Script可直接執行。

Unrestricted：無限制，所有PowerShell Script皆可執行。

> set-executionpolicy remotesigned

---------------------------------------

## 原理

Angular使用ES6中引進的Module概念，

APP是由數個Component組成，

利用import、export、@decorator，包裝component，

> ES6 decorator語法，使用@#XXXX來從不同的切面對程式進行描述。

Component內屬性綁定selector、template、style。

並藉由 import、export 引入傳遞資料與引入其他Component或Module。

---------------------------------------
@Component

> selector: 用來表示在HTML上的哪個element要套用這個component。

> templateUrl: 用來表示這個component的view存放位置。

> styleUrls: 用來加入專屬於這個component的css檔案位置。

src/app/app.component.ts

![](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/0.JPG)

decorator 裝飾 AppComponent 這個 class

---------------------------------------

src/index.html 網站首頁內並看不到script引入，
而是building時，透過webpack自動幫我們把打包好的程式加入。

![](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/1.JPG)

---------------------------------------
@NgModule 

透過module對複雜的components做分類管理

src/app/app.module.ts 是程式最主要的module

![](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/2.jpg)

import { AppComponent } from './app.component' 引入了component

declarations 宣告了 AppComponent

bootstrap 宣告由AppComponent來啟動

# Sample todolist1

![](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/3.JPG)

> ng g c header

![](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/4.JPG)

header.component.spec.ts是用來寫unit test

> 檔案命名規則遵循 https://angular.io/guide/styleguide

src/app/app.module.ts內cli自動將HeaderComponent寫入declarations

![](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/5.JPG)

header.component.ts

![](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/6.JPG)

OnInit 為控制生命週期的介面其餘的跟 appcomponent 都一樣

header.component.html 內為templateUrl模板，

概念類似ASP.NET MVC的Layout、Partial View或ASP.NET Webform的Master Page。

回到 app.component.html 將 &lt;app-root&gt;&lt;/app-root&gt; 

改為 header.component.ts 的 selector &lt;app-header&gt;&lt;/app-header&gt;