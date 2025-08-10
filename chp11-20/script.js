/* ____________________________________CHAPTER 11_________________________________
Q1:

var city = prompt("Enter city name:");
if (city.toLowerCase() === "karachi") {
  alert("Welcome to city of lights");
}

Q2:
var gender = prompt("Enter your gender (male/female):").toLowerCase();

if (gender === "male") {
  alert("Good Morning Sir");
} else if (gender === "female") {
  alert("Good Morning Ma'am");
} else {
  document.write("Good Morning");
}

Q3:

var color = prompt("Enter traffic signal color (Red, Yellow, Green):").toLowerCase();

if (color === "red") {
  alert("Must Stop");
} else if (color === "yellow") {
  alert("Ready to move");
} else if (color === "green") {
  alert("Move now");
}


Q4:

var fuel = prompt("Enter remaining fuel in liters:");
if (fuel < "0.25") {
  alert("Please refill the fuel in your car");
}

Q5:

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}


Q6 :
var guess = prompt("Guess the secret number (1 to 10):");

if (guess === "7") {
  alert("Bingo! Correct answer");
} else {
  if (guess === "6") {
    alert("Close enough to the correct answer");
  } else {
    if (guess === "8") {
      alert("Close enough to the correct answer");
    } else {
      alert("Try again!");
    }
  }
}

Q7: 
var num = prompt("Enter a number:");
if (num % 3 === 0) {
  alert(num + " is divisible by 3");
}

Q8:
var num = prompt("Enter a number:");
if (num % 2 === 0) {
  alert(num + " is an even number");
} else {
  alert(num + " is an odd number");
}


Q9 :
var temp = prompt("Enter temperature:");

if (temp > 40) {
  alert("It is too hot outside.");
} else if (temp > 30) {
  alert("The Weather today is Normal.");
} else if (temp > 20) {
  alert("Today's Weather is cool.");
} else if (temp > 10) {
  alert("OMG! Today's weather is so Cool.");
} else {
    alert("temperature not found!")
}


Q10:
var num1 = prompt("Enter first number:");
var num2 = prompt("Enter second number:");
var operation = prompt("Enter operation (+, -, *, /, %):");

var result;

if (operation === "+") {
  result = +num1 + +num2;
} else if (operation === "-") {
  result = num1 - num2;
} else if (operation === "*") {
  result = num1 * num2;
} else if (operation === "/") {
  result = num1 / num2;
} else if (operation === "%") {
  result = num1 % num2;
} else {
  alert("Invalid operation");
  }




  Q10


var a = 4;
if (++a === 5) {
  alert("given condition for a variable is true")
}


var b = 82;
if (b++ === 83) {
  alert("given condition for a variable is true")
}

var c = 12;
if (c++ === 13) {
  alert("condition 1 is true")
}



if (c === 13) {
  alert("condition 2 is true")
}


if (++c < 14) {
  alert("condition 3 is true")
}

if (c === 14) {
  alert("condition 4 is true")
}


var materialCost = 20000;
var labourCost = 2000;
var tatalCost = materialCost + labourCost;
if (totalCost === labourCost + materialCost) {
  alert("the cost equals")
}


if (true) {
  alert("true")
}


if (false) {
  alert("False")
}


if ("car" < "cat") {
  alert("car is smaller than cat")
}


Q11

var percentage = prompt("Enter ur percentage");
if (percentage >= "80") {
  document.write("Your Grade is A-one <br> Excelent")
}  
else if (percentage >= "70") {
  document.write("Your Grade is A <br> Good ")
} 

else if (percentage >= "60") {
  document.write("Your Grade is B <br> You need to improve ")
} 
else if (percentage >= "60") {
  document.write("You are fail <br> Sorry")
} else {
  alert("invalid percentage")
}

*/


