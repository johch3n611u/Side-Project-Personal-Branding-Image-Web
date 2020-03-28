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
16. cd 專案目錄 -> 移動至目錄。
17. npm install --save @angular/material @angular/cdk 。
18. npm install --save @angular/animations -> 動畫特效套件，使用 Web Animations API 。
19. import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; -> AppModule 引入特效模組。
20. import { NoopAnimationsModule } from '@angular/platform-browser/animations'; -> AppModule 引入取消特效模組
21. Web Animations API -> <https://zhuanlan.zhihu.com/p/27867539>。
22. polyfill -> 是在不支持該功能的Web瀏覽器上實現該功能的代碼，API 墊片。
23. npm install --save web-animations-js -> Web Animation API 不是所有瀏覽器都有支援必須引入函式庫。
24. src/pollyills.ts import 'web-animations-js' -> 取消註解或補上。
25. SharedMaterialModule -> <https://angular.io/guide/ngmodules#shared-modules>。
26. ng g m SharedMaterial -> 將常用的MatXXXModule先import，再export出來，在其他Module中就只要import這個SharedModule。
27. src/app/styles.css  @import "../node_modules/@angular/material/prebuilt-themes/deeppurple-amber.css"; -> Angular Material 內建樣式，元件會自動套上。
28. ~ -> 代表的是去 node_modules 去尋找是否有安裝對應的套件，有的話就把套件目錄下指定的位置內容加進來 <https://www.cnblogs.com/cylee/p/8438824.html>。
29. npm install --save hammerjs -> Angular Material 利用觸屏裝置手勢庫，為 UI 實作行動裝置的手勢支援。Angular Material 9 之後，已經移除對 hammerjs 的相依。
30. src/main.ts import 'hammerjs'; -> 進入點引入。
31. Material Icons -> 搭配 Material Design 出來的一系列 icon set 。
32. index.html &lt;link href="<https://fonts.googleapis.com/icon?family=Material+Icons>" rel="stylesheet"> -> Icon Font 的CDN
33. Google Font API -> <http://pro.ctlok.com/2010/07/google-font-api-google-font-directory.html>
34. npm show @angular/material version -> 查看套件版本。
35. Product Icon -> 象徵著產品或服務的最主要門面。
36. System Icon -> 系統或服務裡面的操作行為的識別。
37. <https://material.io/resources/icons/?style=baseline> -> 由 Google 推出一系列超過900個系統Icons。
38. 搜尋 key word 下方就會顯示可以加入網頁的方法，下載SVG或PNG檔，或 Icon Font 。
39. HTML Tag -> &lt;span class="material-icons">star&lt;/span>
40. MatIcon import { MatIconModule } from '@angular/material/icon'; -> 引入 MatIconModule