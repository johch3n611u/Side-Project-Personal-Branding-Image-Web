# Angular2+

<https://wellwind.idv.tw/blog/2016/10/18/angular-tutorial-4-basic-concepts-and-create-components/>

<https://forum.angular.tw/>

* [Sample1](#1) 基本 + [Router](#4)
* [Sample2](#2) Service 架構 + Pipe + Http + Directive
* [Sample3](#3) 包裝 todolist2 為 NgModule 架構

## Angular cli

> 習慣取代配置 -> Angular cli
>
> TypeScript -> 編譯環境需求 node.js ( webpack 已含在 ng 內)

### 常用指令

> ng --help
>
> ng --help [command] -> 詳細查詢
>
> ng new [專案名稱]

#### 裝飾器生成

> ng generate
>
> ng g

Decorator（ ES6 裝飾器@）

[元件列表 : https://angular.io/cli/generate](https://angular.io/cli/generate)

### 編譯

> ng build
>
> ng build --prod -> 最小化
>
> ng build --watch

#### 編譯方式

> JIT -> Just-in-Time
>
> AOT -> Ahead-of-Time

<https://ithelp.ithome.com.tw/articles/10195363>

| Characteristic        | JiT            | AoT               |
| --------------------- | -------------- | ----------------- |
| Compilation target    | Browser        | Server            |
| Compilation context   | Runtime        | Build             |
| Bundle size           | Huge (~1.2 MB) | Smaller (~400 KB) |
| Execution Performance | -              | Better            |
| Startup time          | -              | Shorter           |
---------------------------------------
> ng serve -> 預覽
>
> ng lint -> TypeScript 撰寫風格
>
> ng test -> (Unit Testing) jasmine、karma 套件
>
> ng e2e -> (end to end) karma、Protractor 套件
---------------------------------------
[參考-[Angular #3]認識 Angular CLI 產生的專案目錄結構 EllaYang](https://medium.com/angular-%E7%9A%84%E5%AD%B8%E7%BF%92%E7%AD%86%E8%A8%98/angular-3-%E8%AA%8D%E8%AD%98-angular-cli-%E7%94%A2%E7%94%9F%E7%9A%84%E5%B0%88%E6%A1%88%E7%9B%AE%E9%8C%84%E7%B5%90%E6%A7%8B-ba20c77d0029)

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

### cmd 常用指令 ctrl + ~

> cls -> 清空終端機
>
> cd.. -> 上層資料夾
>
> Ctrl + C -> 結束程序 ex : ng serve

### VSCode 環境建置

<https://blog.goodjack.tw/2018/03/visual-studio-code-extensions.html>

>Ctrl + , -> setting.json
>
>Ctrl + Shift + V -> Markdown 預覽

#### nvm nodejs 安裝

> 1.nvm for windows <https://github.com/coreybutler/nvm-windows>
>
> 2.nvm list available <https://www.onejar99.com/nvm-install-for-windows>
>
> nvm install 版本號
>
> nvm use 版本號

#### Angular 安裝

> npm install -g @angular/cli

Angular CLI: 9.0.7

Node: 12.16.1

OS: win32 x64

#### 數位簽署坑

 <http://limitedcode.blogspot.com/2016/03/powershell-ps1.html>

> get-executionpolicy -> 查詢

Restricted：所有 PowerShell Script(.ps1) 皆無法執行。( Windows 系統預設)

AllSigned：所有 PowerShell Script 都要經過受信任的發行者簽屬過後才可執行。

RemoteSigned：針對從異地下載下來的 PowerShell Script 需要經過受信任的發行者簽屬過後才可執行，本機的 PowerShell Script 可直接執行。

Unrestricted：無限制，所有 PowerShell Script 皆可執行。

> set-executionpolicy remotesigned -> 執行

---------------------------------------

## 核心原理

Angular 使用 ES6 中引進的 Module 概念，

APP 是由數個 Component 組成，

利用 import、export、@decorator ，包裝 component，

> ES6 decorator語法，使用@#XXXX來從不同的切面對程式進行描述。

Component內屬性綁定selector、template、style。

並藉由 import、export 引入傳遞資料與引入其他 Component 或 Module 。

### Component 元件化

#### @Component

> selector: 用來表示在 HTML 上的哪個 element 要套用這個 component 。
>
> templateUrl: 用來表示這個 component 的 view 存放位置。
>
> styleUrls: 用來加入專屬於這個 component 的 css 檔案位置。

src/app/app.component.ts

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/0.JPG)

decorator 裝飾 AppComponent 這個 class

---------------------------------------

>src/index.html 網站首頁內並看不到 script 引入，
>
>而是 building 時，透過 webpack 自動幫我們把打包好的程式加入。

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/1.JPG)

---------------------------------------

#### @NgModule

透過 module 對複雜的 components 做分類管理

src/app/app.module.ts 是程式最主要的 module

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/2.jpg)

import { AppComponent } from './app.component' 引入了 component

declarations 宣告了 AppComponent

bootstrap 宣告由 AppComponent 來啟動

## Sample todolist1 基本 <a id='1' href='#'>Back to Top</a>

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/3.JPG)

---------------------------------------

> ng g c header

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/4.jpg)

header.component.spec.ts 是用來寫unit test

> 檔案命名規則遵循 <https://angular.io/guide/styleguide>

src/app/app.module.ts 內 cli 自動將 HeaderComponent 寫入 declarations

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/5.JPG)

---------------------------------------

header.component.ts

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/6.JPG)

> constructor（建構子）是個隨著 class 一同建立並初始化物件的特殊方法。
>
> OnInit 為控制生命週期的介面，其餘的跟 appcomponent 都一樣。

---------------------------------------

header.component.html 內為 templateUrl 模板，

> 概念類似ASP.NET MVC的Layout、Partial View或ASP.NET Webform的Master Page。

回到 app.component.html 增加，

header.component.ts 內寫的 selector &lt;app-header&gt;&lt;/app-header&gt;

其餘 Components 一樣

> ng g c add-form
>
> ng g c todo-items

接著分別修改各自元件內的 templateUrl view 的部分

> ng serve 即可看到 app 內容

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/7.JPG)

## Data Binding 資料綁定

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/8.jpg)

### 內崁binding (Interpolation)

(one way binding) 資料傳遞方向 Component -> DOM

> Component -> export class { 變數 或 函式  }
>
> templateUrl View DOM Content -> {{ 變數名稱 或 函式 }}

內崁binding除了可以崁入變數外，也可以加入一些運算式或component的函數回傳值

### 屬性binding (property binding)

(one way binding) 資料傳遞方向 Component -> DOM

> &lt;tag [Attributes]='variable' &gt;
>
> 屬性binding是由內崁binding衍生出來的一種簡易樣板

### 事件binding (event binding)

資料傳遞方向 DOM -> Component (one way binding)

> (event)="函式(參數)"
>
> $event : 事件 TypeScript 強行別事件

### 雙向binding (two way binding)

> 如果今天我們有一個文字方塊要能夠接收component的資料，
> 並且在資料變更時也能同步讓component知道，該怎麼辦呢？
> 我們可能會寫成這樣 :

* add-form.component.html

```html
<input type="text" [value]="todoText" (input)="changeTodoText($event)" [placeholder]="placeholderText">
<button (click)="addTodo($event)">增加</button>
```

* add-form.component.ts

```TypeScript
export class AddFormComponent implements OnInit {

  placeholderText = '請輸入代辦事項';
  todoText = '';

  constructor() { }

  ngOnInit() {
  }

  addTodo($event: MouseEvent) {
    console.log('輸入的文字為 : ' + this.todoText);
  }

  changeTodoText($event: KeyboardEvent) {
    this.todoText = ($event.target as HTMLInputElement).value;
  }
}
```

> 利用雙向綁定 [(ngModel)]="變數" : 似乎只能綁定變數 ?

* add-form.component.html

```HTML
<input type="text" [(ngmodel)]="todoText" [placeholder]="placeholderText">
<button (click)="addTodo($event)">增加</button>
```

就可以將 Add-Form.Component : changeTodoText($event: KeyboardEvent) 部分移除

> tip : Can't bind to 'ngModel' since it isn't a known property of 'input'
>
> cli 部分有使用到的 Module 並沒有引入，導致 ngModel 無法使用於 input ，需要 import formsModule 。
>
> <https://stackoverflow.com/questions/38892771/cant-bind-to-ngmodel-since-it-isnt-a-known-property-of-input>

## 番外篇 : VSCode - Debug

> Key Word : Angular Debug

不像 Visual Studio IDE 各項東西都整合好，

VSCode Debug 主要有兩種方式的樣子，一種是藉由瀏覽器所提供的開發工具或Chrome套件，

第二種是利用 VSCode 本身除錯工具，輔以瀏覽器延伸套件如 Debugger for Chrome，

現在測試是可以使用但未來可能還是有變數，就需要利用 Key Word 屆時再加以排解。

## @Input, @output, ngFor, ngIf

### 資料準備 TodoItem interface