/* _____________________________________CHAPTER 12 AND 13______________________

Q1

let char = 'A';

if (char >= '0' && char <= '9') {
    console.log("The character is a number.");
} else if (char >= 'A' && char <= 'Z') {
    console.log("The character is an uppercase letter.");
} else if (char >= 'a' && char <= 'z') {
    console.log("The character is a lowercase letter.");
} else {
    console.log("The character is neither a number nor a letter.");
}

Q2



let a = 10;
let b = 25;
let c = 15;

if (a >= b && a >= c) {
    console.log(a + " is the largest number.");
} else if (b >= a && b >= c) {
    console.log(b + " is the largest number.");
} else {
    console.log(c + " is the largest number.");
}



Q3

let num = -10;

if (num > 0) {
    console.log(num + " is positive.");
} else if (num < 0) {
    console.log(num + " is negative.");
} else {
    console.log("The number is zero.");
}


Q4:

let chara = 'E';

if (chara === 'A' || chara === 'E' || chara === 'I' || chara === 'O' || chara === 'U' ||
    chara === 'a' || chara === 'e' || chara === 'i' || chara === 'o' || chara === 'u') {
    console.log(chara + " is a vowel.");
} else {
    console.log(chara + " is a consonant.");
}


Q5:
var number = 545454;
var user1 = prompt("Enter your Password")

if (user1 === "") {
    alert("please enter ur password")
} else if (user1 === "545454") {
    alert("Correct!")
} else {
    alert("incorrect passoword")
}


Q6 :
var hour = 13;
if (hour < 18) {
    alert("Good day!")
} else {
    alert("Good evening")
}


Q7 :
let time = 1900;

if (time >= 0 && time < 1200) {
    console.log("Good Morning!");
} else if (time >= 1200 && time < 1700) {
    console.log("Good Afternoon!");
} else if (time >= 1700 && time <= 2359) {
    console.log("Good Evening!");
} else {
    console.log("Invalid time format. Please enter time in 24-hour format (0000 - 2359).");
}
*/


//____________________________________CHAPTER 14-16___________________________

/*
// Q1:
var arr = ["habiba"];
console.log(arr)


//Q2

var arr = ["hello", "hi"]
console.log(arr)


//Q3 

var arr = [2]
console.log(arr)




//Q4 

var arr = [true]
console.log(arr)



//Q5

var arr = ["hello", 2 , "true"]
console.log(arr)




//Q6

var arr = ["Qualifications", "SSC" , "HSC" , "BCS", "BS", "BCOM", "MS" , "M.PHIL", "PHD"]
console.log(arr)







//Q7


var studentNames = ["Michael", "John", "Tony"];


var studentScores = [320, 230, 480];


var totalMarks = 500;

for (var i = 0; i < studentNames.length; i++) {
    var percentage = (studentScores[i] / totalMarks) * 100;
    console.log("Score of " + studentNames[i] + " is " + studentScores[i] + ". Percentage: " + percentage + "%");
}







var students = ["Michael", "John", "Tony"];
var scores = [320, 230, 480];
var totalMarks = 500;

console.log("Q8: Student Scores and Percentages:");
for (var i = 0; i < students.length; i++) {
    var percentage = (scores[i] / totalMarks) * 100;
    console.log("Score of " + students[i] + " is " + scores[i] + ". Percentage: " + percentage + "%");
}
console.log("\n");


var colors = ["Red", "Green", "Blue"];
console.log("Q9: Initial Colors:", colors);


colors.unshift("Purple");
console.log("a. After adding to beginning:", colors);

colors.push("Orange");
console.log("b. After adding to end:", colors);


colors.unshift("Pink", "Yellow");
console.log("c. After adding two more to beginning:", colors);


colors.shift();
console.log("d. After deleting first color:", colors);

colors.pop();
console.log("e. After deleting last color:", colors);


colors.splice(2, 0, "Brown");
console.log("f. After adding 'Brown' at index 2:", colors);


colors.splice(1, 2);
console.log("g. After deleting 2 colors from index 1:", colors);
console.log("\n");

var studentScores = [320, 230, 480, 120];
console.log("Q10: Scores of Students:", studentScores);

studentScores.sort(function(a, b) {
    return a - b;
});
console.log("Ordered Scores of Students:", studentScores);
console.log("\n");


var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
console.log("Q11: Cities list:", cities);

var selectedCities = cities.slice(2, 4); 
console.log("Selected cities list:", selectedCities);
console.log("\n");


var arr = ["This", " is", " my", " cat"];
var singleString = arr.join("");
console.log("Q12: Joined string:", singleString);







var fifoQueue = [];


fifoQueue.push("Keyboard");
fifoQueue.push("Mouse");
fifoQueue.push("Printer");
fifoQueue.push("Monitor");

console.log("Q13: FIFO Queue Access (First In First Out)");
console.log("Original Queue:", fifoQueue);

console.log("Out 1:", fifoQueue.shift());
console.log("Out 2:", fifoQueue.shift());
console.log("Out 3:", fifoQueue.shift());
console.log("Out 4:", fifoQueue.shift());





//Q : 14
var lifoStack = [];


lifoStack.push("keyboard");
lifoStack.push("mouse");
lifoStack.push("printer");
lifoStack.push("monitor");

console.log("Q14: LIFO Stack Access (Last In First Out)");
console.log("Original Stack:", lifoStack);

console.log("Out:", lifoStack.pop());
console.log("Out:", lifoStack.pop());
console.log("Out:", lifoStack.pop());
console.log("Out:", lifoStack.pop());




//Q : 15


var manufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];


var dropdown = '<select name="manufacturers">\n';


for (var i = 0; i < manufacturers.length; i++) {
  dropdown += '<option value="' + manufacturers[i] + '">' + manufacturers[i] + '</option>\n';
}


dropdown += '</select>';


console.log(dropdown);
   */

