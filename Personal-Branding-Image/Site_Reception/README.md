# Hello, world

## Wireframe

<https://www.figma.com/file/Trw2pDqLBz8ximcE1r0cDk/Personal-Branding-Image-Web?node-id=0%3A1>

218. 首先將寫好的靜態網站利用 fireshot 將整個頁面下來確定哪些地方是動態的，才能確定景觀建築專案的內容該如何整理。
219. Sitemap 如下

## Sitemap

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/sitemap.png)

## HomePage

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/homepage.gif)

## AboutMePage

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/aboutme.png)

## ProductsPage

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/productspage.png)

## PostsPage

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/postspage.png)

220. 這裡我分為 dynamic render api 與 link with parameter query ， 打算都用參數對單一 api 接口再利用參數對這幾個需求作分別，統一用 get 接口。 <https://dotblogs.com.tw/topcat/2013/04/09/101158>
221. 所以首先還是要回 .net core 設計 api 接口 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>

---------------------------------

234.　API Response ↓ (應該照理來說是要寫一個基本　API　文件頁面的，記得後端有 Swagger 套件能較美觀較快速地完成，這邊先不談) -> <https://kevintsengtw.blogspot.com/2015/12/aspnet-web-api-swagger.html>

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/api_document.png)

<details><summary> JSON </summary>

```HTML

限制 api response header :
// https://docs.microsoft.com/zh-tw/aspnet/core/web-api/advanced/formatting?view=aspnetcore-3.1
[ApiController]
[Route("[controller]")]
[Produces("application/json")]
public class WeatherForecastController : ControllerBase
{


Path : https://localhost:44367/

GET: api/SiteReception/1

[
    {
        "id": 49,
        "sort": "asdasdasdasd",
        "title": "dasdasd",
        "subtitle": "dasdasdasdasd",
        "content_text": "asdadada",
        "content_html": "asdadada",
        "img_url": "asdasdsada",
        "created_at": "2020-04-16 11:11:48"
    },
    {
        "id": 47,
        "sort": "測試",
        "title": "測試",
        "subtitle": "測試",
        "content_text": "測試",
        "content_html": "<div style=\"text-align: center;\">測試<img src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/California_123.svg/449px-California_123.svg.png\"></div>",
        "img_url": "測試s",
        "created_at": "2020-04-15 23:09:36"
    },
    {
        "id": 51,
        "sort": "測試5",
        "title": "測試5",
        "subtitle": "測試5",
        "content_text": "測試5",
        "content_html": "測試5",
        "img_url": "測試5",
        "created_at": "2020-04-16 20:45:21"
    },
    {
        "id": 46,
        "sort": "首篇",
        "title": "後台完成感想",
        "subtitle": "劉育誠編輯",
        "content_text": "登入功能是將資料存取與邏輯判斷都拉出來至共用服務層，感覺結構簡潔易讀好擴充，本來文章 CRUD 不使用此方法是想體驗 @Input @Ouput 方式，後來卻發現那只適用於父子 Component ，中間結合像是 cleditor 套件也有一些問題，後來只要超過半天我還沒想到解法的問題都會上台灣 angular tw 社群詢問，也感謝蠻多大大的幫忙，都過一至兩個小時問題就解決了，接著就要將一些 demo 景觀建築設計專案的內容發上來，就要執行前台的 AJAX 取資料了，感覺此次 Angular & DotNET Core Demo ，因為急著要拿來面試的關係，所以像是資安部分等等的都較無考量，以一切最快能動為主，廢話太多了繼續開工...\n",
        "content_html": "<div style=\"text-align: left;\">登入功能是將資料存取與邏輯判斷都拉出來至共用服務層，感覺結構簡潔易讀好擴充，本來文章 CRUD 不使用此方法是想體驗 @Input @Ouput 方式，後來卻發現那只適用於父子 Component ，中間結合像是 cleditor 套件也有一些問題，後來只要超過半天我還沒想到解法的問題都會上台灣 angular tw 社群詢問，也感謝蠻多大大的幫忙，都過一至兩個小時問題就解決了，接著就要將一些 demo 景觀建築設計專案的內容發上來，就要執行前台的 AJAX 取資料了，感覺此次 Angular &amp; DotNET Core Demo ，因為急著要拿來面試的關係，所以像是資安部分等等的都較無考量，以一切最快能動為主，廢話太多了繼續開工...<br></div>",
        "img_url": "",
        "created_at": "2020-04-15 18:29:51"
    }
]

GET: api/SiteReception/2

[
    {
        "id": 46,
        "subtitle": "劉育誠編輯",
        "date": "2020-04"
    },
    {
        "id": 47,
        "subtitle": "測試",
        "date": "2020-04"
    },
    {
        "id": 49,
        "subtitle": "dasdasdasdasd",
        "date": "2020-04"
    },
    {
        "id": 50,
        "subtitle": "測試",
        "date": "2020-04"
    },
    {
        "id": 51,
        "subtitle": "測試5",
        "date": "2020-04"
    }
]

GET: api/SiteReception/3

[
    {
        "id": 51,
        "title": "測試5",
        "subtitle": "測試5",
        "content_text": "測試5",
        "img_url": "測試5",
        "created_at": "2020-04-16 20:45:21"
    },
    {
        "id": 50,
        "title": "測試",
        "subtitle": "測試",
        "content_text": "測試測試測試測試測試測試測試",
        "img_url": "測試",
        "created_at": "2020-04-16 11:12:46"
    },
    {
        "id": 49,
        "title": "dasdasd",
        "subtitle": "dasdasdasdasd",
        "content_text": "asdadada",
        "img_url": "asdasdsada",
        "created_at": "2020-04-16 11:11:48"
    },
    {
        "id": 47,
        "title": "測試",
        "subtitle": "測試",
        "content_text": "測試",
        "img_url": "測試s",
        "created_at": "2020-04-15 23:09:36"
    },
    {
        "id": 46,
        "title": "後台完成感想",
        "subtitle": "劉育誠編輯",
        "content_text": "登入功能是將資料存取與邏輯判斷都拉出來至共用服務層，感覺結構簡潔易讀好擴充，本來文章 CRUD 不使用此方法是想體驗 @Input @Ouput 方式，後來卻發現那只適用於父子 Component ，中間結合像是 cleditor 套件也有一些問題，後來只要超過半天我還沒想到解法的問題都會上台灣 angular tw 社群詢問，也感謝蠻多大大的幫忙，都過一至兩個小時問題就解決了，接著就要將一些 demo 景觀建築設計專案的內容發上來，就要執行前台的 AJAX 取資料了，感覺此次 Angular & DotNET Core Demo ，因為急著要拿來面試的關係，所以像是資安部分等等的都較無考量，以一切最快能動為主，廢話太多了繼續開工...\n",
        "img_url": "",
        "created_at": "2020-04-15 18:29:51"
    }
]

GET: api/News/id

{
    "id": 46,
    "sort": "首篇",
    "title": "後台完成感想",
    "subtitle": "劉育誠編輯",
    "contentText": "登入功能是將資料存取與邏輯判斷都拉出來至共用服務層，感覺結構簡潔易讀好擴充，本來文章 CRUD 不使用此方法是想體驗 @Input @Ouput 方式，後來卻發現那只適用於父子 Component ，中間結合像是 cleditor 套件也有一些問題，後來只要超過半天我還沒想到解法的問題都會上台灣 angular tw 社群詢問，也感謝蠻多大大的幫忙，都過一至兩個小時問題就解決了，接著就要將一些 demo 景觀建築設計專案的內容發上來，就要執行前台的 AJAX 取資料了，感覺此次 Angular & DotNET Core Demo ，因為急著要拿來面試的關係，所以像是資安部分等等的都較無考量，以一切最快能動為主，廢話太多了繼續開工...\n",
    "contentHtml": "<div style=\"text-align: left;\">登入功能是將資料存取與邏輯判斷都拉出來至共用服務層，感覺結構簡潔易讀好擴充，本來文章 CRUD 不使用此方法是想體驗 @Input @Ouput 方式，後來卻發現那只適用於父子 Component ，中間結合像是 cleditor 套件也有一些問題，後來只要超過半天我還沒想到解法的問題都會上台灣 angular tw 社群詢問，也感謝蠻多大大的幫忙，都過一至兩個小時問題就解決了，接著就要將一些 demo 景觀建築設計專案的內容發上來，就要執行前台的 AJAX 取資料了，感覺此次 Angular &amp; DotNET Core Demo ，因為急著要拿來面試的關係，所以像是資安部分等等的都較無考量，以一切最快能動為主，廢話太多了繼續開工...<br></div>",
    "imgUrl": "",
    "createdAt": "2020-04-15 18:29:51"
}

```

