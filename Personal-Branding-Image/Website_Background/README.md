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
123. Scaffold-DbContext "DBConnectionString" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models -> <https://ithelp.ithome.com.tw/articles/10201333>
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
146. 一樣藉由 .net core 套件管理器主控台 建置 db first -> Scaffold-DbContext "DBConnectionString" Microsoft.EntityFrameworkCore.SqlServer -OutputDir Models
147. 這次再利用 git 觀察新增了哪些程式碼 <https://docs.microsoft.com/zh-tw/ef/core/miscellaneous/cli/dotnet>
148. dotnet cli <https://dotblogs.com.tw/jakeuj/2019/07/23/EFCoreMigrations> -> dotnet ef database update
149. 有時間要再把 dotnet 看熟 ... ef cli -> <https://ithelp.ithome.com.tw/articles/10207773> <https://docs.microsoft.com/zh-tw/ef/core/miscellaneous/cli/dotnet>
150. dotnet tool install --global dotnet-ef <https://docs.microsoft.com/zh-tw/ef/core/miscellaneous/cli/dotnet>

```CMD
您可以使用下列命令來叫用工具: dotnet-ef
已成功安裝工具 'dotnet-ef' ('3.1.3' 版)。
```

151. dotnet ef database update ... -> 指令能用了但沒反應 ...

```CMD
Build started...
Build succeeded.
No migrations were applied. The database is already up to date.
Done.
```

152. dotnet add package Microsoft.EntityFrameworkCore.Design
153. dotnet ef migrations add InitialCreate -> 成功砍掉 Context.cs 內容
154.
```CMD
Build started...
Build succeeded.
Done. To undo this action, use 'ef migrations remove'
```
155. dotnet ef database update -> 重新建置了 Context.cs 但還是只有 user.cs 資料表 ... 三小
156. dotnet ef dbcontext scaffold "DBConnectionString" Microsoft.EntityFrameworkCore.SqlServer -o Models
157. 砍了重下指令... 記得要先把錯誤的地方都先註解，否則 cli 會 failed <https://stackoverflow.com/questions/38961115/build-failed-on-database-first-scaffold-dbcontext>
158. 測試使用 VS 模板，利用模型建置 API Controller CRUD 感覺還蠻方便的只要細修一些客製化內容即可。
159. <https://stackoverflow.com/questions/40900414/asp-net-core-dependency-injection-error-unable-to-resolve-service-for-type-whil>
160. 沒用到 inject 時，記得將 api 模板產生的 controller 調整一下否則 request 無法訪問 <https://stackoverflow.com/questions/46930090/unable-to-resolve-service-for-type-while-attempting-to-activate/46930161>
161. 這裡先告一段落，接續處理 ng crud table 等內容。 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
193. 接續 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
194. 上一次 creat_at timestamp -> varchar(50) 有動到 SQL Service 可能造成 EF Models 有問題，所以先嘗試解決。( 確定就是此問題 )
195. 真實資料 GET 接著處理 Delete ， 成功刪除但是無更新 table 且為了新增測試資料又動了一次 SQL Service ... 似乎有更動到 BackgroundContext 所以果斷重新執行一次 ef cli
196. 覆蓋需要下強制指令 dotnet ef dbcontext scaffold "DBConnectionString" Microsoft.EntityFrameworkCore.SqlServer -o Models --force
197. 重複 get 一次資料更新 table 但是寫了重複的程式碼，趕時間所以先繼續，有機會再重構。
198. 接著要處理 Creat 與 Update 的頁面回到 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
206. 接續 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background/ClientApp>
207. 取得參數 private route: ActivatedRoute <https://angular.tw/tutorial/toh-pt5>，<https://ithelp.ithome.com.tw/articles/10226927>，<https://medium.com/chikuwa-tech-study/angular-%E7%AC%AC9%E8%AA%B2-%E8%B7%AF%E7%94%B1%E6%94%9C%E5%B8%B6%E5%8F%83%E6%95%B8-39a4d4f05448>
208. 參數傳遞成功，但出現小 bug 進入 edit 頁面後，因為與 publish 共用 posts component 所以 cleditor 不會重製，會直接消失 ...
209. 先利用 jq 將 cleditor 容器刪除一變再 new 還是空... ? <https://zhidao.baidu.com/question/562543561>
210. 嘗試各種生命週期還是無用，最後靠 router 轉址硬卡參數才成功 <https://angular.tw/guide/lifecycle-hooks>
211. 雖然複雜的 cleditor 渲染放在不同的生命週期會整個報錯，但是 title 還是要藉由不同生命週期去調整，最後終於完成連動 ... 洗個澡要來寫串接 api 功能了。

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