//_____________________________________________CHAPTER 17 TO 20___________________________

/*
Q1

var arr3 = [[]]
console.log(arr3)


Q2
var matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1]
];
console.log(matrix)


Q3

for (var i = 1; i <= 10; i++) {
  console.log(i)
}


Q4

var input = prompt("Enter a number:");

if (input === "" || input === null) {
  alert("Input is empty or canceled.");
} else {
  var number = input * 1;

  if (number == 0 && input !== "0") {
    alert("Invalid number entered.");
  } else {
    var table = [];

    for (var i = 1; i <= 10; i++) {
      var sent = number + " * " + i + " = " + (number * i);
      table.push(sent);
    }
    for (var us = 0; us < table.length * 1; us++) {
      document.write("<div class='sent'>" + table[us] + "</div>");
    }
  }
}


Q5

var fruits = ["apple", "banana", "mango", "kivi"]
console.log(fruits)
console.log("Elements at 0 index is apple \n Elements at 1 index is banana \n Elements at 2 index is mango \n Elements at 3 index is kivi")

Q6
for (var j = 0; j <= 15; j++) {
  console.log(j)
}

console.log("reverse counting")
for (var k = 15; k >= 0; k--) {
  console.log(k)
}

console.log("Even and odd")
var num = prompt("Enter a number:");
if (num % 2 === 0) {
  alert(num + " is an even number");
} else {
  alert(num + " is an odd number");
}

console.log("Series")
for (var f = 0; f <= 20; f++) {
  console.log(f + "k")
}


Q7 



var user = prompt("Enter yuor dish")
var a = ["apple pie", "cookie", "chips", "cake"]

if (user === "apple pie") {
  alert("apple pie is available at 0 index in our bakery")
}
else if (user === "cookie") {
  alert("cookie is available at 1 index in our bakery")
}
else if (user === "chips") {
  alert("chips is available at 2 index in our bakery")
}
else if (user === "cake") {
  alert("cake is available at 3 index in our bakery")
}
else {
  alert("We are sorry," + user + "is not available in our bakery")
}


Q8

let A = [24, 53, 78, 91, 12];
let biggest = A[0];

for (let i = 1; i < A.length; i++) {
  if (A[i] > biggest) {
    biggest = A[i];
  }
}

alert("The biggest number is " + biggest); 



Q9

let B = [24, 53, 78, 91, 12];
let smallest = A[0];

for (let i = 1; i < B.length; i++) {
  if (B[i] < smallest) {
    smallest = B[i];
  }
}

alert("The smallest number is " + smallest); 


Q10

for (let i = 1; i <= 100; i++) {
    if (i % 5 === 0) {
        document.write(" <br>" + i + ", ");
    }
}

*/