</details>

235. 接續 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>
236. 動態編譯的部分可能可以嘗試 VS .NET Core API 開著，再利用　VS Code LiveService 去開 Site_Reception 會較快。今日先到這
237. 前台動態渲染使用 CDN JQ -> ctrl + p -> keyword >cdnjs -> search for library -> library name
238. body 底部引入 -> <https://www.twblogs.net/a/5b8756c92b71775d1cd698bb>
239. 這邊渲染部分好像也可以分成兩種做法 1. service 在處理資料時就處理成能渲染成畫面的 HTML 傳純 Text 至 client 直接用簡單 js 處理 innerHTML 即可解決。 2.傳 JSON 至前端利用 JQ 等前端函式庫處理，做法較活也能配合各個套件。
240. 比較來說其實第二種也不一定活，因為每種函式庫或套件的需求 JSON 格式也不一樣，不一定能一份 JSON 滿足所有，但在前公司已經嘗試過第一種方式，所以這邊嘗試第二種方式。
241. 首先先利用 JQ 拿取後端資料，先建立 fake.json 較好操作。-> <https://www.w3school.com.cn/jquery/ajax_ajax.asp>
242. 類似於套版?其實就是套版? 所以先來看第一個部分

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/dynamic_render_part1.png)

```HTML
<div class="content_3">
            <div class="top_box">PROGRAMMING / DESIGNING _ SELECTED PROJECTS</div>
            <a href="Products.html">
                <div class="bottom_box">
                    See more &gt;&gt;
                </div>
            </a>
            <div class="card">
                <a href="Products.html">
                    <!-- img size 412pxx412px -->
                    <img src="../img/sample1.png" alt="IMAGE">
                    <div class="container">
                        <h4><b>福德坑開發規劃 - 2020/07</b></h4>
                        <p>
                            福德坑環保復育公園－六日假日限定！全國最大免費滑草場景點福德坑環保復育公園－六日假日限定！全國最大免費滑草場景點福德坑環保復育公園－六日假日限定！全國最大免費滑草場景點福德坑環保復育公園－六日假日限定！全國最大免費滑草場景點／免費停車，刺激又好玩～野餐／放風箏／踏青／親子同樂好開心！福德坑環保復育公園－六日假日限定！全國最大免費滑草場景點／免費停車，刺激又好玩～野餐／放風箏／踏青／親子同樂好開心！
                        </p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="Products.html">
                    <img src="../img/sample2.png" alt="IMAGE">
                    <div class="container">
                        <h4><b>世界十大建築奇蹟第二名佛洛倫薩大教堂穹頂 - 2007</b></h4>
                        <p>
                            義大利佛洛倫薩大教堂穹頂於1420年至1436年間建造，雖然橫跨長度為140英尺(約42米)，但此穹頂在建造時並沒有使用可支持的框架。建築工程師菲利普·布魯內萊斯基在設計建造該穹頂時曾大膽預言，無需任何內部腳手架，這在當時那個年代是不可能做到的。但是，他發明了一種全新的方式——分擔圓頂周圍的荷載，所以圓頂不會分裂。他還將一些石頭和鐵緊密粘合在一起，形成鎖鏈，並用人字斜紋磚堆砌保證了圓頂不會開裂，因此成為世界十大建築奇蹟第二名。
                        </p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="Products.html">
                    <img src="../img/sample3.png" alt="IMAGE">
                    <div class="container">
                        <h4><b>世界十大建築奇蹟第三名土耳其聖索非亞大教堂 - 2018</b></h4>
                        <p>
                            據說，土耳其伊斯坦堡的聖索非亞大教堂改變了建築史，它開創了間接荷載傳遞的理念，該建築的設計師大膽地說，穹頂不必從上直通地面。相反，穹頂以扇形的方式通向更多的圓頂。這一方法的應用促進了建築業的大發展。當時它成為1000多年來最大的禮拜場所，直到1520年建造了塞維亞大教堂。
                        </p>
                    </div>
                </a>
            </div>
            <div class="card">
                <a href="Products.html">
                    <img src="../img/sample4.png" alt="IMAGE>
                    <div class="container">
                        <h4><b>荷蘭三角洲工程 -2007</b></h4>
                        <p>
                            關鍵是堵截通向安特衛普市和鹿特丹市的河口。其基本前提很簡單：儘量減少海堤壩的決堤。但工程非常巨大，整個海岸線都改變了。整個工程包括12個大項目，1954年開始設計，1956年動工，1986年宣布竣工並正式啟用，共耗資120億荷盾。一些海灣的入口被大壩封閉，使得海岸線縮短了700公里。三角洲工程使荷蘭西南部地區擺脫了水患的困擾，改善了鹿特丹至比利時安特衛普的交通，促進了該地區、乃至全荷蘭的經濟發展。
                        </p>
                    </div>
                </a>
            </div>
        </div>
    </div>
```

