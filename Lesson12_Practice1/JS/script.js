const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies:{},
    actors: {},
    genres: [],
    privat: false,
};

const movieTitle1 = prompt('Один из последних просмотренных фильмов');
const rating1 = prompt('На сколько оцените его?', '');
const movieTitle2 = prompt('Один из последних просмотренных фильмов', '');
const rating2 = prompt('На сколько оцените его?', '');

personalMovieDB.movies[movieTitle1] = rating1;
personalMovieDB.movies[movieTitle2] = rating2;

console.log(personalMovieDB);
