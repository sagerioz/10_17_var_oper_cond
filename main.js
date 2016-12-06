/*
=======================================================
** Week 1 - Project 2 **

Below are a number of problems for you to solve
using JS. The JS code can be written below each
problem.

=======================================================
*/


// 1. Connect the main.js document to the HTML page.
//    Then Update the Text to Green by adding the .status-good class.



// When the JS is connected properly, the following code will update the status message.
document.getElementById("q1").innerHTML = "JS Page Connected Properly!";
document.getElementById("q1").classList.add("status-good");



// 2. Declare a new variable called 'feelings',
//    Then store a string with a word that describes
//    how well you feel about this course material.
//    Then display that string within the HTML page.

var feelings = "excited"
document.getElementById("q2").innerHTML = "I am feeling " + feelings + " about this course!";




// 3. Declare a new variable called 'name',
//    store your name within it, and then
//    create a 'message' variable with a greeting,
//    concat the message and name variables
//    and then display it within the HTML page.

var name = "Erica";
var message = "Howdy, " + name;
document.getElementById("q3").innerHTML = message;




// 4. Declare two variables with number values.
//    Add, subtract, multiply and divide them.
//    Display the values of each within the HTML page.
//    Then label these values the best you can.

var a = 12;
var b = 123;
var c = a + b;
var d = c - b;
var e = d * c;
var f = e / d;

document.getElementById("q4a").innerHTML = `${a} + ${b} = ${c}`;
document.getElementById("q4b").innerHTML = `${d} = ${c} - ${b}`;
document.getElementById("q4c").innerHTML = `${e} = ${d} * ${c}`;
document.getElementById("q4d").innerHTML = `${f} = ${e} / ${d}`;




// 5. Declare two variables with string values.
//    Create a third variable that concatenates the two strings
//    that also places the appropriate space between the strings.
//    Display the value of the third variable within the HTML page.


var myStr1 = "the quick brown fox";
var myStr2 = "jumps over the lazy dog";
var myStr3 = myStr1 + " " + myStr2;
document.getElementById("q5").innerHTML = myStr3;


// 6. Add, subract, multiply and divide the strings '5' and '3'.
//    Observe the results and brieftly explain the results within the HTML page.
var five = '5';
var three = '3';
var g = five + three;
var h = five - three;
var i = five * three;
var j = Math.round(five / three);
document.getElementById("q6a").innerHTML = `${five} + ${three} = ${g}`;
document.getElementById("q6b").innerHTML = `${five} - ${three} = ${h}`;
document.getElementById("q6c").innerHTML = `${five} * ${three} = ${i}`;
document.getElementById("q6d").innerHTML = `${five} / ${three} = ${j}`;
document.getElementById("q6note").innerHTML = `In the first example, the Javascript engine decided
to print the strings '5' and '3' as strings rather than coerce them to numbers because JS interpreted the plus sign in the variable as a signal
to concatenate (string together in a sentence) rather than do math. That is why 5 + 3 join together as 53.<br>In the subsequent examples, the engine saw the math operators in the variables
and made the decision to coerce the strings to the variable type Number and then do the math indicated.`;





// 7. When a button is clicked, add content into the ID "q7".
document.getElementById('callAlert').addEventListener("click", function() {
    document.getElementById("q7").innerHTML = "...and it's been clicked!"
});





// 8. Collect a number value from the user and when a button is clicked,
//    then double user's answer and display that value into the HTML page.


document.getElementById('callDoubleNum').addEventListener('click', function() {
    var numToDouble = document.getElementById("doubleNum").value;
    var doubled = numToDouble * 2;
    document.getElementById("q8").innerHTML = doubled;

})




// 9. Set the variable 'num1' to 5.
//    Set the variable 'num2' to 10.
//    Test to see if num1 is greater than num2.
//    If so, output to the HTML page: Yes, the value of num1 is greater than num2
//    If not, output to the HTML page: No, the value of num1 is not greater than num2

