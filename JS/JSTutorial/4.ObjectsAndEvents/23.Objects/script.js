document.write("<h1>Objects</h1>");
document.write("<hr>");

var Student = {
    name: "Jim",
    major: "business",
    age: 19,
    gpa: 2.5
};

Student.name = "Andy"
document.write( Student.name + "<br>");
document.write( Student.major + "<br>");
document.write( Student.gpa + "<br>");
document.write( Student.age + "<br>");


