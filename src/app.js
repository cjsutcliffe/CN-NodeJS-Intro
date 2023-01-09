const yargs = require('yargs');

const Movie = require('./utils/index')

function app (input) {
    if (input.add) {
       
            // code to add a movie to an object goes here
            const movieName = input.title;
            const actorName = input.actor;
            const directorName = input.director;
            const movie = [movieName, actorName, directorName];
            console.log (movie);
            
    } else if (input.addmulti) {
            // code for adding multiple movies

            const movieName1 = input.title1;
            const actorName1 = input.actor1;
            const directorName1 = input.director1;
            const movie1 = [movieName1, actorName1, directorName1];
            console.log (movie1);

            const movieName2 = input.title2;
            const actorName2 = input.actor2;
            const directorName2 = input.director2;
            const movie2 = [movieName2, actorName2, directorName2];
            console.log (movie2);
           
            const movieName3 = input.title3;
            const actorName3 = input.actor3;
            const directorName3 = input.director3;
            const movie3 = [movieName3, actorName3, directorName3];
            console.log (movie3);
           
    } else {
        console.log ("Command not recognised");
    }
};

app(yargs.argv);
