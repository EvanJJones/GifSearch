function getGifs(searchTerm) {
    $("#gallery").html("")
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=S8V0rc7PKunaLSNh6MkcXe3qnxaveF0F&q=" + searchTerm + "&limit=5&offset=0&rating=G&lang=en";
    console.log(queryURL);
    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function(response) {
        if (response.Response === "False") {
            alert(response.Error);
        } else {
            //this is what will get executed if it works
            displayGifs(response);

        }
    })
}
//path to image
//  data[0].images.original.url
function displayGifs(response) {
    for (var i = 0; i < 5; i++) {
        var imgUrl = response.data[i].images.original.url;
        console.log(imgUrl);
        $("#gallery").append("<img src='" + imgUrl + "'>")
    }
}


console.log("test")
$("#search").on("click", searchGifs);


function searchGifs() {
    var searchTerm = $("#searchTerm").val();
    getGifs(searchTerm);
    console.log(searchTerm);
}