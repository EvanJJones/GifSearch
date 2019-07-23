function getGifs(searchTerm) {

    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=S8V0rc7PKunaLSNh6MkcXe3qnxaveF0F&limit=5";

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
    });
}
//path to image
//  data[0].images.original.url
function displayGifs(response) {

}