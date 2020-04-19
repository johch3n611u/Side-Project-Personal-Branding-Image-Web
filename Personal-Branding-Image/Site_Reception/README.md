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

## Dynamic render part 1

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
251. 莫名其妙沒改什麼就好了... -> <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/assets/js/aboutme.js>
252. 這邊其實應該將 url 拉出來做一個 shard data 的概念，但 js 不熟能跑就好，先繼續。
253. 這裡比較麻煩當初重於設計畫面，現在遇到的問題是資料過多或過少時都會破壞版面，所以必須有個固定的內容。

## Dynamic render part 2

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/dynamic_render_part2.png)

```HTML
 <div class="content_catalog">
            <div class="catalog_box">
                <div class="catalog_box_column">
                    <div class="year_title">2009</div>
                    <div class="fack_catalog_box">
                        <p>abc</p>
                    </div>
                    <div class="fack_catalog_box"> </div>
                    <div class="fack_catalog_box"> </div>
                    <div class="fack_catalog_box"> </div>
                </div>
                <div class="catalog_box_column">
                    <div class="year_title">2010</div>
                    <div class="fack_catalog_box"> </div>
                    <div class="fack_catalog_box"> </div>
                </div>
                <div class="catalog_box_column">
                    <div class="year_title">2011</div>
                    <div class="fack_catalog_box"> </div>
                    <div class="fack_catalog_box"> </div>
                    <div class="fack_catalog_box"> </div>
                </div>
                <div class="catalog_box_column">
                    <div class="year_title">2012</div>
                    <div class="fack_catalog_box"> </div>
                </div>
                <div class="catalog_box_column">
                    <div class="year_title">2013</div>
                    <div class="fack_catalog_box"> </div>
                    <div class="fack_catalog_box"> </div>
                    <div class="fack_catalog_box"> </div>
                </div>
                <div class="catalog_box_column">
                    <div class="year_title">2014</div>
                    <div class="fack_catalog_box"> </div>
                </div>
            </div>
        </div>
```

254. 吃個早餐回來再想...兩種可能性 1.今後繼續使用此程式紀錄 資料持續增加。2.只紀錄景觀 資料固定 四年每年上下季。 因之後有意使用 github.io 故選 2。
255. 新想法:隨機渲染 顏色 icon id ，帶參數過去 news 渲染 background
256. 後續應該會想辦法轉為吃 Mdf 資料，才有利於用筆電 demo 之類。
257. datetime 不好處理...可能要先進行一部分的 length 計算，寫死一點頂多 2013-2017 每年分兩季也才 8季 1H of 2019 -> <https://tw.answers.yahoo.com/question/index?qid=20091206000015KK06262>
258. 非常困難處理，只好從資料源頭處理 -> SELECT id,YEAR(created_at) AS year,MONTH(created_at) AS month  FROM news ORDER BY created_at ASC

原始錯誤邏輯

```JavaScript
for (i = 0; i < 8; i++) {
    var date = data[i].date;
    if (2013 - 01 < date < 2013 - 12) {}
    elseif() {}
    elseif() {}
    elseif() {}
    elseif() {}
    elseif() {}
    elseif() {}
    elseif() {}
};
//這邊很明顯就發現資料不固定的狀態下是很難分類的 ... 各種邏輯都怪怪的，只好寫更死直接先把 column 渲染出來再分類 ↑
for (i = 0; i < data.length; i++) {
    var id = data[i].id;
    var date = data[i].date;
    if () {}
    elseif() {}
    elseif() {}
    elseif() {}
    combination += '<div class="year_title">1H of 2013</div>'
};
```

NewJSON 結構

```JSON
[
    {
        "id": 49,
        "year": 2018,
        "month": 4
    },
    {
        "id": 50,
        "year": 2018,
        "month": 9
    },
    {
        "id": 47,
        "year": 2019,
        "month": 4
    },
    {
        "id": 46,
        "year": 2020,
        "month": 1
    },
    {
        "id": 51,
        "year": 2020,
        "month": 6
    }
]
```

