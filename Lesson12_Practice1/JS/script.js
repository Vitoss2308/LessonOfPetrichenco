'use strict'


const personalMovieDB = {
    count: 0,
    movies:{},
    actors: {},
    genres: [],
    privat: false,

    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');

        while (personalMovieDB.count === '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)) {
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms: function() {
        for (let i = 0; i < 2; i++) {

            const movieTitle1 = prompt('Один из последних просмотренных фильмов');
            const rating1 = prompt('На сколько оцените его?', '');


            if (movieTitle1 !== '' && movieTitle1 != null && movieTitle1.length < 50 && rating1 !== '' && rating1 != null ) {
                personalMovieDB.movies[movieTitle1] = rating1;
            } else {
                i--;
            }
        }
    },

    writeYourGenres: function() {

        for (let i = 1; i <= 3; i++) {
            let genr = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genr === '' || genr === null) {
                i--;

            } else {
                personalMovieDB.genres[i - 1] = genr;
            }

        }
        personalMovieDB.genres.forEach((items, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${items}`)
        });
    },

    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log('вы посмотрели мало фильмов');
        } else if (10 >= personalMovieDB.count <= 30) {
            console.log('вы классический зритель');
        } else if (personalMovieDB.count > 30) {
            console.log('вы киноман!');
        } else {
            console.log('в следующий раз');
        }
    },

    showMyDB: function() {
        if (personalMovieDB.privat === false) {
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat === true) {
    personalMovieDB.privat = false}
else {
    personalMovieDB.privat = true
}
    }

};
personalMovieDB.start();
personalMovieDB.rememberMyFilms();
personalMovieDB.writeYourGenres();
personalMovieDB.detectPersonalLevel();
personalMovieDB.toggleVisibleMyDB();
personalMovieDB.showMyDB();
console.log(personalMovieDB);













