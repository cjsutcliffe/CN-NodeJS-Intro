const movieObject = {};

class Movie {
    constructor (inputTitle, inputActor="Not Specified", inputDirector) {
        this.title = inputTitle;
        this.actor = inputActor;
        this.director = inputDirector;
    }
    add () {
        movieObject.push(this);
        console.log(movieObject);
    }
};


module.exports = Movie;