

const numberOfFilms = +prompt('How many films do you watch?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

const a = prompt('What was the last movie you watched?', ''),
      b = prompt('Set the rating of this movie', ''),
      c = prompt('What was the last movie you watched?', ''),
      d = prompt('Set the rating of this movie', '');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);

