let names = ["Pedro", "Jessica", "Carol"];

//names.map().filter()

names.map((name) => {
    console.log(name);
});

names.map((name) => {
    return name + "1";
});

names.map((name) => {
    return <h1> (name) </h1>;
});

names.filter((name) => {
    return name !== "Pedro";
})