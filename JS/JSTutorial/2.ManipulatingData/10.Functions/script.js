document.write("<h1>Functions</h1>");

document.write("<br>")

function sayHi(name) {
    document.write("Hello " + name);
}

sayHi("Jon");

document.write("<br>")

function sayHi(name, age) {
    document.write("Hello " + name + ", you are " + age + " years old");
}

sayHi("Jon", 27);

document.write("<br>")

var sum = addNumbers(3,5);

document.write(sum);

function addNumbers(numb1, numb2) {
    return numb1 + numb2;
}
