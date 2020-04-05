# Angular Material

<https://ithelp.ithome.com.tw/users/20020617/ironman/1263>

1. Material Design -> Google 推行的 UI/UX 設計準則。
2. Angular Material -> 其中之一依照設計準則的實作，此實作由 Google 推出。
3. Angular Component Development Kit -> Angular Material 在設計元件時拉出來的共用程式。
4. nvm for windows -> Node Version Manager <https://github.com/coreybutler/nvm-windows>
5. nvm version -> 檢查 nvm 版本。
6. nvm list available -> 列出目前有哪些 Node.js 版本可供安裝。
7. nvm list -> 列出目前本機安裝哪些 Node.js 版本，及 active 哪一版。
8. nvm install 版本號 -> 安裝指定 Node.js 版本。
9. nvm use 版本號 -> 切換到指定 Node.js 版本。
10. node -v -> 檢查當前 active 的 node。
11. npm -v -> 檢查當前 active 的 npm。
12. npm -> Node Package Manager。
13. npm install -g @angular/cli -> 建立 ng Command-Line Interface 。
14. md 目錄路徑 -> 建立目錄。
15. ng new 專案名稱 --routing -> 在專案中增加 app-routing.module.ts 。
16. ng generate module app-routing --flat --module=app -> 如果已經有專案了。
17. --flat 把這個檔案放進了 src/app 中，而不是單獨的目錄中。
18. --module=app 告訴 CLI 把它註冊到 AppModule 的 imports 陣列中。
19. cd 專案目錄 -> 移動至目錄。
20. npm install --save @angular/material @angular/cdk 。
21. npm install --save @angular/animations -> 動畫特效套件，使用 Web Animations API 。
22. import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; -> AppModule 引入 imports 特效模組。
23. import { NoopAnimationsModule } from '@angular/platform-browser/animations'; -> AppModule 引入 imports 取消特效模組
24. Web Animations API -> <https://zhuanlan.zhihu.com/p/27867539>。
25. polyfill -> 是在不支持該功能的Web瀏覽器上實現該功能的代碼，API 墊片。
26. npm install --save web-animations-js -> Web Animation API 不是所有瀏覽器都有支援必須引入函式庫。
27. src/pollyills.ts import 'web-animations-js' -> 取消註解或補上。
28. SharedMaterialModule -> <https://angular.io/guide/ngmodules#shared-modules>。
29. ng g m SharedMaterial -> 將常用的MatXXXModule先import，再export出來，在其他Module中就只要import這個SharedModule。
30. src/app/styles.css  @import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css"; -> Angular Material 內建樣式，元件會自動套上。
31. ~ -> 代表的是去 node_modules 去尋找是否有安裝對應的套件，有的話就把套件目錄下指定的位置內容加進來 <https://www.cnblogs.com/cylee/p/8438824.html>。
32. npm install --save hammerjs -> Angular Material 利用觸屏裝置手勢庫，為 UI 實作行動裝置的手勢支援。Angular Material 9 之後，已經移除對 hammerjs 的相依。
33. src/main.ts import 'hammerjs'; -> 進入點引入。
34. Material Icons -> 搭配 Material Design 出來的一系列 icon set 。
35. index.html &lt;link href="<https://fonts.googleapis.com/icon?family=Material+Icons>" rel="stylesheet"> -> Icon Font 的CDN
36. Google Font API -> <http://pro.ctlok.com/2010/07/google-font-api-google-font-directory.html>
37. npm show @angular/material version -> 查看套件版本。
38. Product Icon -> 象徵著產品或服務的最主要門面。
39. System Icon -> 系統或服務裡面的操作行為的識別。
40. <https://material.io/resources/icons/?style=baseline> -> 由 Google 推出一系列超過900個系統Icons。
41. 搜尋 key word 下方就會顯示可以加入網頁的方法，下載SVG或PNG檔，或 Icon Font 。
42. HTML Tag -> &lt;span class="material-icons">star&lt;/span>
43. MatIcon import { MatIconModule } from '@angular/material/icon'; -> SharedMaterialModule 引入 MatIconModule，再引入需求 Module 內共用。
44. --spec false -> spec 為 false 不會建立測試程式。
45. ng update --all -> ng update --next @angular/cli --force
46. 版本 8 -> 9 .NET Core Angular cli 搭建似乎有 bug -> 詳見 <https://github.com/angular/angular/issues/34970>
47. 查看了 Angular Material 文章，發現裡面內容較繁雜需要較多時間，此部分先中斷，改為 <https://ithelp.ithome.com.tw/m/articles/10202189>
48. 目的是利用 Angular Material 實作，前台文章上架的後台內容，且前後台藉由 .NET Core API 溝通資料 CRUD 。
49. 屆時再決定功能要多完整，還是只有 CRUD 功能 Demo 即可，否則可能還會涉及資安等等內容也會過於耗時，轉至 -> <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
