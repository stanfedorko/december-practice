
//- 15

const numberOfFilms = +prompt('How many films do you watch?', '');

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

for (let i = 0; i < 2; i++) {
  const a = prompt('What was the last movie you watched?', ''),
        b = prompt('Set the rating of this movie', '');
  if (a != null && b != null && a != '' && b != '' && a.length < 50) {
    personalMovieDB.movies[a] = b;
    console.log('done');
  } else {
    console.log('error');
    i--;
  }
}

if (personalMovieDB.count < 10) {
  console.log('you have seen few films');
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
  console.log('you are a classic spectator');
} else if (personalMovieDB.count >= 30) {
  console.log('you are a movie fan');
} else {
  console.log('error');
}

console.log(personalMovieDB);

//- end 15









