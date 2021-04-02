var playButton = document.querySelector(".circle")

function printError(err){
    var errorBlock = $("<div>");
    errorBlock.attr("id", "error");
    errorBlock.text(err);
    errorReset();
}

function errorReset(){
    setTimeout(() => {
        $("#error").remove();
    }, 5000);
}

function getKanyeQuote(){
    fetch("https://api.kanye.rest/")
    .then(response => {
        if(response.ok) return response.json();
        else{
            // Update html with div to print error
            printError("Error: Could not retrieve data.");
        }
    })
    .then(data => {
        console.log(data.quote);
        // give div elements to place quote in
        $("#myModal").find("h2").text(data.quote);
    })
    .catch(error => {
        // Update html with div to print error
        printError("Error: Could not connect to server.");
    });
}

var getSong = function() {
    fetch("https://api.napster.com/v2.2/artists/art.5015309/tracks/top?apikey=YTRjNjdmMDUtYjAwMS00NjYxLThkNjEtNGU1ZDU5OGRlZTA4")
    .then(response => {
     if(response.ok) return response.json();
    })
    
    .then(data => {
        console.log(data)
    var randomNumber = Math.floor(Math.random() * 20)
    
    var song = (data.tracks[randomNumber].previewURL); 
    
    var divEl = document.getElementById("audio-player")
    divEl.innerHTML = ""
    var audioEl = document.createElement("audio")
    audioEl.setAttribute("controls", "controls")
    audioEl.setAttribute("autoplay", "autoplay")
    audioEl.setAttribute("style", "display:none;")
    var sourceEl = document.createElement("source")
    sourceEl.setAttribute("src", song)
    audioEl.appendChild(sourceEl)
    divEl.appendChild(audioEl)
    })
        .catch(error => {
        // Update html with div to print error
        $("#someId").text("Error: Could not connect to server.");
        errorReset();
    });
};


// place all jquery here that involves events
$(document).ready(function () {
    // Incomplete quote container creator
    $("#quote-container").on("click", "button", function(){
        console.log($("#modalPlaceholder").children().length);
        if($("#modalPlaceholder").children().length === 1) getKanyeQuote();
        else{
            var modalEl = $("<div>");
            modalEl.attr("id", "myModal");
            modalEl.attr("style", "display: block");
            modalEl.addClass("modal");
            
            var h2El = $("<h2>");
            modalEl.append(h2El);
            getKanyeQuote();
            $("#modalPlaceholder").append(modalEl);
        }
    });

});

playButton.addEventListener("click", getSong)
