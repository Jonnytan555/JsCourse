var header = document.getElementById("myHeader");

// Change style of header
header.style="color:blue; background-color: red;"

// Write out the attribute
document.write(header.getAttribute("giraffe"));

// change the text of the targeted HTML
header.innerHTML = "Elephant Academy";

var link = document.getElementById("link");
link.href = "https://amazon.com";