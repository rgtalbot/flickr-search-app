# Flickr Search API web app

### Overview: 
* Website that allows you to search and have images returned from the flickr api

### Requirements:
* Write a one-page app that uses the flickr photos search API via AJAJ (documented at https://www.flickr.com/services/api/flickr.photos.search.html) to search for images and display them.  
  
 1.  The images should be in a scrolling area and the search field should stay on the screen.  
  2.  When the user hits enter or presses the search button, it should refresh the display with the new results.  (Please turn ‘safe search’ to the safest setting for the results.)
  3.  Show the first 25 images.
  4.  Images in the scrolling areas should be resized to fit on-screen fully, and centered horizontally if they don’t reach the left and right edges of the containing element.
   
 * Please note that you will need to create a Flickr account and get a Flickr API key for use with this sample project.

### About: 
* I first started by building some tests with mocha and chai which was a huge help in figuring out how to get what I wanted back from the flicker api.
* From there I used jQuery on the front end to hit the server route which allows me to keep my API key hidden from the public.
* I used a couple of jQuery tricks to get the images to size to the window.
* Bonus, the images actually resize and you resize the window.

### Other: 
* I know its not a perfect web app, the styling and responsivness could you some more work, but the web app definitely functions as asked.