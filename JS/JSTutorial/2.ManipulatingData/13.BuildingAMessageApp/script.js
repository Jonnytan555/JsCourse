// Programatic events
var messages = document.getElementById("messages");
var textbox = document.getElementById("textbox");
var buttons = document.getElementById("butttons");


// target the button with an event listener
button.addEventListener("click", function() {
    // parse name of element we want to create (a list)
    var newMessage = document.createElement("li");
    newMessage.innerHTML = textbox.value;
    // Store the text in the text box
    messages.appendChild(newMessage);
    // Finally make the box blank after we press send
    textbox.value = "";
});