var num1 = 5;
var num2 = 10;
if (num1 > num2) {
    document.getElementById('q9').innerHTML = "Yes, the value of num1 is greater than num2";
} else {
    document.getElementById('q9').innerHTML = "No, the value of num1 is not greater than num2";
};


// 10. Set the variable 'score' to a number between 1-100.
//    Create the following conditions:
//    If the score is above 90, output to the HTML page "Great job".
//    If the score is between 60 and 89, output to the HTML page "Nice work, keep practicing".
//    If the score is below 59, output to the HTML page "Very bad: study more and retake the test".
//    Test to make sure each condition is met properly.

var score = 93
if (score > 90) {
    document.getElementById('q10').innerHTML = "Great Job";
} else if (score < 59) {
    document.getElementById('q10').innerHTML = "Very bad: study more and retake the test";
} else {
    document.getElementById('q10').innerHTML = "Nice work, keep practicing";
}



// ADVANCED TRACK

// A. Ask for a user's name, age and city using input fields.
//    In a single command, take the user's answers and display into the HTML page the sentence:
//

document.getElementById('callStringify').addEventListener('click', function() {

    var yAge = document.getElementById('yourAge').value;
    var yName = document.getElementById('yourName').value;
    var yCity = document.getElementById('yourCity').value;
    if (yName, yAge, yCity) {
        document.getElementById('qa').innerHTML = "Let me guess, your name is " + yName + ". You're " + yAge + " years old, and you live in " + yCity;
    } else {
        document.getElementById('qa').innerHTML = "Please enter your complete information in the form";
    }
});



// B. Create the formula to determine the area of a rectangle.
//     The rectangle is: 2 inches by 3 inches
//     Display the result in the HTML page.

var myLengthForArea = 2;
var myHeightForArea = 3;
var myArea = myLengthForArea * myHeightForArea


document.getElementById('qb').innerHTML = "My rectangle measures 2\" by 3\". The area is " + myArea + " \".";

// C. Collect the use's length and width input to determine the area of a rectangle and display within the HTML page the result.
document.getElementById('callArea').addEventListener('click', function() {
    var lengthForArea = document.getElementById('length').value;
    var heightForArea = document.getElementById('height').value;
    var area = lengthForArea * heightForArea
    document.getElementById('qc').innerHTML = area
});







// D. Have the user enter their name into a textfield. When they click a button, find the length (number of characters) of their name and display the result in the HTML page.

document.getElementById('callUserName').addEventListener('click', function() {
    var userNameLength = document.getElementById('userName').value
    var nameLength = userNameLength.length
    document.getElementById('qd').innerHTML = "Your name has " + nameLength + " characters in it."
});





// E. Create a textfield to request a test score between 0-100 from the user.
//    If the score is above 90, display in the HTML a message to tell the user "Great job!".
//    If the score is between 60 and 89, display a message of "Nice work, keep practicing.".
//    If the score is below 59, display a message of "Very bad: study more and retake the test.".
//    You can get fancy by adding CSS styles to each of these displays to change the color, too - Green=Good, Orange=OK, Red=Bad
document.getElementById('callTestScore').addEventListener('click', function() {
    var userScore = document.getElementById('userTestScore').value;
if(userScore == false){
  document.getElementById("qe").classList.add("status-bad");
  document.getElementById('qe').innerHTML = "Enter a number";
  document.getElementById('userTestScore').value = '';
    } else if (userScore >= 90) {
        document.getElementById("qe").classList.add("status-good");
        document.getElementById('qe').innerHTML = "Great Job";

    } else if (userScore < 59) {
        document.getElementById("qe").classList.add("status-bad");
        document.getElementById('qe').innerHTML = "Very bad: study more and retake the test";

    } else {
        document.getElementById("qe").classList.add("status-ok");
        document.getElementById('qe').innerHTML = "Nice work, keep practicing";

    }
});




/* SANDBOX TRACK

Solving all of these problems is a great step in the right direction,
but the next step is coming up with your own arrangements to solve
new problems. Practice creating your own problems to solve and their solutions -
you can even challenge your classmates!

Also, consider how you can add/remove CSS styles to create added presentation with the results.

*/
