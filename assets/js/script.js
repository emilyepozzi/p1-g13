function errorReset(){
    setTimeout(() => {
        $("#someId").text("");
    }, 5000);
}

function getKanyeQuote(){
    fetch("https://api.kanye.rest/")
    .then(response => {
        if(response.ok) return response.json();
        else{
            // Update html with div to print error
            $("#someId").text("Error: Could not retrieve data.");
            errorReset();
        }
    })
    .then(data => {
        console.log(data.quote);
        // give div elements to place quote in
        $("#someId").text(data.quote);
    })
    .catch(error => {
        // Update html with div to print error
        $("#someId").text("Error: Could not connect to server.");
        errorReset();
    });
}

function getNapsterApi(){

}



// place all jquery here that involves events
$(document).ready(function () {
    // Incomplete quote container creator
    $("#quote-section").on("click", "button", function(){
        var modalEl = $("<div>");
        modalEl.attr("id", "myModal");
        modalEl.attr("style", "display: block");
        
        var h2El = $("<h2>");
        
    });

});

getKanyeQuote();