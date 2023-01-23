"use strict";

console.log("Hello from external JavaScript");

alert("Welcome to my Website!");

/* var favoriteColor = prompt("What is your favorite color?")
alert(favoriteColor + " is my favorite color too!")
*/


/* You have rented some movies for your kids: The little mermaid (for 3 days),
Brother Bear (for 5 days, they love it), and Hercules (1 day,
you don't know yet if they're going to like it).
If price for a movie per day is $3, how much will you have to pay?
 */
alert("Looking to rent a movie? It is $3 a day.");
var priceDay = 3;
var littleMermaid = prompt("How many days will you rent 'The Little Mermaid'?");
var broBear = prompt("How many days will you rent 'Brother Bear'?");
var bigHerc = prompt("How many days will you rent 'Brother Bear'?");

var total = (littleMermaid * priceDay) + (broBear * priceDay) + (bigHerc * priceDay);
alert ("The total is $" + total + " for 'The Little Mermaid', 'Brother Bear', and 'Hercules'.");



/* Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, ' +
'they pay you a different rate per hour. Google pays $400, Amazon $380, and Facebook $350. ' +
'How much will you receive in payment for this week? ' +
'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
 */
alert("You work for Google, Amazon, and Facebook?");
var googlePerHour = prompt("How much does Google pay you per hour?");
var googleWorked = prompt("How many hours did you work at Google?");

var amazonPerHour = prompt("How much does Amazon pay you per hour?");
var amazonWorked = prompt("How many hours did you work at Amazon?");

var fbookPerHour = prompt("How much does Facebook pay you per hour?");
var fbookWorked = prompt("How many hours did you work at Facebook?");

var googleTotal = googlePerHour * googleWorked;
var amazonTotal = amazonPerHour * amazonWorked;
var fbookTotal = fbookPerHour * fbookWorked;

alert("You will receive $" + (googleTotal+amazonTotal+fbookTotal) + " for payment this week.");



/* A student can be enrolled in a class only if the class is not full and
the class schedule does not conflict with her current schedule.
 */
alert("You can only be enrolled if:" +
    "1. The class is not full" +
    "2. It does not conflict with your current schedule");
var fullClass = prompt("Is the class full?");
var currSched = prompt("Does it conflict with your current schedule?");

var enrolled = fullClass && currSched

alert("You are " + enrolled + "! Congratulations!")



/*  product offer can be applied only if a person buys more than 2 items,
and the offer has not expired. Premium members do not need to buy a specific amount of products.
 */

var offer = prompt("There is currently an offer if you buy more than 2 items. " +
    "It applies if the offer is not expired. If you are a premium member, you do not need to buy a specific amount of products.")

var offerExpired = confirm("Is the offer expired?")
var offerMoreThan = confirm("Do you have more than 2 items?")

var offerPremium = confirm ("Are you a premium member?")
var premiumMember = (offerExpired && offerPremium)


var offerTrueFalse = (offerExpired === true) && (offerMoreThan === true) && (offerPremium === false)










