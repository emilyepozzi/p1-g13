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
        $("#myModal").find("h2").text(data.quote);
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