# Angular2+

<https://wellwind.idv.tw/blog/2016/10/18/angular-tutorial-4-basic-concepts-and-create-components/>

<https://forum.angular.tw/>

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

## Sample todolist1

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

> ng g interface shared\TodoItem

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

但 addtodoitem 這個事件是從哪裡而來的呢?

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
