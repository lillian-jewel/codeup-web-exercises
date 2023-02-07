"use strict";

function showMultiplicationTable (i) {
     console.log(i + " x 1 = " + (i*1));
     console.log(i + " x 2 = " + (i*2));
     console.log(i + " x 3 = " + (i*3));
     console.log(i + " x 4 = " + (i*4));
     console.log(i + " x 5 = " + (i*5));
     console.log(i + " x 6 = " + (i*6));
     console.log(i + " x 7 = " + (i*7));
     console.log(i + " x 8 = " + (i*8));
     console.log(i + " x 9 = " + (i*9));
     console.log(i + " x 10 = " + (i*10));

}


for(var n = 0; n < 10; n++){
    var randoNum = Math.floor((Math.random() * 180) + 20);
    if (randoNum % 2 === 0) {
        console.log(randoNum + " is an Even Number.");
    }else {
        console.log(randoNum + " is an Odd Number.")
    }
}


for(var x = 1; x < 10; x++){

}
