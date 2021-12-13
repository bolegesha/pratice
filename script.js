"use strict";
if(4 == 9) {
    console.log("ok");
}
else {
    console.log("no");
}

const num = 50;

if(num<49) {
    console.log("Error");
}
else if (num > 100) {
    console.log("too much");
}
else {
    console.log("okay");
}

let num = 40;
(num == 50 ) ? console.log("okay") : console.log("Error");

const num = 500;

switch (num) {
    case 49: 
        console.log("error");
        break;
    case 100:
        console.log("error");
        break;
    case 50:
        console.log("clear");
        break;
    default:
        console.log("nnn");
        break;
}