> ng g interface shared\todo-item

 原話 : interface 屬於 TypeScript 的語法，目的是用來賦予沒有強型別的 JavsScript 物件一個型別，如此一來在將 TypeScript 編譯成 JavaScript 時，就可以用來檢查我們傳入的物件是否有正確的屬性名稱；同時 IDE 如果支援的話，還可以藉此享受到 autocomplete 和即時檢查型別是否正確等等的方便功能

> src/app/app.component.ts -> import { TodoItem } from './shared/todo-item';

原話 : 接著 AppComponent 這個 class 裡面我們先加入幾個 TodoItems (不太確認原作為何會把資料做在這裡，感覺不太符合架構。)

### 使用@Input接收傳入Component的資料

原話 : 根據我們之前的規劃，顯示 TodoItem 資料應該是在 TodoItemsComponent，但為了管理方便我們目前的資料都放在 AppComponent 中

> app/app.component.html    將資料由 AppComponent -> TodoItemsComponent

原來 : &lt;app-todo-items&gt;&lt;/app-todo-items&gt;

> 傳遞資料 : &lt;app-todo-items [items]="todoItems"&gt;&lt;/app-todo-items&gt; 屬性綁定 由後向前傳遞資料

此時會報錯不用慌那是因為沒有用 @input 裝飾器接收資料，

接著進入 src/app/todo-items/todo-items.component.ts 接收資料，

import { TodoItem } from './../shared/todo-item'; 補上以便使用 interface 宣告變數型別，

TodoItemsComponent class 補上 @Input() items: TodoItem[]; 即可接收資料。

> @Input('items') theTodoItems: TodoItem[];
>
> 代表我們要接收的屬性依然是items，但是會傳給theTodoItems這個變數。

### 使用ngFor來列舉資料 / 使用ngIf來顯示/隱藏資料 (樣板語言?)

讓TodoItemsComponent能正確顯示傳進來的資料 -> src/app/todo-items/todo-items.component.html

> 必須先藉由 *ngFor 的 let item of items 類似於 python 的 each of 遍歷整個群組
>
> 然後由於 for 在 JavaScript 中屬於保留字，因此這邊必須使用 htmlFor 的方式來取代，也可以使用 attr.for 的方式，來代表使用 attributes 中的 for 。
>
> 屬性內容部分用字串 chk_ 與變數組成原 HTML 內 label 的 for 屬性
>
> 然後 *ngIf="" 會根據歷整到的變數 true 或 false 判斷此 tag 是否要顯示

* todo-items.component.html

```HTML
<ul>
  <li *ngFor="let item of items">
    <label htmlFor="chk_{{item.id}}">
      <input id="chk_{{item.id}}" type="checkbox" [checked]="item.done"> {{ item.value }}
    </label>
    |
    <a href="#">刪除</a>
    <span *ngIf="item.done"> (已完成) </span>
    </li>
</ul>
```

這邊可以看到，雖然編譯過為 HTML 後 Angular 有寫非常詳盡的註解，但整個感覺很肥大不知道為什麼，甚至比 Razor 或 TagHelpers ，差別大概只在前端編譯或後端編譯了... 就要看如果是正式 build 會不會簡化到最原始。

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/9.jpg)

### 使用@Output讓元件間的事件進行傳遞

在 App.Component 中寫好要加入 TodoItem 的函數，

* app.component.ts

```JavaScript
addTodo(text) {
  this.todoItems.push({
    id: (new Date()).getTime(),
    value: text,
    done: false
  });
}
```

push() 方法會添加一個或多個元素至陣列的末端，並且回傳陣列的新長度。

接著把 app.component.html 中的 &lt;app-add-form>&lt;/app-add-form>

改為 &lt;app-add-form (addtodoitem)="addTodo($event)">&lt;/app-add-form> 事件綁定 由前向後傳遞資料

* 但 addtodoitem 這個事件是從哪裡而來的呢?

> src\app\add-form\add-form.component.ts
>
> import { Component, OnInit, Output, EventEmitter } from '@angular/core';
>
> class @Output() addTodoItem = new EventEmitter();

新增 addTodoItem 事件，利用 @Output() 往外丟

* add-form.component.ts

```JavaScript
addTodo($event: MouseEvent) {
  this.addTodoItem.emit(this.todoText);
}
```

EventEmitter 实例对象的 emit 方法，用来触发事件。它的第一个参数是事件名称，其余参数都会依次传入回调函数。

<https://javascript.ruanyifeng.com/nodejs/events.html#toc3>

* app.component.html

```HTML
<app-add-form (addTodoItem)="addTodo($event)"></app-add-form>
```

参数都会依次传入回调函数 -> 將 this.todoText 當做 $event 傳遞至 App.Component 內的 addTodo(text)

### 挑戰 : 原作並無範例實作 [勾選/取消勾選]和[刪除]功能

但看不懂 [勾選/取消勾選] 如不藉由後端該怎時做，所以嘗試看看實作刪除功能。

思路 : 一樣的要利用 @Ouput 觸發刪除事件，且要將 id 參數向刪除事件傳遞。

結果 : 其實只要將 id 傳至 todo-item.component 即可對陣列作相對應刪除，

但我對於原始 js 與 ts 太不熟了，像是 eachof 或是以下方式都不太了解，

卡在最後一步，因為splice只能針對陣列位置做刪除，

但因為是 for of 的方式，不知道如何取陣列位置，導致非常難以刪除 ...

```TypeScript
delTodo(delId: number) {
    if (confirm(delId + '確定刪除?')) {
      for (const chkDelitems of this.items) {
        if (chkDelitems.id === delId) {
          console.log('delId:' + delId);
          console.log('this.items:' + this.items);
          console.log('chkDelitems.id:' + chkDelitems.id);
          console.log('chkDelitems:' + chkDelitems);
          this.items.splice(0, 1);
        }
      }
    }
  }
```

結果最後隨便用 tsline 不推薦的方式就成功了 ...

```JavaScript
for (var i = 0; i < this.items.length; i++) {
        if (delId == this.items[i].id) {
          this.items.splice(i, 1);
        }
```

## 每個Component各自CSS獨立

內容蠻簡單的在介紹 styleUrls: ['./todo-items.component.css'] 就不再贅述。

補充前幾天看的 SASS :

