<p id='top'></p>

# Personal Branding Image Web

## Azure online demo

Framework - Angular 2+ & .Net Core 2+

[Site_Reception](https://pbi20200421.z7.web.core.windows.net/) 前台 Static web page

[Website_Background](https://websitebackground20200423181629.azurewebsites.net/SignIn) 後台 Single-page application + .Net Core Web API

* Update 2020/04/25 by yochen publish on Azure account free try out, not sure work duration.
* 資料庫使用 Azure 無伺服器資料庫 ( 自動暫停延遲方案 )，初次讀取較慢，請見諒。

## 完成架構

[StudyProject](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/StudyProject/Angular%20Material) 研究了基本的 ng basis 、 mat 與 .net core ，也嘗試了 wireframe to html ，

Personal Branding Image 專案則包含了 [Site_Reception](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Site_Reception) 純靜態網站，只藉由 AJAX 從 .NET Core API 要求固定資料，

[Website_Background](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background) 由 [Angular SPA](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp) 架構的後台管理文章系統，實作登入與 CRUD 功能，資料是由 EFCore 界接 MS SQL。

## 完成心得

回想起大學時期，我的每個提案，教授、同學給的回饋，都有個共同點 ☟
> 提案內容豐富，但太多太雜，重點不抓緊容易失焦，希望自己一直銘記這件事情並改善。

從上一份工作離開到現在，[中間發生蠻多事](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/202001/20200321.md)，本來預計一個月就能開始找工作，到此專案結束已經過了將近三個多月，能在短短兩個禮拜，成功完成自己設定的架構系統，成就感還是有的，但由於是自己摸索也沒人可以問，期間遇到蠻多問題，但都一一解決也記錄下來，[整個過程大約三百個步驟](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/StudyProject/Angular%20Material)，無數多個困難。

接著要面對的就是另一個檻了，整理完履歷後，希望能面試到一間不錯的公司。

<details>
  <summary> 2020-04-20 更新 * Demo Server 架設問題... </summary>
<br/>

>在專案完成編輯景觀建築作品文章時，發現一些問題，主要是面試 demo 實際上的問題，
>
>本來考慮到 demo db server 問題，所以綁定 db server 改為綁定 db.mdf ，
>
>但這樣我只想到以下 demo 方式，且各自有困難點必須突破...
>
>首先在本機或筆電，用開發模式 debug 狀態，專案起在臨時 iis 上 demo ，
>
>或真實放在 local iis server 上 demo ，
>
>但筆電部分因為家人需要等於是沒筆電狀態，所以不暫考慮...
>
>且家機為共用機、娛樂機似乎也不太適合，當作臨時 local server，
>
><br/>
>
>後來想到可能可以嘗試將 web 與 db 都架在 Azure 上，
>
>這樣在編輯景觀建築作品時就能直接順道處理了，
>
>雖然以後是有想要連 docker 也順道學習，
>
>但是 Azure 暫時免費制的內容，還需要再花時間研究與設定...
>
>人生好難...

詳細內容轉紀錄於 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>

</details>

## 成果展示

### 前台首頁

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/1.gif)

### 前台個人簡介 ( 隨機文章產生 )

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/2.gif)

### 前台文章分類頁面

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/3.gif)

### 前台文章頁面 ( 背景分為基礎與隨機顏色 )

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/4.gif)

### 後台登入畫面

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/5.gif)

### 後台首頁文章管理頁面

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/6.gif)

## 使用心得

因為一開始架構就設定為簡易的 demo ，所以真實使用起來缺陷蠻多的，先不管資安問題，
像是欄位編輯、時間、img 或是 html text 就有一些存取上的問題，
但其實都是些小問題，真的要處理時間花費也不會很久，
最後是 mobile 顯示問題，因為沒有特別使用 CSS 框架，也沒有撰寫 RWD ，
所以並沒有考慮到手機板應用問題，後續應該會交由還在學的弟弟來接棒，當作他的練習作品。

---------------------------------

# 實作

## 方式

以 ASP.NET MVC5 的知識為底學習 .NET Core 2.1+ ☝

以 EasyUi、JQ 的知識為底學習 Angular 2+ ☝

## 步驟

