document.write("<h1>Exception Handling</h1>");
document.write("<hr>");

y = window.prompt("Enter value for y");

try {
    // throw "Something went wrong"
    var x = y / 0;
} catch(err) {
    document.write(err)
} finally {
    // this code always executes
}



