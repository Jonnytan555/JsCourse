// Triggered events 

function handleClick(element) {
    alert("Clicked " + element.id);
}

// Programatic events
var header = document.getElementById("myHeader");

header.addEventListener("click", function() {
    alert("You clicked " + header.id);
});