$(document).ready(function() {

    var params = decodeURIComponent(window.location.search.substr(1)).split('&');
    // console.log(params); // ["id=51", "r=56", "g=126", "b=55"]
    var obj = '{';
    for (i = 0; i < params.length; i++) {
        obj += '"' + params[i].split("=")[0] + '":';
        obj += params[i].split("=")[1];
        if (i != params.length - 1) {
            obj += ','
        };
    }
    obj += '}';
    // console.log(obj)
    // console.log(JSON.parse(obj));
    if (obj != '{"":undefined}') {

        obj = JSON.parse(obj);
        // console.log('JSON Success to Obj. ↓');
        // console.log(obj);

    }

    htmlobj = $.ajax({
        type: "GET",
        url: URLobj.prodpath.getnewsid + obj.id,
        async: false,
        success: function(data) {
            // console.log('id=' + obj.id);
            // console.log(params.length);
            if (params.length > 0) {
                // console.log('params.length =' + params.length);
                var getcolor = 'rgba(' + obj.r + ',' + obj.g + ',' + obj.b + ',0.5)'
                console.log($('body').attr("style", "background-color:" + getcolor));
            }
            var combination;
            combination = '<h1>' + data.title;
            combination += '</h1><h4>[' + data.sort + '] - ' + data.subtitle + '</h4><h4>';
            combination += data.createdAt + '</h4><hr/><div class="img_box" style="background-image: url(';
            combination += data.imgUrl + ');"> </div><div class="posts_box">' + data.contentHtml;
            combination += '</div><a href="Products.html"><div class="bottom_box"> See more &gt;&gt; </div></a>';
            $('.news_content')[0].innerHTML = combination;

            // console.log(combination);

            // console.log($('.right_news')[0].innerHTML);
            // console.log($('.left_news')[0].innerHTML);
            $('.right_news')[0].innerHTML = '<a href="/News.html?id=' + (obj.id + 1) + '">&gt;</a>';
            $('.left_news')[0].innerHTML = '<a href="/News.html?id=' + (obj.id - 1) + '">&lt;</a>';

            console.log('AJAX Success.');
        },
        timeout: 20000,
        error: function() {
            alert('JQ AJAX for loop is Error !!!');
        }
    });
});