[Sass/SCSS 簡明入門教學Sass/SCSS 簡明入門教學](https://blog.techbridge.cc/2017/06/30/sass-scss-tutorial-introduction/)

[30天掌握Sass語法 系列](https://ithelp.ithome.com.tw/users/20040221/ironman/562)

[一起來用Sass+Compass吧](https://blog.hellosanta.com.tw/%E7%B6%B2%E7%AB%99%E8%A8%AD%E8%A8%88/%E5%89%8D%E7%AB%AF/%E4%B8%80%E8%B5%B7%E4%BE%86%E7%94%A8sasscompass%E5%90%A7%EF%BC%8C%E6%88%91%E5%80%91%E5%8F%AF%E6%98%AF%E4%B8%80%E7%A7%92%E5%B9%BE%E5%8D%83%E8%90%AC%E4%B8%8A%E4%B8%8B%E7%9A%84%E5%89%8D%E7%AB%AF%E5%B7%A5%E7%A8%8B%E5%B8%AB%EF%BC%8C%E6%80%8E%E9%BA%BC%E8%83%BD%E6%8A%8A%E6%99%82%E9%96%93%E6%B5%AA%E8%B2%BB%E5%9C%A8css%E8%BA%AB%E4%B8%8A%E5%91%A2%EF%BC%81)

心得 : 感覺 CSS 在向程式學習 ， 前端再向後端學習 ， 而後端在向 DevOps 學習 ...

## Global引入資源庫 (CSS,JS,Library...)

要使用 global CSS，只需要把 CSS 加入 src/style.css 就可以了

建立新專案時，都會有一個 angular-cli.json 檔案這裡面存放著 Angular CLI 執行指令時需要的設定檔

```C
"styles": [
  "styles.css"
],
"scripts": [],
```

```C
npm install --save jquery
npm install --save bootstrap
```

```C
"styles": [
  "../node_modules/bootstrap/dist/css/bootstrap.css",
  "styles.css"
],
"scripts": [
  "../node_modules/jquery/dist/jquery.js",
  "../node_modules/bootstrap/dist/js/bootstrap.js"
],
```

## 使用NgClass動態為HTML element加入class

 ngClass後面可以接三種類型的參數 字串、陣列、物件

前兩者藉由屬性綁定函式可依條件連動

```HTML
<div>
  <span [ngclass]="getBlueClass()"> TodoItemsComponent 中測試 blue class </span>
</div>
```

```JavaScript
getBlueClass() {
    // 這裡可以用程式動態決定要回傳字串、陣列或物件
    return 'blue';
}
```

第三種可以依照 View 上的條件決定是否要加入某個 class

[ngClass]="{'classA': true, 'classB': false}"

```CSS
.done {
    text-decoration: line-through;
}
```

```HTML
<input id="chk_{{item.id}}" type="checkbox" [checked]="item.done" (click)="itemClick(item)">
<span [ngclass]="{'done' : item.done}">{{ item.value }}</span>
```

```JavaScript
itemChk($event: MouseEvent) {
    var repID = Number((($event.target as HTMLInputElement).id).replace('chk_', ''));
    console.log(repID);
    for (var i = 0; i < this.items.length; i++) {
      if (repID == this.items[i].id) {
        this.items[i].done = ($event.target as HTMLInputElement).checked;
      }
    }
  }
```

## NgFor的五個變數

index：整數值；代表目前資料在陣列中的index

first：布林值；代表目前資料是否為第一筆

last：布林值；代表目前資料是否為最後一筆

even：布林值；代表目前資料的index是否為第偶數筆

odd：布林值；代表目前資料的index是否為第奇數筆

* 使用方式

> *ngFor="let item of items;let recordIndex = index;let firstRecord = first;let lastRecotd = last; let evenRecord = even; let oddRecord = odd

```HTML
<ul>
  <li *ngFor="let item of items;let recordIndex = index;let firstRecord = first;let lastRecotd = last; let evenRecord = even; let oddRecord = odd">
    <label htmlFor="chk_{{item.id}}">
      <input id="chk_{{item.id}}" type="checkbox" [checked]="item.done" (click)="itemClick(item)">
      <span [ngClass]="{'done' : item.done, 'text-danger': firstRecord, 'text-warning': lastRecotd, 'bg-info': evenRecord, 'bg-success': oddRecord}">
        {{ recordIndex }} . {{ item.value }}
      </span>
    </label>
    |
    <a href="#" (click)="delete(item)">刪除</a>
    <span *ngIf="item.done">(已完成)</span>
    </li>
</ul>
```

## Sample todolist2 Service 架構 + Pipe + Http + Directive <a id='2' href='#'>Back to Top</a>

## 使用 Service 完成 MVC 架構的最後一塊拼圖

文章中將 模板語言部分比喻為 MVC 中的 View ， Component 比喻為 Controller ， Service 比喻為 Model 。

但總覺得怪怪的，Angular 似乎不像 ASP.NET MVC 那樣拆得那麼乾淨。

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/10.jpg)

文章中原始的相依關係 ， 但我有點搞不懂 為何 delete item 的部分 為何需要 output 至 AppComponent ，

所以我自己寫的部分是在 itemsComponent 內直接完成。

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/11.jpg)

文章中希望藉由 Service 將架構改為如上圖 ，並將 @input @output 改為 Component 需要對外接口時使用，以下將用 todolist2 demo 。

> ng g s todo-list

* src/app/todo-list.service.ts

### Service 原理

```JavaScript
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

  constructor() { }

}
```

@Injectable() 裝飾器 藉由 DI 方式注入讓 Component 使用，鬆綁程式之間的耦合性，

原作這講解的並不深較多的是直接實作，不過大概跟 .NET Core 原理應該差不多，

生成時會出現此註解，但我使用時沒出現不知道是不是 cli 版本問題，

> WARNING Service is generated but not provided, it must be provided to be used

Service已經產生了，但還沒準備好可以提供給任何其他程式進行注入

必須在 @NgModule 內 providers 加入此 Service ，

> Provider Pattern 提供者模式 : 为一个API进行定义和实现的分离。
>
> <https://www.cnblogs.com/rush/archive/2011/08/28/2156312.html>
>
> <https://blog.csdn.net/zty20100606/article/details/78847390>

* src/app/app.module.ts

```JavaScript
// 先import我們的TodoListService
import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AddFormComponent,
    TodoItemsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoListService], // 在providers中加入TodoListService
  bootstrap: [AppComponent]
})
export class AppModule { }
```

接著將需要抽出的資料與函式補進 Service

藉這個機會來觀察一下原作者怎寫的，補註解。

* src/app/todo-list.service.ts

```JavaScript
// interface 定義 todoitem 型別
import { TodoItem } from './shared/todo-item';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

// 假資料
  todoItems: TodoItem[] = [{
    id: 1,
    value: 'Todo Item No.1',
    done: false
  }, {
    id: 2,
    value: 'Todo Item No.2',
    done: true
  }, {
    id: 3,
    value: 'Todo Item No.3',
    done: false
  }];

  constructor() { }

// 用於內嵌綁定或屬性綁定
  getTodoList() {
    return this.todoItems;
  }

// 用於事件傳遞 ?
  addTodo(text) {
    this.todoItems.push({
      id: (new Date()).getTime(),
      value: text,
      done: false
    });
  }

// 用於事件傳遞 ? filter 方法，寫法比我用 for 迴圈 splice 刪除高明好多!!!
// filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。
// https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
  deleteItem(item: TodoItem) {
    this.todoItems = this.todoItems.filter(todoItem => todoItem.id !== item.id);
  }

// toggle 好像打錯字 ?  toggle翻譯：扣件, 套索扣，栓扣釘, 電腦開關, 切換鍵
// 這寫法也很高明，直接指定相反的內容回原內容。
// 看來有時間必須把 w3c 的 JavaScript 看過一輪，就訂在 Angular 與 .Net Core SideProject 完成後。
  toogleItemStatus(item: TodoItem) {
    item.done = !item.done;
  }
}
```

> 關於在AppModule中加入TodoListService的小提示：Angular加入到Module後，所有相關的Component都可以進行注入Service的動作，
> 而在Module中的Service都只會被產生一次，以免重複產生造成不必要的效能負擔，也能確保Service中的資料狀態一致性。

### 接著重頭戲來了在 Component 中注入 Service

在Angular/TypeScript中使用的注入方式為建構式注入

* src/app/todo-items/todo-items.component.ts

```JavaScript
import { TodoListService } from './../todo-list.service';

export class TodoItemsComponent implements OnInit {

  // constructor 建構子 : 原理跟後端物件導向 class 內的建構子應該是相同的。
  // 在初始化時執行注入動作，之後都可透過 this.todoListService 取用。
  // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Classes/constructor
  constructor(private todoListService: TodoListService) { }
}
```

### 在 Component 中使用 Service 把不必要的 @Input、@Output 都拿掉

* todo-items.component.ts

```JavaScript
import { TodoListService } from './../todo-list.service';
import { TodoItem } from './../shared/todo-item';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todo-items',
  templateUrl: './todo-items.component.html',
  styleUrls: ['./todo-items.component.css']
})
export class TodoItemsComponent implements OnInit {
  constructor(private todoListService: TodoListService) { }

  ngOnInit() {
  }

  getTodoList() {
    return this.todoListService.getTodoList();
  }

  itemClick(item: TodoItem) {
    this.todoListService.toogleItemStatus(item);
  }

  delete(item: TodoItem) {
    this.todoListService.deleteItem(item);
  }
}
```

感覺像是商業邏輯、資料都寫在 Service 內， Component 只是去操作他，並在包裝成方法供 View 使用，改寫部分 View 的資料綁定方式。

* src/app/app.component.html

```HTML
<div class="wrap">
    <app-header></app-header>
    <app-add-form></app-add-form>
    <app-todo-items></app-todo-items>
</div>
```

* src/app/todo-items/todo-items.component.html

```JavaScript
```

* src/app/todo-items/add-form.component.html

```JavaScript
```

> 原文 : 透過Service我們可以把Component之間的行為進行集中的管理，但有些時候我們設計的Component還是需要透過@Input與@Output來與外部Component連接的，例如團隊開發時有共享的Component，但在一些參數的設定上有所不同時，就是@Input與@Output發威了時候啦！共享的Component不開放給外部的部分可透過內部的Service管理，剩下要由外部Component接手的部分則加入@Input及@Output，由別人去擔心，再次達到關注點分離！這樣的架構是不是明確又美麗阿！！

## 開發Ajax程式不可或缺的重要關鍵 — Http Module

透過Ajax與後端的API進行資料的存取

### 開始使用 HttpModule

最基本的 request 方法外，我們也可以使用 get、post、delete、put 等方法來傳送常見的 Http 方法   -> Restful API

> 要使用 Http 類別我們一樣需要使用建構式注入的方式

* AppModule(src/app/app.module.ts)

```JavaScript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { HttpModule } from '@angular/http';
// Angulare官方第五版開始，將舊的 HttpModule被標示為不建議使用，建議改用 HttpClient
// https://dotblogs.com.tw/H20/2018/04/18/143926

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TodoItemsComponent } from './todo-items/todo-items.component';
import { AddFormComponent } from './add-form/add-form.component';

import { TodoListService } from './todo-list.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TodoItemsComponent,
    AddFormComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [TodoListService],
  bootstrap: [AppComponent]
})

export class AppModule { }
```

### 在assets目錄模擬後端程式

在 src/assets 中加入一個 todo-list.json 的程式，來模擬後端取得TodoList的資料

預設會將 src/assets 目錄裡的內容都當作靜態內容，將裡面的程式都移到輸出路徑的 /assets 裡面

> Like -> D:\Desk\Side-Project-Self-Brand-Image-Web\StudyProject\todolist2\dist\todolist2\assets

### 在 Service 中注入並使用 Http

之前建立的TodoListService中加入使用Http從後端抓取資料的程式

* src/app/todo-list.service.ts

```JavaScript
import { Http } from '@angular/http'; // 我們要使用的Http
import 'rxjs/add/operator/toPromise'; // 幫助我們將RxJs轉為Promise

@Injectable()
export class TodoListService {

  // 原來的資料移到assets/todo-list.json裡面去了
  todoItems: TodoItem[];

  // 建構式注入Http，你應該已經會用了
  constructor(private http: Http) { }

  // 使用http.get取得後端資料
  // http.get會回傳 RxJS 的 Observable 物件
  // 我們先用.toPromise()轉回我們會使用的ES6 Prmoise
  // 並利用toPromise()轉成ES6的Promise

  loadTodoList() {
    this.http
      .get('/assets/todo-list.json')
      .toPromise()
      .then(response => {
        this.todoItems = response.json();
      });
  }
  // 接著是之前已經完成的程式碼...省略
}
```

## 番外篇 - 非同步(Asynchronous)與同步(Synchronous)

以往都知道這個概念，但實際操作較少，這邊在記錄一次。

Elsa Wang

<https://medium.com/@hyWang/%E9%9D%9E%E5%90%8C%E6%AD%A5-asynchronous-%E8%88%87%E5%90%8C%E6%AD%A5-synchronous-%E7%9A%84%E5%B7%AE%E7%95%B0-c7f99b9a298a>

>我：特性只是指同時做很多事嗎? (X)
>
>W：async = 發出要求～收到結果 這中間我可以去做其他事情
>
>W：你填好單子送到櫃檯，然後……
>
>W：他辦完再叫你的號碼 → Async
>
>W：要站在櫃檯等他辦完 → Sync
>
>W：因為不用站在櫃檯等，你就可以跑很多櫃檯、送很多張單子出去, 就有上面說的「圍毆」的效果。
>
>W：所以 sync / async 是在說單一櫃檯辦事員的運作模式。
>
>W：然後……
>
>W：在對方是 async 的前提下，有些事情還是要依序辦理，例如：先去開好戶頭，才把戶頭交給公司行政。
>
>W：那你腦內就要有個清單：
>
>W：等薪資戶開好，然後再去跟公司行政帳號。
>
>W：這個然後就是 promise 的 then
>
>W：再歸納一次：
>
>W：- sync/async 是指單一個要求or操作的運作方式。
>
>（你需不需要卡住等他做完）
>
>W：- promise 則是用來描述多個操作之間關係的方法。
>
>（可以應付 async，但也可以是 sync）

* Promise : 物件代表一個即將完成、或失敗的非同步操作，以及它所產生的值。

<https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Promise>

Promise 物件處於以下幾種狀態：

* 擱置（pending）：初始狀態，不是 fulfilled 與 rejected。
* 實現（fulfilled）：表示操作成功地完成。
* 拒絕（rejected）：表示操作失敗了。

* RxJS : 是一個用於使用Observables進行反應式編程的庫，可以更輕鬆地編寫異步或基於回調的代碼。

RxJS是Reactive Programming 的 JavaScript 實做，Reactive Programming 是另一種管理資料流的概念。

希望是最淺顯易懂的 RxJS 教學 TechBridge 技術共筆部落格

<https://blog.techbridge.cc/2017/12/08/rxjs/>

---------------------------------------

http.get() 會回傳一個 RxJS 的 Observable 物件，

> 加入 import 'rxjs/add/operator/toPromise';

在學習 RxJS 前，為 RxJS 擴充一個 .toPromise() 方法，把資料轉為的 ES6 的 Promise 語法。

> 感覺 Angular 生命週期非常重要，現在使用 ng serve 都會像 live server 一樣，自動 refresh 也不知道是從新 Render 還是本地操作 ...

### 在 Component 中要求 Service 來取得資料

這部分的程式可以寫在 Component 的 ngOnInit() 方法中，在 Component 初始化時來執行

* src/app/todo-items/todo-items.component.ts

```JavaScript
export class TodoItemsComponent implements OnInit {
  // 建構式注入TodoListService，之前已經做過了
  constructor(private todoListService: TodoListService) { }
  // 在ngOnInit()中，要求TodoListService從後端抓取資料
  ngOnInit() {
    this.todoListService.loadTodoList();
  }
  // 以下是之前已經完成的程式碼...省略
}
```

這裡就提到 Angular 的生命週期了，但原文章這就沒細講，所以先跳到原作者另外的文章先了解 Angular 生命週期 。

## [Angular 大師之路] Day 03 - Angular 應用程式啟動過程

<https://ithelp.ithome.com.tw/articles/10202823>

覺得要知道生命週期方法前，需要先知道應用程式啟動過程，所以先補這篇。

main.ts 所有程式"進入點"，指定根模組

app.module.ts 第一個啟動的"根模組"，指定根元件

app.component.ts 所有的畫面都是從"根元件"開始，綁定 selector、templateUrl、styleUrls

---------------------------------------

同時啟動多個根模組 platformBrowserDynamic().bootstrapModule(App2Module);

同時啟動多個根元件 declarations: [AppComponent, HelloComponent, AnotherComponent],

### 多個根模組或根元件的使用情境

> 原話 :
>
> 當 index.html 中本來就有預期放入一個固定的 layout ，且畫面上會有兩個互不相關的程式時，就可以使用多個根模組或根元件來處理，而不是將整個 layout 放到單一個模組內，能夠更快地顯示出基本的畫面架構，再慢慢等待 JavaScript 檔載入就好，能讓使用者更快感覺到畫面有所呈現。
>
>當然壞處明顯的就是模組跟模組之間、元件跟元件之間是較難互相溝通的

## [Angular 大師之路] Day 04 - 認識 Angular 的生命週期

<https://ithelp.ithome.com.tw/articles/10203203>

* 生命週期鉤子

<https://angular.tw/guide/lifecycle-hooks>

實用於有許多共用元件開發需求或整合第三方套件時

### lifecycle hooks

在 Angular 中對於生命週期的處理是用各種生命週期方法，不太像 .Net Core 的生命週期，感覺較不強制性。

好像是用介面 interface 的強行別方式綁定在 @angular/core 中，在寫程式時避免人為疏失。

### 元件的完整生命週期 (按照可能被呼叫的順序排序)

| 鉤子                    | 用途及時機                                                                                                                                                               |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ngOnChanges()           | 當 Angular（重新）設定資料繫結輸入屬性時響應。 該方法接受當前和上一屬性值的 SimpleChanges 物件，在 ngOnInit() 之前以及所繫結的一個或多個輸入屬性的值發生變化時都會呼叫。 |
| ngOnInit()              | 在 Angular 第一次顯示資料繫結和設定指令/元件的輸入屬性之後，初始化指令/元件。在第一輪 ngOnChanges() 完成之後呼叫，只調用一次。                                           |
| ngDoCheck()             | 檢測，並在發生 Angular 無法或不願意自己檢測的變化時作出反應。在每個變更檢測週期中，緊跟在 ngOnChanges() 和 ngOnInit() 後面呼叫。                                         |
| ngAfterContentInit()    | 當 Angular 把外部內容投影進元件/指令的檢視之後呼叫。第一次 ngDoCheck() 之後呼叫，只調用一次。                                                                            |
| ngAfterContentChecked() | 每當 Angular 完成被投影元件內容的變更檢測之後呼叫。ngAfterContentInit() 和每次 ngDoCheck() 之後呼叫。                                                                    |
| ngAfterViewInit()       | 當 Angular 初始化完元件檢視及其子檢視之後呼叫。第一次 ngAfterContentChecked() 之後呼叫，只調用一次。                                                                     |
| ngAfterViewChecked()    | 每當 Angular 做完元件檢視和子檢視的變更檢測之後呼叫。ngAfterViewInit() 和每次 ngAfterContentChecked() 之後呼叫。                                                         |
| ngOnDestroy()           | 每當 Angular 每次銷毀指令/元件之前呼叫並清掃。 在這兒反訂閱可觀察物件和分離事件處理器，以防記憶體洩漏。在 Angular 銷毀指令/元件之前呼叫。                                |

#### OnChanges

> 當元件有 @Input() 且從外部有透過屬性綁定的方式將資料傳入時，當元件初始化時在 ngOnInit() 前呼叫 ngOnChanges() 方法；
>
> 且每當 @Input() 的值有變化時，都會呼叫此方法，藉此得知資料被改變了，如下程式：

```JavaScript
import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-price',
  template: `<span>{{ price }}</span>`
})
export class PriceComponent implements OnInit, OnChanges {
  @Input() price;

  ngOnInit() {
    console.log('Price Component Init');
  }

  ngOnChanges() {
    console.log('Price Component Input Changed');
  }
}

@Component({
  selector: 'my-app',
  template: `
  <app-price [price]="value"></app-price>
  `
})
export class AppComponent  {
  value = 100;
}
```

> !!! 注意如果沒有 @Input() 時，是不會有 ngOnChanges() 週期的。 !!!

#### SimpleChange 型別

> 是一個 key/value 的型別，key 代表的是每個 @Input() 的欄位名稱，而 value 都是 SimpleChange型別，用來得知以下資訊：

* firstChange：boolean 值，只有在第一次呼叫時為 true，之後都是 false
* previousValue：上次呼叫時的值
* currentValue：這次變更時的值

#### OnInit

> 原話 : 在第一次執行完 ngOnChanges() 後(如果有的話)，就會進入 ngOnInit() 週期，大部分的初始化程式都建議在 ngOnInit() 週期中執行，而非在建構式處理，尤其是比較複雜程式或 ajax 呼叫，建議都在 ngOnInit() 中執行。
>
> 放在建構式中明顯的缺點是：撰寫單元測試時，由於建構式本身對外部程式的依賴太重，容易造成測試程式難以撰寫。

#### DoCheck

> ngDoCheck() 會在 Angular 核心程式執行變更偵測後呼叫，我們可以在這裡面額外撰寫程式來處理變更偵測所無法偵測到的部分。
>
> 參考位置(reference)不改變的狀況下 變更偵測時 Angular 認為 price 這個 @Input 並沒有變更，
>
> 要改變這個結果有兩種方式，一種是複製一個新的物件再改變新物件的內容，並把 price 指派為新的物件，此時因為物件的參考位置修改了，變更偵測就能夠認得；當然每次都建立新物件是有成本的，所以我們也能在 DoCheck 週期中自行判斷

#### AfterContentInit 與 AfterContentChecked

這邊範例用到了 &lt;ng-content>&lt;/ng-content> ，

但是沒印象在哪有看過這個講解部分，有點茫 ...

大略看是模板語言的類似相嵌 Layout 的用法，後續看到再補上吧先繼續 ...

<https://ithelp.ithome.com.tw/articles/10187991>

> 在 DoCheck 週期後，會立刻觸發 AfterContentInit 週期，之後每當有變更偵測發生時，在 DoCheck 後觸發 AfterContentChecked。

使用 &lt;ng-content> 的元件內，我們可以使用 @ContentChild 來取得某個樣板參考變數實體或子元件，若父元件在使用時有加入符合 @ContentChild 設定的條件時，在 AfterContentInit 週期就可以取得其實體，若想取得多個實體，則可以使用 @ContentChildern 來取得一個包含所有實體的 QueryList 如下：

```JavaScript
import { AfterContentChecked, AfterContentInit,  ContentChild, ContentChildren, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-block',
  template: `
  <div class="block">
    <ng-content></ng-content>
  </div>`,
  styles: [
    `.block { border: 1px solid black; }`
  ]
})
export class BlockComponent {
  @ContentChild('button') button;
  @ContentChildren('button') buttons;

  ngOnInit() {
    // 此時還得不到 <ng-content> 裡面的內容
    console.log('OnInit - The Button is', this.button);
    console.log('OnInit - The Buttons are', this.buttons);
  }

  ngAfterContentInit() {
    // 此時才能取得 <ng-content> 裡面的內容
    console.log('AfterContentInit - The Button is', this.button);
    console.log('AfterContentInit - The Buttons are', this.buttons);
  }

  ngAfterContentChecked() {
    // 在 <ng-content> 內變更偵測都完成後觸發
    console.log('AfterContentChecked - The Button is', this.button);
    console.log('AfterContentChecked - The Buttons are', this.buttons);
  }
}

@Component({
  selector: 'my-app',
  template: `
  <button (click)="tab = 1">Tab 1</button>
  <button (click)="tab = 2">Tab 2</button>
  <button (click)="tab = 3">Tab 3</button>
  <app-block *ngIf="tab === 1">
    Tab 1
    <button #button (click)="tab = 2">Next</button>
  </app-block>
  <app-block *ngIf="tab === 2">
    Tab 2
    <button #button (click)="tab = 3">Next</button>
  </app-block>
  <app-block *ngIf="tab === 3">
    Tab 3
    <button #button (click)="tab = 1">Tab 1</button>
    <button #button (click)="tab = 2">Tab 2</button>
  </app-block>
  `
})
export class AppComponent{
  tab = 1;
}
```

#### AfterViewInit 與 AfterViewChecked

> 在 AfterContentInit 觸發後，會觸發 AfterViewInit，之後觸發 AfterViewChecked，而在每次變更偵測後也會觸發 AfterViewChecked。

在開發元件時，我們常常會使用 @ViewChild 取得樣板上的某個子元件宣告，如果想取得樣板上指定的某個子元件的所有宣告，則可以使用 @ViewChildren 取得一個包含所有子元件的 QueryList，這些子原件在其父元件的 OnInit 週期時還不會產生實體，必須在 AfterViewInit 之後，才能正確取得實體，如以下程式：

```JavaScript
import { AfterViewChecked, AfterViewInit, Component, OnInit, Input, ViewChild, ViewChildren, QueryList } from '@angular/core';

@Component({
  selector: 'app-child',
  template: `<div>Child {{ value }}</div>`,

})
export class ChildComponent {
  @Input() value
}

@Component({
  selector: 'my-app',
  template: `
  <button (click)="create()" #button>Create New Child</button>
  <app-child *ngFor="let item of list" [value]="item"></app-child>
  `
})
export class AppComponent implements OnInit, AfterViewInit, AfterViewChecked {
  @ViewChild('button') button;
  @ViewChild(ChildComponent) child;
  @ViewChildren(ChildComponent) children: QueryList<ChildComponent>;

  list = [0];

  ngOnInit() {
    // 在這裡可以使用 @ViewChild 取得某個原生的 DOM
    // 但取不到子元件實體
    console.log('Button in OnInit', this.button);
    console.log('Child in OnInit', this.child);
    console.log('Children in OnInit', this.children);
  }

  ngAfterViewInit() {
    // 在 AfterViewInit 中可以取得子元件實體
    // 使用 @ViewChild 時，永遠只會取到第一個子元件
    console.log('Child in AfterViewInit', this.child);
    console.log('Children in AfterViewInit', this.children);
  }

  ngAfterViewChecked() {
    // 在每次樣板上元件的變更偵測都完成後觸發
    console.log('Child in AfterViewChecked', this.child);
    console.log('Children in AfterViewChecked', this.children);
  }

  create() {
    this.list = [...this.list, this.list.length];
  }

}
```

#### OnDestroy

> OnDestroy 會在元件不需要被使用時，觸發 ngOnDestroy() 方法。

通常用來處理一些清理資料行為，若有些程式是不會在元件消失時被清除的，則需要在這個週期內額外處理，最常見的就是使用 RxJS 且有 subscribe 行為時，可能需要額外處理退訂的動作，以免重複訂閱或產生預期外的行為，如下程式：

```JavaScript
import { Component, OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-timer',
  template: `{{ counter }}`
})
export class TimerComponent implements OnInit {
  counter = 0;

  ngOnInit() {
    interval(1000).subscribe(val => {
      this.counter = val;
      console.log(this.counter);
    })
  }
}

@Component({
  selector: 'my-app',
  template: `
  Timer: <app-timer *ngIf="displayTimer"></app-timer>
  <button (click)="displayTimer = !displayTimer">Toggle Display Timer</button>`
})
export class AppComponent{
  displayTimer = true;
}
```

## 看完文章後的結論

相對於整個架構的生命週期，Angular 更像是各個元件之間的生命週期，

且文章內提到了許多其他模板語言的操控方法與其他 Module 或 RxJS 的內容，

對於我從後端開始的小嫩嫩來說，太多前端知識了 ... 看來還有蠻多地方需要補起來，

而且作者也開發了 Angular 至少兩年才能匯集出這麼多的知識，看來我還有的提升 ...

但至少要先能進入某間公司，不然連兩年都很難撐 ... GoGo 加油

接續看

> [Angular速成班]開發Ajax程式不可或缺的重要關鍵—Http Module

先前版本的 Angular HttpModule 改為現在版本的 HttpClientModule 很多方法都有些差異，

且要配合 Rxjs 或是一些比較深一點的 JavaScript ， 甚至是 TypeScript 適應的不是很好，

但最後還是解決問題成功在當前版本下完成，原作者的內容了。

接續 ...

## [ Angular 速成班] 使用 Pipe 輕鬆改變 view 上的顯示內容(1)- Angular 內建 Pipe

> 程式產生或從後端API撈取的資料未必就是我們希望呈現在畫面上的內容，這時候我們就必須自行撰寫程式來將資料轉換成要呈現的內容。

### 如何使用 Pipe

Pipe寫好後需要在View中直接使用，程式看起來大致會如下

```C++
{{ data | mypipe }}
```

以上的意思是，把data透過mypipe這個Pipe進行轉換

### 為 Pipe 加上參數

Pipe可以在後面加上一些參數，來調整要轉換的方式

```C++
{{ data | mypipe:para1:para2 }}
```

### 使用 Angular 內建的 Pipe

<https://angular.io/api#!?query=pipe>

#### DatePipe

```JavaScript
export class AppComponent {
  today = new Date();
}
```

<https://angular.io/api/common/DatePipe>

#### JsonPipe

> JsonPipe對於我們在前端想要debug物件的資料時很有幫助，雖然大多時間我們都會選擇使用 console.log() 來顯示資料，
> 但在 View 上我們可以透過 JsonPipe 把資料物件直接顯示出來

```JavaScript
export class AppComponent {
jsonObj: Object = {
    name: 'wellwind',
    age: 30,
    sex: 'M'
  };
}
```

原作有個坑一定要給型別... <https://angular.io/api/common/JsonPipe>

```C++
{{ jsonObj | json }}
```

* 心得 : 前端大小寫是有差別的很容易錯 ... 感覺比後端難寫多了 ...

## [ Angular 速成班] 使用 Pipe 輕鬆改變 view 上的顯示內容(2)-自訂 Pipe 讓內容顯示無死角

> 轉換邏輯太複雜時：假設我們遇到一個複雜的轉換邏輯，沒個2~300行是無法完成的，寫在 Component 中可能會不小心造成一個太過肥大的 Component，這樣的程式是不易於維護的。當簡單的轉換邏輯因需求異動而漸漸變複雜時，也是個切出Pipe的良好時間點。
>
> 轉換邏輯在很多地方都需要使用時：我想這就不用多說了吧！如果只有單一個 Component 需要使用，邏輯又不複雜時，寫在 Component 中當作一個 Component 的 feature 也是完全沒問題的，但當重複使用的需求出現時，就是很好的切出 Pipe 的時機啦！

### 開始使用Pipe

在我們之前的TodoApp中，有一個顯示(已完成)的功能，程式碼如下：

```HTML
<span *ngif="item.done">(已完成)</span>
```

我們想要把他改成使用Pipe的方式來處理資料，希望變成如下的程式碼：

```HTML
<span>{{ item.done | todoDone:true }}</span>
```

> 其中 todoDone 就是我們即將要建立的 TodoDonePipe ，這個 Pipe 我們還帶了一個參數，當資料未完成時，若參數為 false，不顯示資料；若參數為 true 則顯示(未完成)。
>
> ng g p todo-done

* src/app/todo-done.pipe.ts

```JavaScript
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'todoDone'
})
export class TodoDonePipe implements PipeTransform {
  transform(value: any, args?: any): any {
    return null;
  }
}
```

@Pipe decorator

Pipe 的 class

有要轉換的邏輯必須寫在 transform() 裡面，把轉換後的結果回傳回去

```TypeScript
transform(todoDone: boolean, displayNotDone: boolean): any {
  if (todoDone) {
    return '(已完成)';
  } else if (displayNotDone) {
    return '(未完成)';
  }
  return '';
}
```

> Pipe 為全域的樣子，不用在 Component 特別去 import module，在 cli 時就會自動引進 AppModule，就可在所有 Component 使用。

## [ Angular 速成班] 使用 Pipe 輕鬆改變 view 上的顯示內容(3)- Impure Pipe 參數：關於 Pipe 最重要的小事

自訂 Pipe 參數：pure

預設情況下 Angular 只在以下兩種狀況發生時會偵測資料變更

* JavaScript 基本（primitive）型別的資料變更時
* 整個物件參考被變更時

原作方法說 TodoListService.toogleItemStatus()

其實只是改變了一個物件的屬性，而非整個物件參考改變，Pipe其實沒接收到正確的變更資料。

但不知道為何，我寫的都直接就改變了 ... 以為是因為時間程式所以每秒都在重新渲染，結果移除了時間程式也還是一樣 ...

修正方式有點看不懂語法 ... 後面 中括弧包 三個點 = = ? [ ] 中括弧，表示一個陣列，也可以理解為一個陣列物件。 但三個點 ?

<https://eyesofkids.gitbooks.io/javascript-start-from-es6/content/part4/rest_spread.html>

看來 ES6 懂得還是太淺了 ... 有時間真的要從 W3C JavaScript 開始看起

```JavaScript
toogleItemStatus(item: TodoItem) {
  item.done = !item.done;
  // 給予一個新的物件參考
  this.todoItems = [...this.todoItems];
}
```

### 關於 Pure Pipe

> 在類別上方的＠Pipe decorator嗎？在這個decorator中主要有一個name的參數；但其實還有一個pure參數，預設值為true，代表這個Pipe是一個Pure Pipe
> Angular的處理行為跟預設的變更偵測機制是一樣的，因此只有當整個傳入的基礎行別被變更﹑或是傳入的物件整個參考被改變時，才會重新執行Pipe裡面的transform()，因此假設我們調整一下我們之前的Pipe，把整個TodoItem傳入時，問題就會再次發生了

???????????????????????? 還是沒觸發 不知道為啥 ...

大概知道問題在哪了，作者似乎後面有些內容是省略的，所以有些 注入 或 綁定 的內容改變了，但沒有詳細說明 ...

也有可能版本異動後，跟 2016 年時的版本內容有差異 ...傳入物件在 pipe 內做變更 還是有偵測到 = = ... 以後遇到再說了 ...

### 關於 Impure Pipe

```JavaScript
@Pipe({
  name: 'todoDone',
  pure: false
})
```

Impure Pipe會導致Angular非常頻繁的對Pipe傳入的資料進行變更偵測，這很容易會導致我們程式的效能變差，因此實際設計上最好：

* 盡量使用Pure Pipe
* 不要在Pipe內變更物件的狀態（ 因為Pure Pipe也不會偵測到… )

