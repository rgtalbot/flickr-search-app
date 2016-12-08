function searchApi(event) {
    event.preventDefault();
    var searchTerm = $('#search-input').val().trim();
    $("#search-input").val("");
    var queryTerm = searchTerm.toLowerCase().split(' ');
    queryTerm = queryTerm.join('+');
    $.get('/api/images/' + queryTerm)
        .then(function (results) {
            console.log(results.photos.photo.length);
            displayPhotos(results.photos.photo);

        })
        .catch(function (err) {
            console.log(err);
        });
}

function displayPhotos(obj) {
    $('#imgDiv').empty();
    if (obj.length < 1) {
        $("#imgDiv").append('<h1>No Search Results Found</h1>');
    }
    for (var i in obj) {
        var imgUrl = "https://farm" + obj[i].farm + ".staticflickr.com/" + obj[i].server + "/" + obj[i].id + "_" + obj[i].secret + "_h.jpg";
        var img = $('<img>')
            .attr('src', imgUrl)
            .addClass('searchImg');
        img.appendTo($("#imgDiv"));
    }
}