/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Crossing Field", "Connect", "Travelers of the Wind", "Ai"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imgs = ["https://pm1.narvii.com/6512/4fcd195e39d42aa5292756574328bf88860428b5_hq.jpg", 
"http://37.media.tumblr.com/tumblr_n4blp3q4qY1sthzylo1_1397981847_cover.jpg",
"https://images-na.ssl-images-amazon.com/images/I/91NVoYwVWlL.jpg",
"https://vignette.wikia.nocookie.net/vocaloid/images/a/af/KARENT_presents_Snow_White_Record_feat._%E5%88%9D%E9%9F%B3%E3%83%9F%E3%82%AF.jpg/revision/latest?cb=20181201054141"];
var artists = ["LiSa", "ClaRis", "Joe Rinoie and Mizuno Saaya", "Deco*27"];
var lengths = ["4:08", "4:27", "4:27", "0:36"];
var links = ["https://www.youtube.com/watch?v=KId6eunoiWk", "https://www.youtube.com/watch?v=g1vw9ftAWSc", "https://www.youtube.com/watch?v=BiSu2y42030", "https://www.youtube.com/watch?v=tjjgIhDpKBw"];


 // BELOW Use forEach Loop to display the data from each of your array's in the correct div
songs.forEach(function(song) {
    $("#songs").append("<p>" + song + "</p>");
});

imgs.forEach(function(img) {
    $("#images").append("<img src='" + img + "'>");
});

artists.forEach(function(song) {
    $("#artists").append("<p>" + song + "</p>");
});

lengths.forEach(function(song) {
    $("#lengths").append("<p>" + song + "</p>");
});

links.forEach(function(song) {
    $("#links").append("<a target = none href='" + song + "'> YouTube Link </a>");
});

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#imgs").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.


}

$("#add").click(function() {
    emptySongInfo();
    addSongInfo();
    displaySongInfo();
});

displaySongInfo();

$("#add").click(function() {
    $("song").append();
});