### 關於 Async Pipe

> AsyncPipe 可以接收一個 ES6 的 Promise 或 RxJs 的 Observable，並主動去處理 .then() 或主動為 Observable 進行 subscribe 的動作，由於內部的狀態是會變更的，因此 AsyncPipe 就是被設計成一個 Impure Pipe

## [ Angular 速成班] 使用 attribute directive 擴充元件屬性

透過 attribute directive，自行擴充原有的屬性( attribute )，來達到擴充原有的 DOM element、Component 甚至其他的 directive 沒有的功能！

在 Angular 中，Directive 分成3種：

* Components：也就是我們之前就介紹過的 Angular 畫面組成的基本單元。
* Structural directives：主要用來改變 DOM 的配置，例如 ngIf 和 ngFor，他們會移除或加入某些 DOM 元素，來讓 DOM 結構產生變化。
* Attribute directives：用來改變某個 DOM 元素、 Component 甚至是其他 directive 的顯示方式或行為。

示範透過 directive 來為原來的 button 加上 bootstrap 的樣式，並且能透過 @Input 來傳遞參數給 directive ，讓設定更加靈活，我們的目標如下圖，每個按鈕可以套用不同的樣式，並且在案下時切換樣式，都只由一個 directive 搭配不同的參數來完成

> ng g d bs-button

