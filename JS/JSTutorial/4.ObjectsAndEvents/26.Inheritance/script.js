document.write("<h1>Getters and Setters</h1>");
document.write("<hr>");

class Chef {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    makeChicken() {
        document.write("This Chef makes Chicken <br>");
    }

    makeSalad() {
        document.write("This Chef makes Salad <br>");
    }

    makeSpecialDish() {
        document.write("This Chef makes a special Dish <br>");
    }
}

class ItalianChef extends Chef {
    constructor(name, age, countryOfOrigin) {
        this.name = name;
        this.age = age;
        this.countryOfOrigin = countryOfOrigin;
    }

    makePasta() {
        document.write("This Chef makes Pasta <br>");
    }

    // Overridden
    makeSpecialDish() {
        document.write("This Chef makes chicken Parm <br>");
    }
}

var myChef = new Chef("Gorden Ramsey", 50);
myChef.makeChicken();

var myItalianChef = new ItalianChef("Gino DeCampo", 45, "Italy");
myItalianChef.makeChicken();
document.write(myItalianChef.age);


