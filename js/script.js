//- 24


const personalMovieDB = {
  count: 0,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  start: function() {
    personalMovieDB.count = +prompt('How many films do you watch?', '');
  
    while (personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
      personalMovieDB.count = +prompt('How many films do you watch?', '');
    }
  },
  rememberMyFilms: function() {
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
  },
  detectPersonalLevel: function() {
    if (personalMovieDB.count < 10) {
      console.log('you have seen few films');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
      console.log('you are a classic spectator');
    } else if (personalMovieDB.count >= 30) {
      console.log('you are a movie fan');
    } else {
      console.log('error');
    }
  },
  showMyDB: function(hidden) {
    if (!hidden) {
      console.log(personalMovieDB);
    }
  },
  toggleVisibleMyDB: function() {
    if (personalMovieDB.privat) {
      personalMovieDB.privat = false;
    } else {
      personalMovieDB.privat = true;
    }
  },
  writeYouGenres: function() {
    // for (let i = 1; i <= 3; i++) {
    for (let i = 1; i < 2; i++) {
      // let genre = prompt(`Your favorite genre number ${i}`);
      // if (genre === '' || genre == null) {
      //   console.log('You entered incorrect data or did not enter them at all');
      //   i--;
      // } else {
      //   personalMovieDB.genres[i - 1] = genre;
      // }

      let genres = prompt(`Enter your favorite genres separated by commas`).toLowerCase();

      if (genres === '' || genres == null) {
        console.log('You entered incorrect data or did not enter them at all');
        i--;
      } else {
        // personalMovieDB.genres[i - 1] = genre;
        personalMovieDB.genres = genres.split(', ');
        personalMovieDB.genres.sort();
      }
    }
    personalMovieDB.genres.forEach((item, i) => {
      console.log(`You like ${i + 1} - this is ${item}`);
    });
  }
};

//- end 24