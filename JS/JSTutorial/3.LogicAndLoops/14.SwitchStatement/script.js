document.write("<h1>Switch Case</h1>");
document.write("<hr>");

var myGrade = "A";

switch(myGrade) {
    case "A":
        document.write("You Pass");
        break;
    case "F":
        document.write("You Fail");
        break;
    default:
        document.write("Invalid Grade");
}