259. 最終還是完成了，接著以下

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/dynamic_render_part3.png)

```HTML
<span class="content_onepage">
            <a href="News.html">
                <div class="onepage_box">
                    <div class="new_card">
                        <img src="../img/news_sample.jpg">
                        <h3>MAR 30TH, 2020 - BIG MOBILIZES 3D-PRINTED FACE SHIELD FOR HOSPITALS</h3>
                        <p>Our NYC Model Shop spearheaded by Bernardo Schuhmacher and Carlos Castillo is overseeing the
                            3D production of nearly
                            5,000 face shields a week to help protect the amazing medical mercenaries on the front lines
                            at The Mount Sinai Hospital
                            and Weill Cornell Medicine in New York City. We look forward to our London and Copenhagen
                            offices to follow suit in
                            supporting local medical institutions. See how you can join the efforts with the open-source
                            file initiated by Erik
                            Cederberg from 3DVerkstan here.</p>
                    </div>
                </div>
            </a>
            <a href="News.html">
                <div class="onepage_box">
                    <div class="new_card">
                        <img src="../img/news_sample.jpg">
                        <h3>MAR 30TH, 2020 - BIG MOBILIZES 3D-PRINTED FACE SHIELD FOR HOSPITALS</h3>
                        <p>Our NYC Model Shop spearheaded by Bernardo Schuhmacher and Carlos Castillo is overseeing the
                            3D
                            production of nearly
                            5,000 face shields a week to help protect the amazing medical mercenaries on the front lines
                            at The
                            Mount Sinai Hospital
                            and Weill Cornell Medicine in New York City. We look forward to our London and Copenhagen
                            offices to
                            follow suit in
                            supporting local medical institutions. See how you can join the efforts with the open-source
                            file
                            initiated by Erik
                            Cederberg from 3DVerkstan here.</p>
                    </div>
                </div>
            </a>
            <a href="News.html">
                <div class="onepage_box">
                    <div class="new_card">
                        <img src="../img/news_sample.jpg">
                        <h3>MAR 30TH, 2020 - BIG MOBILIZES 3D-PRINTED FACE SHIELD FOR HOSPITALS</h3>
                        <p>Our NYC Model Shop spearheaded by Bernardo Schuhmacher and Carlos Castillo is overseeing the
                            3D
                            production of nearly
                            5,000 face shields a week to help protect the amazing medical mercenaries on the front lines
                            at The
                            Mount Sinai Hospital
                            and Weill Cornell Medicine in New York City. We look forward to our London and Copenhagen
                            offices to
                            follow suit in
                            supporting local medical institutions. See how you can join the efforts with the open-source
                            file
                            initiated by Erik
                            Cederberg from 3DVerkstan here.</p>
                    </div>
                </div>
            </a>
            <a href="News.html">
                <div class="onepage_box">
                    <div class="new_card">
                        <img src="../img/news_sample.jpg">
                        <h3>MAR 30TH, 2020 - BIG MOBILIZES 3D-PRINTED FACE SHIELD FOR HOSPITALS</h3>
                        <p>Our NYC Model Shop spearheaded by Bernardo Schuhmacher and Carlos Castillo is overseeing the
                            3D
                            production of nearly
                            5,000 face shields a week to help protect the amazing medical mercenaries on the front lines
                            at The
                            Mount Sinai Hospital
                            and Weill Cornell Medicine in New York City. We look forward to our London and Copenhagen
                            offices to
                            follow suit in
                            supporting local medical institutions. See how you can join the efforts with the open-source
                            file
                            initiated by Erik
                            Cederberg from 3DVerkstan here.</p>
                    </div>
                </div>
            </a>
        </span>
```

260. 重新設計 img box 取代 img 避免跑版， news 應該也有這個問題 -> &lt;div class='img_box' style='background-image: url(https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/sample1.png?raw=true);width: 100%;'> &lt;/div>
261. 完成，最後兩部分一個是 news posts 畫面的取參數，渲染背景與文本，與把所有 fakejson 真正串上 web api 不過不知道會不會有 cors 問題。 -> <https://blog.csdn.net/csdn_ds/article/details/78393564>
262. 這個範例寫成函式庫，但因為時間關係不仿照提取看得懂需求部分直接處理。

