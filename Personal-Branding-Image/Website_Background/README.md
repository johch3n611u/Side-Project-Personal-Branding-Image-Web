# Hello, world

## Database Diagram

<https://dbdiagram.io/d/5e86e0544495b02c3b89305d>

接續 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>

113. 這邊先安裝 SQL Server 2019 Developer Edition 與 SSMS，有多餘時間在研究 NoSQL 與 MySQL。
114. 接著使用 SSMS 快速依照 Database Diagram 開表與 set Demo Data。
115. <http://codeplanet.me/archives/2014/08/ssms-saving-changes-is-not-permitted/>
116. 這邊 users 的 passwords 雖然必須要 hash 但只有一個使用者且是用於 demo 所以先記錄下來，有時間再修正。 <https://ithelp.ithome.com.tw/articles/10186501>
117. <https://stackoverflow.com/questions/34802480/char-vs-varchar-for-password-security>
118. 開始編輯 C# .NET Core API
119. <https://stackoverflow.com/questions/28223755/can-you-use-c-sharp-property-syntax-for-vb-net>
120. <https://stackoverflow.com/questions/1948987/whats-the-equivalent-of-vb-readonly-property-in-c>
121. 首先是要連線上設定好的 MS SQL Serve -> <https://ithelp.ithome.com.tw/m/articles/10201333>
122. 報錯 Scaffold-DbContext : 無法辨識 'Scaffold-DbContext' 詞彙是否為 Cmdlet、函數、指令檔或可執行程式的名稱。 -> <https://dotblogs.com.tw/mis2000lab/2020/02/05/ASPnet_Core_Scaffold-DbContext_Error>
123. Scaffold-DbContext "DBConnectionString" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
124. <https://blog.darkthread.net/blog/ef-core-notes-4/>
125. 以往 Server render 登入後都是將憑證暫存至 Server 端，提供每次 render 頁面的憑證，但改由 Client 端勢必也需要類似的憑證，且要藉由定時 Cookie 等一系列措施防止資安問題。
126. 但昨日光搞版本與函式庫與 Router 問題就搞了一整天，所以這邊先看懂但不實作。
127. 原作似乎只處理了 CORS 問題，並且在伺服器端存了一組 Token 但也只反傳驗證成功的 Success 字句 ... 不懂這啥操作，但還沒看到後面可能 SPA 那會有其他處理方式。
128. [Bind("Username,Password")] Users? Users 似乎 Post 的 JSON 檔案，必須是 Users 物件，也不知道指定格式為何，單一變數綁定就成功了先使用單一變數。
129. 注意事項 Postman 模擬 Post 必須注意 1.方法 2.RouterPath 3.header text type must JSON 第三點卡很久，不然不吃 -> <https://blog.walterlv.com/post/use-postman-to-debug-asp-net-core-api.html>
130. 登入後端這邊告一段落 <https://localhost:44367/api/Signin> { "Username":"liu","Password":"12345"} -> Status 201 , success 。
131. 接著 <https://dotblogs.com.tw/topcat/2017/07/12/115753> 前端 Component 部分。
132. back to <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
144. 接續 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
145. 建置 news db <https://dbdiagram.io/d/5e86e0544495b02c3b89305d>
146. 一樣藉由 .net core 終端 cmd 建置 db first -> Scaffold-DbContext "DBConnectionString" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
147. 這次再利用 git 觀察新增了哪些程式碼

---------------------------

Welcome to your new single-page application, built with:

<https://get.asp.net/>

<https://msdn.microsoft.com/en-us/library/67ef8sbd.aspx>

<https://angular.io/>

<http://www.typescriptlang.org/>

<http://getbootstrap.com/>

* ASP.NET Core and C# for cross-platform server-side code
* Angular and TypeScript for client-side code
* Bootstrap for layout and styling

To help you get started, we've also set up:

* ***Client-side navigation***. For example, click ***Counter*** then ***Back*** to return here.
* ***Angular CLI integration***. In development mode, there's no need to run ***ng serve***. It runs in the background automatically, so your client-side resources are dynamically built on demand and the page refreshes when you modify any file.
* ***Efficient production builds***. In production mode, development-time features are disabled, and your ***dotnet publish***configuration automatically invokes ***ng build*** to produce minified, ahead-of-time compiled JavaScript files.

The ***ClientApp*** subdirectory is a standard Angular CLI application. If you open a command prompt in that directory, you can run any ***ng*** command (e.g., ***ng test***), or use ***npm*** to install extra packages into it.
