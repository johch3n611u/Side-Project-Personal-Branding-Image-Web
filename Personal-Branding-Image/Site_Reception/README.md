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

<details><summary> JSON </summary>

```HTML

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