![IMAGE](https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/blob/master/Personal-Branding-Image/Site_Reception/img/dynamic_render_part4.png)

```HTML
<div class="news_content">
        <h1>肺炎疫情：關於新型冠狀病毒，這九個問題我們尚無答案</h1>
        <h4>詹姆斯·加拉格爾（James Gallagher） BBC健康與科學事務記者</h4>
        <h4>2020年 3月 31日</h4>
        <hr/>
        <div class="img_box" style='background-image:url(../img/news_sample2.jpg);'> </div>
        <!-- <img src="../img/news_sample2.jpg"> -->
        <div class='posts_box'>去年12月，世界剛剛開始意識到新型冠狀病毒的出現，當時到現在，感覺恍若隔世。 全世界的科學家已經傾盡了難以想象的努力，但是仍然有很多東西，我們仍然未搞清楚；而現在，我們和整個地球都成為了尋找相關答案的大型實驗的一部分。 以下是其中一些仍然懸而未決的疑問： 1.到底有多少人被感染了？ 這是最基礎的問題之一，也是最決定性的。 全世界的確診感染數量已經有數以十萬計，但是這只能是感染總數的其中一部分。令這個數字進一步模糊的是那些無症狀的病例——這些人身上有這種病毒，但是卻沒有感覺自己有生病。開展病毒抗體測試將令研究人員知道一個人身上有沒有攜帶這種病毒，只有這樣我們才能知道，新型冠狀病毒傳播得有多遠，以及有多容易。 2. 它到底有多致命？ 在我們確切知道有多少宗病例之前，都不可能確定它的死亡率。 目前的估算是大約有1%的病毒感染者會死亡，但是如果存在大量的無症狀感染病者，死亡率可能會更低一些。 3. 完整的症狀範圍 新型冠狀病毒的主要症狀是發燒和乾咳——這些是你應該密切注意的。 有一些病例也有報告出現喉嚨痛、頭疼和腹瀉等，然後還有越來越多的推測稱有一些人還會失去嗅覺。但是，最重要的問題是，輕微的類似感冒的症狀，比如流鼻涕或者打噴嚏等，會不會出現在部分病人身上。 研究已經顯示，人們受到感染但是卻不知道自己攜帶病毒這種可能性是存在的。 圖片版權SCIENCE PHOTO LIBRARY 4. 病毒傳播與兒童 兒童當然是可能感染到病毒的，但是他們大多數都只會有輕微的症狀，而且兒童當中的死亡病例相較於其他年齡層要相對少。 兒童通常都是疾病的超級傳播者，部分原因是他們與很多人混在一起（常常是在兒童遊樂場）；不過有關這個病毒，目前不清楚兒童在它的傳播當中起了什麼樣的作用。5. 它到底是從哪裏來的？ 病毒在2019年末在中國的武漢出現，當時在一個野生動物市場當中出現大量病例。 這種冠狀病毒被官方稱作「Sars-CoV-2」，與一些感染蝙蝠的病毒非常近似，但是病毒被認為是從蝙蝠傳播到一種未知的物種身上，然後才傳染給人類。 這個「未知環節」仍然未有答案，並且可能是進一步感染的源頭。 6. 到了夏天，病例會少一些嗎？ 感冒和流感在冬天的月份裏要比夏天更常見一些，但是目前尚未知道，暖和的天氣會不會影響病毒的傳播。 英國政府的科學顧問已經警告，目前不清楚會不會出現季節性傳播。如果有的話，他們認為會如果到了夏天，新型冠狀病毒感染數字有大幅下降的話，那到冬天就會有大幅上升的風險。這樣的話，醫院就將不得不在處理平常的冬季諾如病毒病人大量出現的同時應對新冠病毒。 圖片版權GETTY IMAGES 7. 為什麼有些人的症狀更嚴重？ COVID-19對於大多數人來說都是輕症，但是有大約20%左右的人進一步發展成嚴重的疾病，為什麼會這樣？ 病人的免疫系統狀況似乎是一個因素，此外還可能有一些遺傳的因素。了解這方面的問題，可能會幫助找到方法避免病人進入需要重症監護的狀況。 8. 免疫能維持多久，以及你會不會第二次感染？關於病毒抗體的持續性，有很多的猜測，但是證據卻很少。 如果病人能成功抵抗病毒而痊癒，就必然形成了免疫反應。但是由於這種疾病剛出現了幾個月，目前並沒有形成長期的數據。有傳聞指病人被感染兩次，可能是由於檢測出現錯誤，誤以為他們已經沒有病毒。 有關免疫的問題，將會是了解病毒長遠將如何發展26的關鍵因素。 9. 病毒是否會變異？ 病毒發生變異26常事，但是大多數病毒基因密碼的轉變並不會帶來重大的變化。 按照常規，你會設想病毒在長遠的演化過程中會變得越來越不致命，但是這卻並非是絶對。 現在的擔心是，在病毒發生變異之後，免疫系統或許就不再認得它，於是特定的疫苗也不再奏效（流感病毒就是如此）。去年12月，世界剛剛開始意識到新型冠狀病毒的出現，當時到現在，感覺恍若隔世。 全世界的科學家已經傾盡了難以想象的努力，但是仍然有很多東西，我們仍然未搞清楚；而現在，我們和整個地球都成為了尋找相關答案的大型實驗的一部分。 以下是其中一些仍然懸而未決的疑問： 1.到底有多少人被感染了？ 這是最基礎的問題之一，也是最決定性的。 全世界的確診感染數量已經有數以十萬計，但是這只能是感染總數的其中一部分。令這個數字進一步模糊的是那些無症狀的病例——這些人身上有這種病毒，但是卻沒有感覺自己有生病。開展病毒抗體測試將令研究人員知道一個人身上有沒有攜帶這種病毒，只有這樣我們才能知道，新型冠狀病毒傳播得有多遠，以及有多容易。 2. 它到底有多致命？ 在我們確切知道有多少宗病例之前，都不可能確定它的死亡率。 目前的估算是大約有1%的病毒感染者會死亡，但是如果存在大量的無症狀感染病者，死亡率可能會更低一些。 3. 完整的症狀範圍 新型冠狀病毒的主要症狀是發燒和乾咳——這些是你應該密切注意的。 有一些病例也有報告出現喉嚨痛、頭疼和腹瀉等，然後還有越來越多的推測稱有一些人還會失去嗅覺。但是，最重要的問題是，輕微的類似感冒的症狀，比如流鼻涕或者打噴嚏等，會不會出現在部分病人身上。 研究已經顯示，人們受到感染但是卻不知道自己攜帶病毒這種可能性是存在的。 圖片版權SCIENCE PHOTO LIBRARY 4. 病毒傳播與兒童 兒童當然是可能感染到病毒的，但是他們大多數都只會有輕微的症狀，而且兒童當中的死亡病例相較於其他年齡層要相對少。 兒童通常都是疾病的超級傳播者，部分原因是他們與很多人混在一起（常常是在兒童遊樂場）；不過有關這個病毒，目前不清楚兒童在它的傳播當中起了什麼樣的作用。5. 它到底是從哪裏來的？ 病毒在2019年末在中國的武漢出現，當時在一個野生動物市場當中出現大量病例。 這種冠狀病毒被官方稱作「Sars-CoV-2」，與一些感染蝙蝠的病毒非常近似，但是病毒被認為是從蝙蝠傳播到一種未知的物種身上，然後才傳染給人類。 這個「未知環節」仍然未有答案，並且可能是進一步感染的源頭。 6. 到了夏天，病例會少一些嗎？ 感冒和流感在冬天的月份裏要比夏天更常見一些，但是目前尚未知道，暖和的天氣會不會影響病毒的傳播。 英國政府的科學顧問已經警告，目前不清楚會不會出現季節性傳播。如果有的話，他們認為會比感冒和流感規模小。如果到了夏天，新型冠狀病毒感染數字有大幅下降的話，那到冬天就會有大幅上升的風險。這樣的話，醫院就將不得不在處理平常的冬季諾如病毒病人大量出現的同時應對新冠病毒。 圖片版權GETTY IMAGES 7. 為什麼有些人的症狀更嚴重？ COVID-19對於大多數人來說都是輕症，但是有大約20%左右的人進一步發展成嚴重的疾病，為什麼會這樣？ 病人的免疫系統狀況似乎是一個因素，此外還可能有一些遺傳的因素。了解這方面的問題，可能會幫助找到方法避免病人進入需要重症監護的狀況。 8. 免疫能維持多久，以及你會不會第二次感染？關於病毒抗體的持續性，有很多的猜測，但是證據卻很少。 如果病人能成功抵抗病毒而痊癒，就必然形成了免疫反應。但是由於這種疾病剛出現了幾個月，目前並沒有形成長期的數據。有傳聞指病人被感染兩次，可能是由於檢測出現錯誤，誤以為他們已經沒有病毒。 有關免疫的問題，將會是了解病毒長遠將如何發展的關鍵因素。 9. 病毒是否會變異？ 病毒發生變異是常事，但是大多數病毒基因密碼的轉變並不會帶來重大的變化。 按照常規，你會設想病毒在長遠的演化過程中會變得越來越不致命，但是這卻並非是絶對。 現在的擔心是，在病毒發生變異之後，免疫系統或許就不再認得它，於是特定的疫苗也不再奏效（流感病毒就是如此）。去年12月，世界剛剛開始意識到新型冠狀病毒的出現，當時到現在，感覺恍若隔世。 全世界的科學家已經傾盡了難以想象的努力，但是仍然有很多東西，我們仍然未搞清楚；而現在，我們和整個地球都成為了尋找相關答案的大型實驗的一部分。 以下是其中一些仍然懸而未決的疑問： 1.到底有多少人被感染了？ 這是最基礎的問題之一，也是最決定性的。 全世界的確診感染數量已經有數以十萬計，但是這只能是感染總數的其中一部分。令這個數字進一步模糊的是那些無症狀的病例——這些人身上有這種病毒，但是卻沒有感覺自己有生病。
        </div>
        <a href="Products.html">
            <div class="bottom_box">
                See more &gt;&gt;
            </div>
        </a>
    </div>
```

