/* global $ */

// BELOW Update the songs array with four of your favorites songs.
var songs = ["Crossing Field", "Connect", "Travelers of the Wind", "Parallel Hearts"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imgs = [];
var artists = [];
var lengths = [];
var links = [];




    // BELOW Use forEach Loop to display the data from each of your array's in the correct div



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
