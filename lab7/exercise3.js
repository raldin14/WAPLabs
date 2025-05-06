class Exercise3{
    #movies = new Map();

    add_genre(genre){
        if(!this.#movies.has(genre)){
            this.#movies.set(genre, []);
            return true;
        }
        return false;
    }

    add_movie_in_genre(genre, new_movie) {
        // add movie if movie id does not exist
        let genreMov = this.#movies.get(genre);
        if(genreMov && !genreMov.find(mid => mid.id === new_movie.id)){
            console.log("movie not found");
            genreMov.push(new_movie);
            return true;
        }
        // return true if the movie is added successfully, false otherwise
        console.log("Movie exist")
        return true;
    }

    update_movie_title_by_genre_and_movie_id(genre, movie_id, new_title) {
        // update a movie within a certain genre
        let genreMov = this.#movies.get(genre);
        let movie = genreMov.find(mid => mid.id === movie_id);
        if(genreMov && movie){
            movie.title = new_title;
            return true;
        }
        // return true if the movie's title is updated successfully, false otherwise
        return false;
    }

    delete_movie_by_genre_and_movie_id(genre, movie_id) {
        // delete movie
        let genreMov = this.#movies.get(genre);
        let movie = genreMov.filter(mid => mid.id !== movie_id);
        if(genreMov && movie){
            this.#movies.set(genre,movie);
            return true;
        }
        // return true if the movie is delete successfully, false otherwise
        return false;
    }

    get_movie_title_by_id(genre, movie_id) {
        // return the movie title
        let genreMov = this.#movies.get(genre);
        let movie = genreMov.find(mid => mid.id === movie_id);
        if(genreMov && movie){
            return movie.title;
        }
        return 'Movie not found';
    }
}

let exc1 = new Exercise3();

console.log(exc1);

let genre = {
    "thriller":[]
}
exc1.add_genre("thriller");
exc1.add_movie_in_genre("thriller",{ id: '1', title: 'The American'});
exc1.add_movie_in_genre("thriller",{ id: '2', title: 'Arcadian'});
exc1.add_movie_in_genre("thriller",{ id: '3', title: 'The American'});
console.log(exc1);
exc1.update_movie_title_by_genre_and_movie_id("thriller", '3', "IT");
exc1.update_movie_title_by_genre_and_movie_id("thriller", '4', "IT");
console.log(exc1);
exc1.delete_movie_by_genre_and_movie_id("thriller", '2');
exc1.delete_movie_by_genre_and_movie_id("thriller", '1');
// exc1.delete_movie_by_genre_and_movie_id("thriller", '3');
// exc1.delete_movie_by_genre_and_movie_id("thriller", '3');
console.log(exc1);
exc1.get_movie_title_by_id("thriller", '3');
console.log(exc1.get_movie_title_by_id("thriller", '3'));

