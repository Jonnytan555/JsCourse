document.write("<h1>Objects</h1>");
document.write("<hr>");

var myMovie = {
    title: "The Social Network",
    releaseYear: "2010",
    duration: 2.0,
    actors: [
        {
            name: "Jesse Eisenberg",
            birthday: new Date("October 5, 1983"),
            hometown: "New York, New York"
        },
        {
            name: "Roonie Mara",
            birthday: new Date("April 17, 1985"),
            hometown: "Bedford New York"
        }
    ]
};

document.write(myMovie.title + "<br");


