document.write("<h1>Building a Quiz</h1>");
document.write("<hr>");

var questions = [
    {
        prompt: "What color are apples?\n(a) Red/Green\n\ (b) Purple\n(c) Orange",
        answer: "a"
    },
    {
        prompt: "What color are bananas?\n(a) Teal\n(b) Magenta\n(c) Yellow",
        answer: "a"
    },
    {
        prompt: "What color are strawberries?\n(a) Red\n\ (b) Purple\n(c) Orange",
        answer: "a"
    }
];

var score = 0;

for (var i=0; i< questions.length; i++) {
    var response = window.prompt(questions[i].prompt);
    if (response == questions[i].answer) {
        score++;
        alert("Correct Answer")
    } else {
        alert("Wrong Answer")
    }
}

alert("You scored " + score + "/" + questions.length);