看來跟 pipe 一樣，全域的樣子，不用在 Component 特別去 import module，在 cli 時就會自動引進 AppModule，就可在所有 Component 使用。

* src/app/bs-button.directive.ts

```JavaScript
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {

  constructor() { }

}
```

@Directive、selector

這個selector可以決定要套用的屬性名稱，例如目前是[appBsButton]，

那麼 &lt;button appbsbutton="">...&lt;/button> 或是，

&lt;div appbsbutton="">...&lt;/div>都 會套用，

如果設定為 button[appBsButton] ，

則只有 &lt;button appbsbutton="">...&lt;/button> 會生效。

---------------------------------------

接著我們要取得目前套用 @directive 的 element ，

才能知道如何改變 element 的內容，

我們可以注入 ElementRef ，來取得目前 @directive 所在的 element：

### ElementRef

ElementRef : 有點複雜，大致上是為了避免耦合，而定義的中間層，關聯到原生的 element，

好用的地方在於我們可以很方便的取得原生地 DOM element 。

> 結語 : 到這裡越來越不懂了 ... 開始有點知道 angular 的坎在哪了，不只很多 Module 還有一堆其他機制，不太確定是 ng 自己的還是 瀏覽器方面的 ...
>
> 目標還是定在，依照首篇文章所寫好的 Project 就開始找工作練等，不然連澳洲邊都摸不到 ...

