"use strict";

/*
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */


function analyzeColor(color) {
    if (color === 'red') {
        return("Apples are Red");
    } else if (color === 'orange') {
        return("Oranges are Orange");
    } else if (color === 'yellow') {
        return("Lemons are Yellow");
    } else if (color === 'green') {
        return("Grass is Green");
    } else if (color === 'blue') {
        return("The ocean is Blue");
    } else if (color === 'purple') {
        return("Lavender is purple");
    } else {
        return("I'm not too sure about that color.");
    }
}

// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)


var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
var randomColor = colors[Math.floor(Math.random() * colors.length)];


/*
*  * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
*/

console.log(analyzeColor(randomColor));


/*
 * Comment out the code above, and refactor your function to use a switch-case statement
 */

var analyzeColor = prompt("What is your favorite color?")

switch(analyzeColor) {
    case "Red":
        alert("Apples are Red");
        break;
    case "Orange":
        alert("Oranges are Orange");
        break;
    case "Yellow":
        alert("Lemons are Yellow");
        break;
    case "Green":
        alert("Grass is Green");
        break;
    case "Blue":
        alert("The ocean is Blue");
        break;
    case "Purple":
        alert("Lavender is purple");
        break;
    default:
        alert("I'm not too sure about that color.");
        break;
    }
//

/*
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */


 var enterColor = prompt("Please enter a color")

alert(analyzeColor(enterColor))


/* ########################################################################## */

/*
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */


function calculateTotal (luckyNumber, totalBill) {
    if (luckyNumber === 0) {
        return (totalBill);
    } else if (luckyNumber === 1) {
        return (totalBill - (totalBill * .10));
    } else if (luckyNumber === 2) {
        return (totalBill - (totalBill * .25));
    } else if (luckyNumber === 3) {
        return (totalBill - (totalBill * .35));
    } else if (luckyNumber === 4) {
        return (totalBill - (totalBill * .50));
    } else if (luckyNumber === 5) {
        return (totalBill - totalBill);
    }

}


/*
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6

var luckyNumber = Math.floor(Math.random() * 6);

var bill = prompt("What is your bill total?");

alert("Your lucky number is " + luckyNumber + "! Your total with discount is $" + calculateTotal(luckyNumber, bill));

/*
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */
function isNum () {
    var enterNum = confirm("Would you like to enter a number?");

    if (enterNum) {
        var userInput = parseInt(prompt("What number are you thinking?"));
        if (isNaN(userInput)) {
            alert("That is not a number");
    }   else {
            alert("Okay, " + userInput + " it is.");

            var evenNum = userInput % 2 === 0;
            var addHundred = userInput + 100
            var negPos = userInput >= 0

            alert("Your number is " + evenNum);
            alert("Your number plus 100 is " + addHundred);
            alert("Your number is " + negPos);
        }
    }
}






