var RecordButton = document.querySelector("record-section");
var modal = document.getElementById("myModal");
var QuoteSection = document.querySelector("quote-section");
var recordContainer = document.querySelector("record-container");
var quoteContainer = document.querySelector("quote-container");
var span = document.getElementsByClassName("close")[0];

var ButtonClickHandler = function(event) {
    var record = event.target.getSong("record-section");
    if(record) {
        getUserSong(record);
    //clear older content
    recordContainer.textContent = "";
    }
// Quote Button click
    var quote = event.target.getQuote("quote-section");
    if(quote) {
        getUserQuote(quote);
        quoteContainer.textContent = "";
    }

    //modal popup for quote
    QuoteSection.onclick = function() {
        modal.style.display = "block";
    }
    span.onclick = function() {
        modal.style.display = "block";
    }
    window.onclick = function(event) {
        if(event.target == modal) {
            modal.style.display = "block";
        }
    }

    // event listener for button containers
RecordButton.addEventListener("click", ButtonClickHandler);
QuoteSection.addEventListener("click", ButtonClickHandler);

};




// API fetch for Record Button
var getUserSong = function(user) {

// API url Record
var apiUrlRecord = "" + user + "";
// fetch request record
fetch(apiUrlRecord)
.then(function(response) {
    if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
            displaySong(data, user);
        });
};



// API fetch for Kanye quote
var getUserQuote = function(user) {

// API URL Kanye
var apiUrlKanye = "" + user + "";

// fetch request to api 
fetch(apiUrlKanye)
.then(function(response) {
    //successful request
    if (response.ok) {
        console.log(response);
        response.json().then(function(data) {
            console.log(data);
            displayQuote(data, user);
        });
};

