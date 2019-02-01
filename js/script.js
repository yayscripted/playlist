/* global $ */
/*global Window*/
var localStorage = Window.localStorage;
// BELOW Update the songs array with four of your favorites songs.
var songs = ["Crossing Field", "Connect", "Travelers of the Wind", "Ai", "Rightfully"];
// BELOW Add 4 More arrays to store images_links, artists, song lengths, and links for each song
// Make sure they match the same order as your array above
var imgs = ["https://i.ytimg.com/an_webp/71dKWBFmu8M/mqdefault_6s.webp?du=3000&sqp=CI7kzeIF&rs=AOn4CLBwo_xNwcJhYNSOH--UkcdYDTqaZA", 
"https://i.ytimg.com/an_webp/_HudC71bmlg/mqdefault_6s.webp?du=3000&sqp=CJCSzuIF&rs=AOn4CLBPyB7HAVE1gEKOV8kvb_X9k1GsVg",
"https://i.ytimg.com/an_webp/BiSu2y42030/mqdefault_6s.webp?du=3000&sqp=CNqtzuIF&rs=AOn4CLCnPTiDOzdM3aF8h4qYm1YbU7GeqA",
"https://i.ytimg.com/an_webp/RHqOdDG3Jjg/mqdefault_6s.webp?du=3000&sqp=CICGzuIF&rs=AOn4CLASWpRjTUP5nJj3B2zMM9C2xT1qOg",
"https://i.ytimg.com/an_webp/7z4WJAEG3u8/mqdefault_6s.webp?du=3000&sqp=CMKJzuIF&rs=AOn4CLAY7xHfecuzVENP3AByftgQz0mdLA"];
var artists = ["LiSa", "ClaRis", "Joe Rinoie and Mizuno Saaya", "Deco*27", "Mili"];
var lengths = ["4:08", "4:27", "4:27", "4:31", "3:31"];
var links = ["https://www.youtube.com/watch?v=KId6eunoiWk", "https://www.youtube.com/watch?v=g1vw9ftAWSc", "https://www.youtube.com/watch?v=BiSu2y42030", "https://www.youtube.com/watch?v=RHqOdDG3Jjg", "https://www.youtube.com/watch?v=7z4WJAEG3u8"];

 // BELOW Use forEach Loop to display the data from each of your array's in the correct div

function emptySongInfo(){
    $("#songs").empty();
    // Use jQuery to empty all of the remaining divs
    $("#images").empty();
    $("#artists").empty();
    $("#lengths").empty();
    $("#links").empty();

}


function addSongInfo(){
    // BELOW write the code to add new items to each of the arrays.
    songs.push($("#song").val());
    imgs.push($("#image").val());
    artists.push($("#artist").val());
    lengths.push($("#length").val());
    links.push($("#link").val());


}

function displaySongInfo(){
    songs.forEach(function(song) {
    $("#songs").append("<p>" + song + "</p>");
    });
    
    imgs.forEach(function(img) {
        $("#images").append("<img src='" + img + "'>");
    });
    
    artists.forEach(function(artist) {
        $("#artists").append("<p>" + artist + "</p>");
    });
    
    lengths.forEach(function(length) {
        $("#lengths").append("<p>" + length + "</p>");
    });
    
    links.forEach(function(song) {
        $("#links").append("<a target = none href='" + song + "'> YouTube Link </a>");
    });

}

$("#add").click(function() {
    addSongInfo();
    emptySongInfo();
    displaySongInfo();
});

$("#delete").click(function() {
    songs.pop();
    imgs.pop();
    artists.pop();
    lengths.pop();
    links.pop();
    emptySongInfo();
    displaySongInfo();
});

$("#save").click(function() {
    localStorage.setItem('songs', JSON.stringify(songs));
    var getObject = JSON.parse(localStorage.getItem('songs'));
});