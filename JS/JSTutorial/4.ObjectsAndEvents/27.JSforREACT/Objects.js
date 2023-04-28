const person = {
    name: "Pedro",
    age: 20,
    isMarried: false,
};

const {name, age, isMarried} = person; 

const person2 = {...person, name: "Jack"};

const names = ["Pedro", "Jack", "Jess"]

const names2 = [...names, "Joel"]