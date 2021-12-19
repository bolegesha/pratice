"use strict";

const numberofFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

const personalMovieDB = { 
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: {},
    private: false
};

for (let i = 0; i < 2;i++) {
    const a = prompt("Один из последних просмотренных фильмов", ""),
          b = prompt("Насколько оцените его", "");

    if (a != null && b != null && a != '' && b!= '' && a.length < 50) {
         personalMovieDB.movies[a] = b;
    } else {
        console.log('error');
        i--;
    }
}

if (personalMovieDB.count < 10) {
    console.log('Просмотрено мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
    console.log('Вы клас зритель');
} else if (personalMovieDB.count >= 30) {
    console.log('Вы настоящий киноман');
} else {
    console.log('error');
}

