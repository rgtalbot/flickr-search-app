var express = require('express');
var path = require('path');
var request = require('request');

var router = express.Router();


/**
 * Express router to return the home.html view when the page is loaded
 */
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './../public/home.html'));
});


/**
 * Express router that hits the flickr api.
 * req.params.q is the search query passed from the front end.
 */
router.get('/api/images/:q', function (req, res) {

    //Build out the query for the API request with all the parts in an array.
    var queryString = [
        //Base string for Flickr API Search
        "https://api.flickr.com/services/rest?",

        //Defining the method to use flickr.photos.search
        "method=flickr.photos.search",

        //My API Key from Flickr
        "api_key=a3142a0a67e082a83174aa868efedaef",

        //Adds the search from the search bar as the text for the query
        "text=" + req.params.q,

        //Formats the response to JSON
        "format=json",

        //Removes the callbackfucntion from the response
        "nojsoncallback=1",

        //Limit the search return to 25 per page
        "per_page=25",

        //Set safe search to 1 for safe
        "safe_search=1"
    ];


    /**
     *Join the array on the & and run the request query.
     * Parse the response given back and send that as the return from this get call.
     */
    request(queryString.join('&'), function (err, body, response) {
        if (err)
            console.log(err);
        var results = JSON.parse(response);
        res.send(results);
    });
});


module.exports = router;
