document.write("<h1>For Loops</h1>");
document.write("<hr>");

document.write("<h2>For Loop</h2>");

for (var i=0; i < 5; i++) {
    document.write(i);
}

document.write("<h2>For Each</h2>");

luckyNumbers = [ 2,4,5,8,2];

luckyNumbers.forEach(function(luckyNumb) {
    document.write(luckyNumb + "<br>");
})

document.write("<h2>For Each with Lambda</h2>");

luckyNumbers.forEach(luckyNumb => {
    document.write(luckyNumb + "<br>");  
});


