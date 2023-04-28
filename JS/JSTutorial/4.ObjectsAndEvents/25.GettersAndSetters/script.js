document.write("<h1>Getters and Setters</h1>");
document.write("<hr>");

class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }

    get title() {
        document.write("<p>getting<p>");
        return this._title;
    }

    set title(title) {
        document.write("<p>setting<p>");
        this._title = title;
    }

    readBook() {
        document.write("Reading " + this.title + " by " + this.author);
    }
}

var book1 = new Book("Harry Potter", "JK Rowling");

document.write( book1.title + "<br>")
document.write( book1.author + "<br>")
book1.readBook();
