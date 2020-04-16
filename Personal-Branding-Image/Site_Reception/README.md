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

GET: api/SiteReception/2

GET: api/SiteReception/3

GET: api/News/id

```

</details>

235. 接續 <https://github.com/johch3n611u/Side-Project-Personal-Branding-Image-Web/tree/master/Personal-Branding-Image/Website_Background>
236. 動態編譯的部分可能可以嘗試 VS .NET Core API 開著，再利用　VS Code LiveService 去開 Site_Reception 會較快。今日先到這
237. 前台動態渲染使用 CDN JQ -> ctrl + p -> keyword >cdnjs -> search for library -> library name