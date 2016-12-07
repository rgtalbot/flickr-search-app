//dependencies
var clear = require('clear'),
    chai = require('chai'),
    expect = chai.expect,
    request = require('request');

//clear terminal to make it easier to watch the tests run run
clear();

/**
 * Mocha tests
 */
describe("Successful Flickr API call", function () {

    it('should return 200', function(done) {
        request("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=a3142a0a67e082a83174aa868efedaef&tags=monkey&format=json&per_page=25", function (err, body, res) {
            if (err)
                console.log(err);

            // console.log(body.statusCode);
            // console.log(body.body);

            expect(body.statusCode).to.equal(200);
            done();

        });
    });
});

describe('Successful Flickr API Response', function () {

    it('should return a JSON object', function(done) {
        request("https://api.flickr.com/services/rest/?&method=flickr.photos.search&api_key=a3142a0a67e082a83174aa868efedaef&tags=monkey&format=json&jsoncallback=?&per_page=25&nojsoncallback=1", function (err, body, res) {
            if (err)
                console.log(err);
            var results = JSON.parse(res);
            // console.log(results.photos.photo[0]);
            expect(results.photos.photo[0]).to.be.a('object');
            done();

        });
    })
});