<https://jimmylin212.github.io/post/0013_exploring_angular_dom_manipulation/>
<https://semlinker.com/ng-element-ref/>

* src/app/bs-button.directive.ts

```JavaScript
import { ElementRef, Directive } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective {

  constructor(private el: ElementRef) { }

}
```

再來是既然是自定義屬性，試著在初始化 ngOnInit 時就指定，所以 :

* src/app/bs-button.directive.ts

```JavaScript
import { ElementRef,  Directive,  OnInit} from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  constructor(private el: ElementRef) { }

  ngOnInit() {
    const button = (this.el.nativeElement as HTMLElement);
    button.classList.add('btn');
    button.classList.add('btn-primary');
  }
}

```

* src/app/header/add-form.component.html

```HTML
接著在HTML中套用這個directive
<button appbsbutton="">Button with Attribute Directive</button>****
```

* 結果 就可以看到如下的結果啦！我們是透過directive的方式在程式中為button加入class，而非在button中直接加入class="btn btn-primary"；但結果是一樣的。

### Renderer

> 由於我們預先知道傳過來的 Element 是一個 HTMLElement ，所以透過 TypeScript 進行轉型，若不確定傳過來的是什麼，也有一個 Renderer 輔助類別，來幫助我們設定樣式，這個 Renderer 一樣需要透過注入的方式來使用，最終程式為：