263. 嘗試 shard.js 放個物件方便改 url

```JavaScript
var URLobj = {
    "testpath": {
        "sitereception1": "../assets/fakejson/api_SiteReception_1.json",
        "sitereception2": "../assets/fakejson/api_SiteReception_2.json",
        "sitereception3": "../assets/fakejson/api_SiteReception_3.json",
        "getnewsid": "/assets/fakejson/api_News_id.json"
    },
    "prodpath": {
        "sitereception1": "https://localhost:44367/api/SiteReception/1",
        "sitereception2": "https://localhost:44367/api/SiteReception/2",
        "sitereception3": "https://localhost:44367/api/SiteReception/3",
        "getnewsid": "https://localhost:44367/api/News/"
    }
};
```

264. 測試資料都成功了但真的就卡在這 cors 關... Access to XMLHttpRequest at 'https://localhost:44367/api/SiteReception/1' from origin 'http://127.0.0.1:8080' has been blocked by CORS policy: No 'Access-Control-Allow-Origin' header is present on the requested resource.
265. 嘗試依照處理 -> <https://blog.johnwu.cc/article/ironman-day26-asp-net-core-cross-origin-requests.html>
266. 成功!接著就是一些細節的整理， news 部分資料跑版了要確定問題，後台日期必須能更改 -> <https://ithelp.ithome.com.tw/articles/10194720>
267. 這裡就不動 datepick 了知道怎麼用即可，因為涉及到格式問題 api module 等等都要接著調整，時程上需要整理履歷了不然感不上時間，接著做總結。
268. 總結 : <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web>