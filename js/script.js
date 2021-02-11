//- 18
let numberOfFilms;

function start () {
  numberOfFilms = +prompt('How many films do you watch?', '');

  while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt('How many films do you watch?', '');
  }
}
start();
console.log(numberOfFilms);

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false
};

function rememberMyFilms() {
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
}
// rememberMyFilms();

function detectPersonalLevel() {
  if (personalMovieDB.count < 10) {
    console.log('you have seen few films');
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log('you are a classic spectator');
  } else if (personalMovieDB.count >= 30) {
    console.log('you are a movie fan');
  } else {
    console.log('error');
  }
}

// detectPersonalLevel();


function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}

showMyDB(personalMovieDB.privat);

// function writeYouGenres() {
//   for (let i = 1; i <= 3; i++) {
//     const genre = prompt(`Your favorite genre number ${i}`);
//     personalMovieDB.genres[i - 1] = genre;
//   }
// }
function writeYouGenres() {
  for (let i = 1; i <= 3; i++) {
    personalMovieDB.genres[i - 1] = prompt(`Your favorite genre number ${i}`);
  }
}
writeYouGenres();

//- end 18