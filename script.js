"use strict";

let numberofFilms;

function start() {
     numberofFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");

     while (numberofFilms == '' || numberofFilms == null || isNaN(numberofFilms) ) {
        numberofFilms = +prompt("Сколько фильмов вы уже просмотрели?", "");
     }
}

start();

const personalMovieDB = { 
    count: numberofFilms,
    movies: {},
    actors: {},
    genres: {},
    privat: false
};

function rememberMyFilms () {
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
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB < 30) {
        console.log('Вы клас зритель');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы настоящий киноман');
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

function writeYourGenres() {
    for(let i = 1; i <= 3; i++) {
        personalMovieDB.genres[i-1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();