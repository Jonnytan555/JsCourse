document.write("<h1>Nested Arrays</h1>");
document.write("<hr>");

numberGrid = [ 
    [1, 2], 
    [3, 4] 
];

numberGrid[0][1] = 99;
document.write(numberGrid[0][0] + "<br>")
document.write(numberGrid[0][1] + "<br>")
document.write(numberGrid[1][1] + "<br>")

for(i=0;i<numberGrid.length; i++) {
    for (j=0; j<numberGrid[i].length; j++) {
        document.write(numberGrid[i][j] + ",")
    }
}

