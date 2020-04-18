$(document).ready(function() {
    htmlobj = $.ajax({
        type: "GET",
        url: "/assets/fakejson/api_SiteReception_2.json",
        async: false,
        success: function(data) {

            var url = 'News.html?id=';
            // checkdate 資料都是先 oderby ASC 了所以可以從第一筆直接順著一邊渲染一邊過濾 2013-2017
            var combination = '<div class="content_catalog"><div class="catalog_box">';
            for (i = 0; i < 4; i++) {
                combination += '<div class="catalog_box_column"><div class="year_title">1H-201' + (i + 4) + '</div></div>';
                combination += '<div class="catalog_box_column"><div class="year_title">2H-201' + (i + 4) + '</div></div>';
            }
            combination += '</div></div>';
            $('.catalog_box')[0].innerHTML = combination;
            // console.log($('.fack_catalog_box')[0]);
            var box = $('.catalog_box_column');
            for (i = 0; i < data.length; i++) {
                var gc = getcolor();
                var insidetext = '<div class="fack_catalog_box" style="background-color:';
                insidetext += gc.color + '"><a href="News.html?id=' + data[i].id + '&r=' + gc.r;
                insidetext += '&g=' + gc.g + '&b=' + gc.b + '"><p>' + data[i].id + '</p></a></div>';
                switch (data[i].year) {
                    case 2014:
                        if (data[i].month <= 6) {
                            box[0].innerHTML += insidetext;
                        } else {
                            box[1].innerHTML += insidetext;
                        };
                        break;
                    case 2015:
                        if (data[i].month <= 6) {
                            box[2].innerHTML += insidetext;
                        } else {
                            box[3].innerHTML += insidetext;
                        };
                        break;
                    case 2016:
                        if (data[i].month <= 6) {
                            box[4].innerHTML += insidetext;
                        } else {
                            box[5].innerHTML += insidetext;
                        };
                        break;
                    case 2017:
                        if (data[i].month <= 6) {
                            box[6].innerHTML += insidetext;
                        } else {
                            box[7].innerHTML += insidetext;
                        };
                        break;
                };
            };

            function getcolor() {
                var r, g, b, color;
                r = Math.floor(Math.random() * 200);
                g = Math.floor(Math.random() * 200);
                b = Math.floor(Math.random() * 200);
                color = 'rgb(' + r + ', ' + g + ', ' + b + ')';
                return { "color": color, "r": r, "g": g, "b": b };
            }
        },
        timeout: 20000,
        error: function() {
            alert('AJAX error !!!');
        }
    });
}, );

$(document).ready(
    function() {
        htmlobj = $.ajax({
            type: "GET",
            url: "/assets/fakejson/api_SiteReception_3.json",
            async: false,
            success: function(data) {

                console.log(data);

            },
            timeout: 20000,
            error: function() {
                alert('AJAX error !!!');
            }
        });
    });