Renderer : 渲染器是 Angular 為我們提供的一種內建服務，用於執行 UI 渲染操作。在瀏覽器中，渲染是將模型對映到檢視的過程。模型的值可以是 JavaScript 中的原始資料型別、物件、陣列或其它的資料物件。然而檢視可以是頁面中的段落、表單、按鈕等其他元素，這些頁面元素內部使用 DOM (Document Object Model) 來表示。

* src/app/bs-button.directive.ts

```JavaScript
import { Renderer, ElementRef, Directive, OnInit } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, 'btn-primary', true);
  }
}
```

> 注意 renderer.setElementClass() 的第3個參數，設為 true 代表加入這個 class ，設為 false 則代表移除此 class ，稍後我們也會用到。

### 加入@Input，讓 Directive 更有彈性

＠Input一樣擴充了屬性，但可以傳遞屬性的內容，接著我們來透過@Input，讓appBsButton可以加上其他樣式。

* src/app/bs-button.directive.ts

```JavaScript
export class BsButtonDirective implements OnInit {

  @Input() appBsButton;

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton || 'primary'}`, true);
  }
}
```

接著HTML中就可以使用appBsButton='primary'這樣的方式來設定樣式啦！

* src/app/header/add-form.component.html

```HTML
<button appbsbutton="danger">Button (Danger)</button>
<button appbsbutton="info">Button (Info)</button>
```

## 加入@HostListener，監聽來源Element的事件

> 用addEventListener來監聽事件是沒有問題的，不過需要注意的是，由於Angular是一個SPA應用程式，因此Element隨時會動態的被產生或消滅，如果我們沒有在Element被消滅時取消監聽的話，長久下來容易造成memory leaks的問題，而@HostListener則可以幫我們解決這個問題，在Element被消滅時自動取消監聽！（順便多學一個decorator）

加入 @HostListener ，完成最後的目標：在滑鼠按下時改變樣式；這個樣式我們一樣希望可以從 @Input 來取得，最終的程式碼改寫成：

* src/app/bs-button.directive.ts

```JavaScript
import { HostListener, Renderer, ElementRef, Directive, OnInit, Input } from '@angular/core';

@Directive({
  selector: '[appBsButton]'
})
export class BsButtonDirective implements OnInit {

  @Input() appBsButton;
  @Input() mouseDownClass; // 額外的@Input

  constructor(private el: ElementRef, private renderer: Renderer) { }

  ngOnInit() {
    this.appBsButton = this.appBsButton || 'primary';
    this.mouseDownClass = this.mouseDownClass || 'danger';
    this.renderer.setElementClass(this.el.nativeElement, 'btn', true);
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }

  @HostListener('mousedown') onMouseDown() {
    // 移除原來的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, false);
    // 加入mousedown的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, true);
  }

  @HostListener('mouseup') onMouseUp() {
    // 移除mousedown的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.mouseDownClass}`, false);
    // 加入原來的樣式
    this.renderer.setElementClass(this.el.nativeElement, `btn-${this.appBsButton}`, true);
  }
}
```

在HTML中可以使用appBsButton及mouseDownClass兩個屬性：

* src/app/header/add-form.component.html

```HTML
<button appbsbutton="danger" mousedownclass="primary">Button (Danger <-> Primary)</button>
<button appbsbutton="info" mousedownclass="success">Button (Info <-> Success)</button>
```

### AOP（Aspect-Oriented Programming） 剖面導向程式設計

是電腦科學中的一種程式設計范型，旨在將橫切關注點與業務主體進行進一步分離，以提高程式碼的模組化程度。

讓原來的 Element 不用去管需要擴充的細節，直接交給 directive 就好

## 大重點

Angular 其中的一個設計目標是使瀏覽器與 DOM 獨立。DOM 是複雜的，因此使元件與它分離，會讓我們的應用程式，更容易測試與重構。另外的好處是，由於這種解耦，使得我們的應用能夠執行在其它平臺 (比如：Node.js、WebWorkers、NativeScript 等)。

為了能夠支援跨平臺，Angular 通過抽象層封裝了不同平臺的差異。比如定義了抽象類 Renderer、Renderer2 、抽象類 RootRenderer 等。此外還定義了以下引用型別：ElementRef、TemplateRef、ViewRef 、ComponentRef 和 ViewContainerRef 等。

<https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/201840/>

> 心得 : 之前有看過撰寫瀏覽器的 it幫幫忙文章，大概了解了其實 Angular 就是個 UI 框架，會去跟平臺(瀏覽器)對接使用瀏覽器所提供的相關服務，渲染引擎就是其一。
>
> <https://ithelp.ithome.com.tw/users/20103745/ironman/1270>

## Sample todolist3 包裝 todolist2 為 NgModule 架構 <a id='3' href='#'>Back to Top</a>

## [ Angular 速成班] 透過 Module 組織管理你的程式

<https://wellwind.idv.tw/blog/2017/02/18/angular-tutorial-16-module/>

> Angular Moduleg 是一隻由帶有相關 metadata 物件的 @NgModule 裝飾的 function ，這些 metadata 物件告訴我們：

![Image](https://github.com/johch3n611u/Side-Project-Self-Brand-Image-Web/blob/master/StudyProject/img/12.jpg)

* 哪些 components、directives 和 pipes 屬於這個 module
* module 下哪些類別是可以公開給外部使用的
* 在這個 module 下，我們需要匯入哪些其他的 module 給我們的 components、directives 和 pipes 使用
* 提供了哪些 services 是應用程式中所有的組件都可以使用的

把之前寫好的 TodoApp 封裝到一個 module 裡面，同時說明如何在 @NgModule 裡面

宣告上述的4個部分，在完成後你將會發現我們的程式及目錄結構變得更加清楚！

> ng g m todo-app

src/app 下面多了一個 todo-app 的資料夾以及 todo-app.module.ts

接著我們把跟 TodoApp 相關的程式都移進這個資料夾

* src/app/todo-app
  * /add-form
  * /todo-items
  * /todo-app.module.ts
  * /todo-done.pipe.spec.ts
  * /todo-list.service.spec.ts
  * /todo-list.service.ts

### 接著我們建立一個屬於 TodoAppModule 的 component

> ng g c todo-app/todo-app

指定的路徑已經包含了module的話，也會自動幫你把相關宣告放在module定義中

> 如果一開始就規劃好 module 與 component 結構，就照著結構開發就好，就不需要手動搬動囉 !!!

接著我們把 AddFormComponent 和 TodoItems 也加入 todo-app.module.ts 的 declarations 中，

順便把 TodoDonePipe 也加入，並把 AppModule 裡面同樣的宣告移除掉

* todo-app.module.ts

```JSON
declarations: [
  TodoAppComponent,
  AddFormComponent,
  TodoItemsComponent,
  TodoDonePipe
]
```

### 將 TodoListService 加入 TodoAppModule

* todo-app.module.ts

```JSON
 providers: [TodoListService]
```

### 將 TodoAppModule 加入 AppModule

* app.module.ts

```JavaScript
imports: [
  BrowserModule,
  FormsModule,
  HttpModule,
  TodoAppModule
],
```

> 在AddForm中我們使用到了 ngModel，這個指令放在 FormsModules 中；因此我們必須在 TodoAppModule 中匯入 FormsModule ，而 ngIf 和 ngFor 在 CommonModule 中，但在建立 module 時預設已經加入囉

* TodoAppModule

```JavaScript
imports: [
  CommonModule,
  FormsModule
]
```

> 今天我們學到了使用@NgModule來將程式模組化，@NgModule參數為一個metadata物件，內容如下：

* declarations: []：這個Module內部Components/Directives/Pipes的列表，聲明這個Module的內部成員
* exports:[]：控制module下哪些內部成員是可以公開給外部使用的
* imports:[]：在這個module下，我們需要匯入哪些其他的Angular提供的或第三方提供的Angular資源庫（如FormsModule、HttpModule等）。
* providers:[]：提供了哪些services，在此宣告後所有下面的元件都可以直接使用這個服務。
* bootstrap[]：這個屬性只有根模組需要設定，在此設定在一開始要進入的模組成員是那一個。

透過將程式模組化，可以讓程式架構更加明確，搭配Angular CLI會自動幫你將模組化的內容收納在對應的資料夾下，見少無謂的重工，增強生產力；善用module，我們可以架構出更加清楚好維護的程式碼，也能夠更容易的將程式碼分享出去，實在是送人自用兩相宜的好工具阿！

## Routing 從零開始的Angular前端開發系列 第 23 篇 fansen <a id='4' href='#'>Back to Top</a>

<https://ithelp.ithome.com.tw/articles/10225687>

* index.html

```HTML
<!-- index.html-->
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>SpongeWebsite</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

