$(document).ready(function() {
    htmlobj = $.ajax({
        type: "GET",
        url: URLobj.prodpath.sitereception2,
        async: false,
        success: function(data) {
            // console.log(URLobj.prodpath.sitereception2);
            console.log('data=' + data);
            if (data != '') {
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
            }
        },
        timeout: 20000,
        error: function() {
            alert('AJAX error !!!');
        }
    });
}, );

// Dynamic Render Part 3

$(document).ready(
        function() {
            htmlobj = $.ajax({
                    type: "GET",
                    url: URLobj.prodpath.sitereception3,
                    async: false,
                    success: function(data) {
                        if (data != '') {
                            // console.log(data);
                            // console.log($('.content_onepage')[0].innerHTML);
                            // console.log(data.length);
                            var combination = '';
                            for (i = 0; i < data.length; i++) {

                                combination += '<a href="News.html?id=' + data[i].id;
                                combination += '"><div class="onepage_box"><div class="new_card"><div class="img_box" style="background-image: url(';
                                combination += data[i].img_url + ');"> </div><h3>' + data[i].created_at + ' - ' + data[i].title;
                                combination += ' , ' + data[i].subtitle + '</h3><p>' + data[i].content_text;
                                combination += ' </div></div></a>';

                            }
                            $('.content_onepage')[0].innerHTML = combination;
                            // console.log(combination);}
                        },
                        timeout: 20000,
                            error: function() {
                                alert('AJAX error !!!');
                            }
                    });
            });