'use strict'

let numberOfFilms;

function start() {
     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

     while (numberOfFilms === '' || numberOfFilms == null || isNaN(numberOfFilms)) {
         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
     }
}
start();

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false,
};



function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {

        const movieTitle1 = prompt('Один из последних просмотренных фильмов');
        const rating1 = prompt('На сколько оцените его?', '');


        if (movieTitle1 !== '' && movieTitle1 != null && movieTitle1.length < 50 && rating1 !== '' && rating1 != null ) {
            personalMovieDB.movies[movieTitle1] = rating1;
        } else {
            i--;
        }
    }
}

rememberMyFilms();


function writeYourGenres() {
    for (let i = 1; i <= 3; i++) {
        const genr = prompt(`Ваш любимый жанр под номером ${i}`);
           personalMovieDB.genres[i - 1] = genr;
    }
}

writeYourGenres();


function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('вы посмотрели мало фильмов');
    } else if (10 >= personalMovieDB.count <= 30) {
        console.log('вы классический зритель');
    } else if (personalMovieDB.count > 30) {
        console.log('вы киноман!');
    } else {
        console.log('в следующий раз');
    }
}

detectPersonalLevel();


function showMyDB() {
    if (personalMovieDB.privat === false) {
        console.log(personalMovieDB);
    }
}

showMyDB();

// personalMovieDB.movies[movieTitle2] = rating2;