* &lt;base href="/"> 如果你的網頁有超連結設定成相對路徑，那麼就會導向以 &lt;base> 設定為基底的URL。"/"會指定該html所屬的目錄。

比方我們在 body 裡建立一個超連結的標籤:

&lt;a href="test.com">Link&lt;/a>

 URL 就會導向 http://localhost:4200/test.com

 如果設成絕對路徑：

  &lt;a href="http://www.google.com">Link&lt;/a>

就能正確導向www.google.com，而不會經過base的URL。

### 設定路由

Angular 建立範本專案時，會詢問要不要建立 RoutingModule，選 y 的話就會建立一個 app-routing.module.ts。

由於我們在建立專案時沒有加入 RoutingModule，所以現在要手動建立他。我們遵循 Angular，名字固定叫 app-routing 比較好：

> ng g m app-routing --flat

--flat 將文件放入src/app而不是其自己的文件夾中。

--module=app 告訴CLI在imports 數組中註冊它 AppModule 。

* app-routing.module.ts

```JavaScript
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
```

routes 是一個 Route 的陣列，裡面放我們等等要定義的路由資訊。

import: [RouterModule.forRoot(routes)]，

這邊將 routes 資訊載入到 RouterModule，由於我們這個 module 是要匯出給 AppModule 使用，

而 AppModule 是 root module，

所以要用forRoot()，如果是 root module 以外的 module 就用 forChild()。

* app.module.ts 匯入：

```JavaScript
import { AppRoutingModule } from './app-routing.module';

...
imports: [
    BrowserModule,
    AppRoutingModule,
    ...
    ],
    ...
```

也可以把這些程式碼寫在 AppModule 中，不過我覺得這樣分成兩個檔案比較乾淨。

* app-routing.module.ts

```JavaScript
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomepageComponent},
];
```

第一筆的 path: '' 就是相對於 &lt;base href="/"> 的根位置： http://localhost:4200/。

redirectTo 設定要導向哪個 URL，這邊是導向 /home 這個位址。

pathMatch: 'full' 是設定輸入的網址要與 path 設定的位址一樣，才會做 redirect。所以我一定要輸入http://localhost:4200/，才會正確導到 http://localhost:4200/home。

而如果是設定 pathMatch: 'prefix' 的話，只要 url 符合 path 的 prefix，就會幫忙導向。而這邊的 path 是空字串，所以設定 prefix 的話，無論 url 後面輸入甚麼，都會導到 /home 底下。

第二筆的 component 即是指，如果我在 http://localhost:4200/home，要顯示 HomepageComponent 這個元件。

### 路由插座

顯示顯示，到底要顯示在哪裡呢？

我們要使用 &lt;router-outlet>&lt;/router-outlet> 這個標籤。它被稱作路由插座，

當進入我們的網頁時，Angular 的 Router 會查看我們配置的 routes 陣列，並在這邊顯示對應的 Component。

所以要在 app.component.html 加入 &lt;router-outlet>&lt;/router-outlet>：

* app.component.html

```JavaScript
<app-navigation-bar></app-navigation-bar>
<router-outlet></router-outlet>
```

在 import module 的地方加入{ enableTracing: true }，Angular 就會在 console 印出路由的訊息，debug時可以用。

* app-routing.module.ts

```JavaScript
imports: [RouterModule.forRoot(routes, { enableTracing: true })]
```

### routerLink 屬性

將 href 改成 Angular 提供的 routerLink，注意 Link 的 L 要大寫：

* demo

```HTML
<ul>
  <li><a routerLink="home">Home</a></li>

  <ng-container *ngIf="!islogin">
    <li><a routerLink="/register">Register</a></li>
    <li><a routerLink="/login">Login</a></li>
  </ng-container>

  <ng-container *ngIf="islogin">
    <li><a routerLink="/chart">Chart</a></li>
    <li><a routerLink="/logout">Logout</a></li>
  </ng-container>

</ul>
```

許多操作方式

```JavaScript
routerLink="['/login']"

// 導向/account/login
routerLink="/account/login"
routerLink="['/account', 'login']"
routerLink="['/account/login']"
// 搭配 Property Binding 使用
[routerLink]="['/account', 'login', id , 'info']"
// id = 5 -> /account/login/5/info
```

### 定義 routes 時要注意的事情

path 的地方不能用 / 開頭，否則一定會報錯

redirectTo 只能重導向一次

```JavaScript
const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', redirectTo: 'login' },
  { path: 'login', component: LoginComponent },
];
```

### 萬用路由 **

可以在 routes 最後加入

{ path: '**', component: &lt;COMPONENT> }

當設定的所有 path 都不能匹配時，就一定會匹配到 ** 這個萬用路由

404 頁面不存在

### children 子路由

```JavaScript
const routes: Routes = [
{
    path: 'account', children: [
        { path: 'register', component: RegisterComponent},
        { path: 'changepassword', component: ChangePasswordComponent},
    ]
  }
]
// 1. account/register
// 2. account/changepassword
```

### path 參數

 { path: 'home/:id', component:  HomepageComponent}

 :id 不能為空 這邊要輸入 home/123、home/AAA ... 等等的 URL，才能成功比對路由位址

### 路由 Query string

在網址後面用問號串接，並以 & 分隔每一個參數

需要用到 ActivatedRoute 這個 Service

在 ngOnit() 加入取得參數的程式碼

```JavaScript
 import { ActivatedRoute, ParamMap} from '@angular/router';
   constructor(private route: ActivatedRoute) { }

     name;
// 這樣就會抓到第一次載入這個 component 時的變數 name。
  ngOnInit() {
    this.name = this.route.snapshot.queryParamMap.get('name');
}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name');
}
```

參數還有一種格式，是使用分號分隔的 <http://localhost:4200/home;name=fansen;number=123;>

用 paramMap 取代 queryParamMap，就可以吃這種格式的參數

### 路由導航 -> 登入成功後轉向首頁或是其他頁面

讓Angular 幫我們自動轉向頁面 使用另一個 Service Router

調用 navigate() 這個 function

第一個參數要傳入陣列，跟之前 routerLink 的概念一樣，如果網址是/login/name/info 的話，

就傳入 ['/login','name','info']，當然也可以夾入變數

然後 binding　到一個 button 上：

這樣點擊按鈕就會轉向 http://localhost:4200/login 了：

```JavaScript
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
constructor(private route: ActivatedRoute, private router: Router) { }
 navigate() {
    this.router.navigate(['/login']);
  }

//HTML
  <button (click)="navigate()">Navigate To Login</button>

//或傳入字串直接導向
   navigateURL() {
    this.router.navigateByUrl('/login');
  }

// 導向新頁面時，想要將 Query String 加進去
queryString = '?name=name123&naumber=1'
url = '/login' + queryString
// 有了 NavigationExtras 物件，就不需要這麼麻煩了，把 Query String 像物件一樣一組一組擺進去
navigate() {
    const options: NavigationExtras  = {
      queryParams : {
        name: 'name123',
        number: 1
      }
    };
    this.router.navigate(['/login'], options);

// queryParams 也可以和 routerLink 一起用：
<a routerLink="/login" [queryParams]="{ name: 'name123', number: 1}"></a>

// 不想讓別人看到路由位址的話，可以在 NavigationExtras 加入 skipLocationChange: true
// 跳轉頁面時，URL就不會改變，但是 queryParams 的參數一樣會傳送出去
const options: NavigationExtras  = {
      queryParams : {
        name: 'name123',
        number: 1
      },
      skipLocationChange: true
    };

// 搭配 routerLink 的話，在屬性加入 skipLocationChange 即可：
<a routerLink="/login" [queryParams]="{ name: 'name123', number: 1}"　skipLocationChange></a>

以上
```

結論 :

好了到這先結尾，其實有看到一個最完美的配置

<https://github.com/TrilonIO/aspnetcore-angular-universal>

前端 NG 後端 CORE 搭 MSSQL & DOCK 、 PWA ... 等等 且 SEO 也可顧到，但看來那還要蠻長時間學習 ...

最後 timeOut 出現 ExpressionChangedAfterItHasBeenCheckedError ，

查了半天還是完全不知道怎麼解，還是對 ng 渲染畫面那部分的 生命週期太模糊 ...

看完以下文章大概知道是什麼原因了，但會耽誤到原來計畫時間，先記著等 sideproject 完成後再來解決。

<https://medium.com/better-programming/expressionchangedafterithasbeencheckederror-in-angular-what-why-and-how-to-fix-it-c6bdc0b22787>

<https://www.learn-it-with-examples.com/development/html-css-javascript/angular/settimeout-angular-example.html>

> ng build --prod 改使用AOT編譯