243. JQ 要求方法，似乎有蠻多種的 -> <https://www.w3school.com.cn/jquery/jquery_ajax_get_post.asp>
244. 以往並沒有仔細了解 JQ 能幹嘛，都是局部的應用去使用，應該花點時間針對文件看一下，跟 JS 一樣，不過大致上看 Sidenav 能了解有啥使用方式..
245. 但是為求時間就先參考 <https://codertw.com/%E5%89%8D%E7%AB%AF%E9%96%8B%E7%99%BC/386334/> <https://awpluway.pixnet.net/blog/post/364195038>
246. 這邊遇到一個問題是，當初沒有考慮到動態渲染問題， card div 外沒有用 div 容器包住它，現在包會造成排版問題，想到兩個解法，1.設置外殼改善跑版問題後動態刪除內容在動態產生。2.一個一個的置換現有內容內的資料。
247. 以往沒有試過這種方式套版，嘗試第二種，接下來其他頁面如符合第一種需求再利用第一種。 -> <https://www.w3school.com.cn/jquery/jquery_dom_add.asp>
248. Empty is not a function [duplicate] <https://stackoverflow.com/questions/44073126/empty-is-not-a-function>
249. 動態渲染成功一頁，在靜態頁面間互傳遞參數上遇到問題才發現，原來只有動態網頁才會帶有參數... -> <https://blog.csdn.net/csdn_ds/article/details/78393564>
250. 結果似乎是 ajax data length 抓取出錯，才導致 get 網址出不來，應該是小事 <https://stackoverflow.com/questions/46660460/how-to-find-the-length-of-success-data-in-jquery-ajax>
