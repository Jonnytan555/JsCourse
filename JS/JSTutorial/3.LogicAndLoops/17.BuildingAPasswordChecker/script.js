document.write("<h1>Building a password checker</h1>");
document.write("<hr>");

var password = "mypassword";
var guess;
var attemptsAllowed = 3;
var attemptsMade = 0;
var error = false;

while (guess != password && error == false) {
    if (attemptsMade <= attemptsAllowed) {
        guess = window.prompt("Try to guess the password");
        attemptsMade++;
    } else {
        error = true;
    }

}

if (error) {
    document.write("You did not guess the password correctly")
} else {
    document.write("You guessed the password correctly")
}
