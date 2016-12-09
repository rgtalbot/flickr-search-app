var search = $('#search-input'),
    imgDiv = $('.imgDiv');

/**
 *  searchApi runs when the form is submitted.
 *  The search term is fetched and stored locally and then deleted from the input value
 *  The search term is formatted appropriately and then passed as part of the Ajax call url so the router can get it to use.
 *  On a successful callback from the api route, the displayPhotos function is run with the object of photos
 *
 * @param event Event is passed in so that event.preventDefault() will stop the window from refreshing on submit
 */
function searchApi(event) {

    event.preventDefault();

    var searchTerm = search.val().trim();

    search.val("");

    var queryTerm = searchTerm.toLowerCase().split(' ');

    $.get('/api/images/' + queryTerm.join('+'))
        .then(function (results) {

            displayPhotos(results.photos.photo);

        })
        .catch(function (err) {

            console.log(err);

        });
}

/**
 *  Function takes the photo array passed to it and builds out the image url for each object in the array
 *  Then assigns the url to an <img> tag appends it to the imgDiv
 *  Once an image is appended, the photos are resized to fit the window
 *
 * @param arr Photo array passed in that contains the information to build the photo url
 */
function displayPhotos(arr) {

    imgDiv.empty();

    if (arr.length < 1)
        imgDiv.append('<h1>No Search Results Found</h1>');

    for (var i in arr) {
        var imgUrl = "https://farm" + arr[i].farm + ".staticflickr.com/" + arr[i].server + "/" + arr[i].id + "_" + arr[i].secret + "_h.jpg";
        var row = $('<div>')
            .addClass('row text-center');
        var img = $('<img>')
            .attr('src', imgUrl)
            .attr('alt', arr[i].title);
        img.appendTo(row);
        row.appendTo(imgDiv);
        resizePhotos();
    }
}

/**
 * Window listener that runs the resize photo function when the window changes sizes
 */
$(window).resize(function () {
    resizePhotos();
});

/**
 * Function to set the css height of the image to the window height.
 */
function resizePhotos() {
    $('.imgDiv img').css('height', ($(window).height() - 70) + "px");
}