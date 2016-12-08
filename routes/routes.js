var express = require('express');
var path = require('path');
var request = require('request');

var router = express.Router();


//HOMEPAGE
router.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, './../public/home.html'));
});


//GET
router.get('/api/images/:q', function (req, res) {
    console.log(req.params.q);

    //Base string for Flickr API Search
    var queryString = "https://api.flickr.com/services/rest?";
    //Defining the method to use flickr.photos.search
    queryString += "&method=flickr.photos.search";
    //My API Key from Flickr
    queryString += "&api_key=a3142a0a67e082a83174aa868efedaef";
    //Adds the search from the search bar as the tags for the query
    queryString += "&tags=" + req.params.q;
    //Formats the response to JSON
    queryString += "&format=json";
    //Removes the callbackfucntion from the response
    queryString += "&nojsoncallback=1";
    //Limit the search return to 25 per page
    queryString += "&per_page=25";
    //Set safe search to 1 for safe
    queryString += "&safe_search=1";
    request(queryString, function (err, body, response) {
        if (err)
            console.log(err);
        var results = JSON.parse(response);
        res.send(results);
    });
});

//SEND
// router.post('/api/images', function(req, res) {
//
// });
//
// router.delete('/api/images', function(req, res) {
//
// });


module.exports = router;
