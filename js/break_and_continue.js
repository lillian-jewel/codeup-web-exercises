"use strict";


var inputSkip = prompt("Please enter an odd number between 1 - 50 that will be skipped.")

for (var i = 0; i < 51; i++) {
    if (i % 2 !== 0) {
        console.log('Here is an odd number: ' + i);
        continue;
    } if (i == inputSkip) {
        console.log("Skipping " + inputSkip)
    }
}
