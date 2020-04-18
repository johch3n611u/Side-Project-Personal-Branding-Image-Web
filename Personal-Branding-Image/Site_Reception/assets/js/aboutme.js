$(document).ready(function() {
    htmlobj = $.ajax({
        type: "GET",
        url: URLobj.prodpath.sitereception1,
        async: false,
        success: function(data) {
            console.log('URLobj.testpath.sitereception1=' + URLobj.prodpath.sitereception1);
            var url = 'News.html?id=';
            // console.log(document);
            // console.log(data[0].id);

            // console.log('log data.length=' + data.length);
            var datalength = data.length;
            // console.log('log var datalength=' + data.length);

            for (i = 0; i < data.length; i++) {

                var id = data[i].id;
                var sort = data[i].sort;
                var title = data[i].title;
                var created_at = data[i].created_at;
                var content_text = data[i].content_text;
                var img_url = data[i].img_url;

                var combination = '<a href="' + url + id + '"><img src="' + img_url + '" alt="IMAGE">';
                combination += '<div class="container"><h4><b>' + sort + '.' + title + ' - ' + created_at + '</b></h4><p>';
                combination += content_text + '</p></div></a></div>';
                // console.log(combination);

                $('.card')[i].innerHTML = combination;

                console.log('JQ AJAX for loop is Working.');
            }

        },
        timeout: 20000,
        error: function() {
            alert('JQ AJAX for loop is Error !!!');
        }
    });
});