以[此教學](https://ithelp.ithome.com.tw/m/users/20105684/ironman/2008)為發想並構思 [UML、Sitemap、Wireframe、Prototype](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Site_Reception)，建置 Sideproject，

發現以上對於剛接觸的人可能會不瞭解 Angular 架構，

所以優先把以下[參考](#reference)看完或實做，

.Net、MVC、C# 相對於前端較熟，

所以會多花點時間在 Angular，

資料庫部分則靠上班實作所累積的基礎，

以下鏈結所架構為我到現在看到感覺最完善的框架版本。

***[ASP.NET Core & Angular Universal advanced starter](https://github.com/TrilonIO/aspnetcore-angular-universal)***

- PWA w/ server-side rendering for SEO,
- Bootstrap,
- i18n internationalization,
- TypeScript,
- unit testing,
- WebAPI REST setup,
- SignalR,
- Swagger docs,
- and more!

By @TrilonIO

## 緣由

<details><summary>想做個人品牌網頁，是從 ... ( 廢話很多欲閱請點擊觀看 )</summary>

_

景觀建築系轉職網路工程師前，

最初就讀義守資訊管理系，確實要往網頁工程師職業前進，

但沒有深入了解，網頁美工與網頁工程師，是分開來不一樣的專業。

義守大學的學習環境較糟糕，加上接收到網頁設計沒錢途的訊息，

轉學輔仁大學設計相關科系，契機除了離家近外，

還有想像全能住宅改造王節目，那樣面對問題、解決問題的成就感，

大學四年，不管是 分析 / 設計 / 規劃 / 2D繪圖 / 3D建模 / 演講 等技能，

都被扎實訓練，設計方面不是最好但也拿過第二名，也有縣市級競圖金銀雙冠獎，

施工方面不滿足紙上作業，實際考取了乙級造園施工執照，成就感上是非常足夠的，

為了表達自己的設計，曾修習輔大資訊管理系，網站設計課程來呈現作品在網路上，

本想著畢業後往規劃師、監工的專業前進，投遞了國際級大公司，AECOM 國際工程顧問公司，

成功錄取大陸重慶景觀工程師的職位，結果談到實際的薪資與食宿問題才發現，

其實大陸人才過於飽和，從台灣過去的初階職位，薪水不包食宿與返台機票，只有兩萬四台幣，

且無返台假，那兒的房租與台北縣市差距不大，算下來要貼錢去上班也有可能，

而同系同學，家境較好的都繼續攻讀碩士，甚至讀國外的設計系，

不然就往繪圖人員發展，或建築事務所打雜，

大環境下，毅然而然決定要轉職。

利用大學四年來學到的分析規劃自己的職涯，

找到了 [104 薪資情報相關的資訊](https://www.104.com.tw/jb/wage/view?wf=alertbar)，

思考了可信度與未來性，閱讀許多資料，像是非本科系要如何轉職? 職訓局或資策會利弊?

資策會的內容較深，如果初學者容易半途而廢，線上課程又過於片段，

剛好閱讀資訊，職訓局高雄分署有商務系統設計與開發職前班，能夠幫忙培養技能到能夠就業，

抱著一定成功心態，南下高雄半年，踏入了網路工程師職涯，

最初看到現代網路分工非常細膩，

從較偏美工的網頁設計師 UI/UX，視覺到前端不只切版，

包含互動與資料處理，到後端的商業邏輯與資料庫、各API界接，

到 MIS / DevOps / SRE ，

覺得從 視覺 / 多媒體 / 模型 / 分析 / 規劃 / 行銷 技能，

又習得 ASP.NET MVC C# 等前後端綜合技能 ... 詳見 -> [行動商務系統設計與開發課程 iCAP認證課程](https://github.com/johch3n611u/Course-of-Mobile-Commerce-System-Design-and-Development)

是需要理清思路整理所學，也看上 .Net Core 開源與 Angular 適合團隊合作的框架，

_

</details>

>_
>
>決定把斜槓技能整理整理，所以就藉由這個人品牌網站，磨練技能並整理技能，
>
>期待能成為一個 斜槓獨角獸。

## 問題分析

1. 資料繁雜需要分門別類呈現
2. 系統化上架專案並統一管理
3. 特色內容需要專案呈現

## 解決方案

[Site_Reception](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Site_Reception) 靜態網站串上 AJAX 從 .NET Core Web API 取顯示資料。

[Website_Background](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background) - .NET Core Web API + Angular Material 後台 SPA 管理儀錶板。

## 參考範例

- [特色進入頁面](http://www.adhamdannaway.com/)

- [分門別類專案與新聞系統](https://big.dk/#projects)

- [後台管理系統](https://ithelp.ithome.com.tw/articles/10193290?sc=iThelpR)

- [後台管理介面](https://www.blogger.com/u/1/blogger.g?blogID=7103485025860384377#create)

## Wireframe

<https://www.figma.com/file/Trw2pDqLBz8ximcE1r0cDk/Untitled?node-id=0%3A1>

## 參考文章 <a id = 'reference' href='#top'> back top </a>

<details><summary> ↓ Link ↓ </summary>

### Angular

<https://www.slideshare.net/WillHuangTW/happy-leaning-angular-2-web-framework-modern-web-2016>

<https://ithelp.ithome.com.tw/m/users/20107113/ironman/1240>

<https://ithelp.ithome.com.tw/m/users/20111882/ironman/2922>

<https://ithelp.ithome.com.tw/m/users/20090728/ironman/1600>

<https://ithelp.ithome.com.tw/m/users/20103745/ironman/1160>

<https://github.com/jiayisheji/blog/issues/16>

<https://angular.tw/>

<https://ithelp.ithome.com.tw/users/20103808/ironman/1389>

<https://wellwind.idv.tw/blog/categories/Angular%E9%80%9F%E6%88%90%E7%8F%AD/>

<https://ithelp.ithome.com.tw/users/20119722/ironman/2145>

<https://ithelp.ithome.com.tw/users/20119722/ironman/2145?page=3>

<https://dotblogs.com.tw/topcat/2017/07/12/115753#AppModule>

### .Net Core

<https://ithelp.ithome.com.tw/users/20083151/ironman/856>

<https://docs.microsoft.com/zh-tw/aspnet/?view=aspnetcore-3.0#pivot=core>

<https://ithelp.ithome.com.tw/m/users/20107461/ironman/1372>

<https://blog.johnwu.cc/tags/asp-net-core-3/>

<https://ithelp.ithome.com.tw/users/20111879/ironman/1749?page=1>

<https://ithelp.ithome.com.tw/users/20107875/ironman/2001?page=3>

<https://ithelp.ithome.com.tw/users/20103676/ironman/2914>

<https://ithelp.ithome.com.tw/users/20111879/ironman/1749?page=1>

### Angular Material

<https://ithelp.ithome.com.tw/users/20020617/ironman/1263>

### Angular PWA

<https://ithelp.ithome.com.tw/m/users/20103808/ironman/1389>

### Angular Universal

<https://pvt5r486.github.io/f2e/20190809/2128364955/>

### RxJS

<https://ithelp.ithome.com.tw/articles/10195391>

<https://rxjs-dev.firebaseapp.com/>

### Library

<https://ckeditor.com/>

<https://www.tiny.cloud/>

<https://premiumsoftware.net/cleditor/>

<https://demo.tc/post/%E8%B6%85%E8%BC%95%E9%87%8F%E5%AF%8C%E6%96%87%E6%9C%AC%E7%B7%A8%E8%BC%AF%E5%99%A8%20cleditor>

<https://training.pada-x.com/docs/article.jsp?key=node-npm-simple-reference>

<https://www.npmjs.com/package/@types/jquery.cleditor>

<https://github.com/DefinitelyTyped/DefinitelyTyped#readme>

<https://medium.com/html-test/%E5%BE%9E%E9%9B%B6%E9%96%8B%E5%A7%8B-%E4%BD%BF%E7%94%A8npm%E5%A5%97%E4%BB%B6-317beefdf182>

### Dapper

<https://esofar.gitbooks.io/dapper-tutorial-cn/content/>

<https://ithelp.ithome.com.tw/users/20105988/ironman/2161>

<https://dotblogs.com.tw/initials/2016/10/31/115213>

<https://dotblogs.com.tw/OldNick/2018/01/15/Dapper#QueryFirst>

### Other

<https://dotnetfiddle.net/>

<https://softwareengineering.stackexchange.com/questions/278686/having-a-production-branch-or-using-master>

<https://medium.com/@harivigneshjayapalan/life-of-a-unicorn-developer-d442b6655399>

<http://www.ditldesign.com/news/2014/12/19/ditktalk2014nov20hsieh>

<https://www.youtube.com/watch?v=L4IIbEI8PtM>

<https://www.figma.com/>

<https://segmentfault.com/q/1010000002418878>

<https://dbdiagram.io/home>

<https://challenge.thef2e.com/works?stage=6&orderBy=created_at&sort=desc>

### 規劃設計

<https://www.youtube.com/watch?v=MFropqypz3M&t=13s>

</details>
