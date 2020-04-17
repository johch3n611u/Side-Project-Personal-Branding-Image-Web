$(document).ready(function() {
    htmlobj = $.ajax({
        type: "GET",
        url: "/assets/fakejson/api_SiteReception_1.json",
        async: false,
        success: function(data) {

            var url = '/News.html';
            // console.log(data);
            // console.log(data[0].id);

            for (i = 0; i < data.lenght; i++) {

                var id = data[i].id;
                var sort = data[i].sort;
                var title = data[i].title;
                var created_at = data[i].created_at;
                var content_text = data[i].content_text;
                var img_url = data[i].img_url;

                var combination = '<a href="' + url + id + '"><img src="' + img_url + '" alt="IMAGE">';
                combination += '<div class="container"><h4><b>' + sort + '.' + title + ' - ' + created_at + '</b></h4><p>';
                combination += content_text + '</p></div></a></div>';

                $('.card')[i].innerHTML = combination;
            }

        },
        timeout: 20000,
        error: function() {
            alert('AJAX error !!!');
        },
    });
});