//        CHAPTER 1

/* Q1:
 alert("Welcome to this Website!")

Q2:
 alert("Error! Please enter a valid password.")

Q3:
 alert("Welcome to JS Land...\n Happy Coding!")

Q4:
 alert("Welcome to JS Land...")
 alert("Happy Coding \n Prevent this page from creating additional dialogs.")

Q5: 
 alert("Hello... I can run JS through my web's browser console.")
*/


//         CHAPTER 2


/* Q1:
 var username;

 Q2:
 var myName = "Habiba Nadeem"

 Q3:
 var message;
 message = "Hello World"
 alert(message)

 Q4:
 var studentname = "Jhone Deo"
 var studentage = "15 years Old"
 var aboutstudent = "Certified mobile application development"
 alert(studentname)
 alert(studentage)
 alert(aboutstudent)

 Q5:
 var food = "Pizza";
 alert(food)

 Q6: 
 var email = "habibanadeem075@gmail.com"
 alert("My email address is :" + email)

 Q7:
 var book = "A Smarter Way To learn Javascript"
 alert("I am trying to learn from the book  :" + book)

 Q8:
 document.write("<p>Yah! I can write html content throung Javascript!</p>")


 Q9:
 var name = "Habiba"
 alert(name)  */



//         CHAPTER 3

/* Q1:
var age = "I am 12 years old"
alert(age)

Q2:
var visit = 9;
alert("You have visited this website" + visit + "times")

Q3:
var birthyear = 2012;
document.write("my birthyear is " + birthyear)
document.write("<br> Data type of my declared variable is number")

Q4:
var visitorname = "John David";
var product = "5 Shirt";
document.write("<br>" + visitorname + "ordered" + product + "On XYZ clothing store") */



//         CHAPTER 4
/*
Q1:
var var1;
var var2;
var var3;
 5 legal variables
var _myName;
var  $num1;
var myVar;
var prices2;
var $_;

Q2:
 5 illegal variables
var 1stletter;
var first Name;
var my@variable;
var my#num;

Q3:
document.write("<h1>Rules for naming JS variables</h1>")
document.write("<p>Variables name can only contain numbers, $ and _. for example : $my_1stVariable </br> Variable must begin with a letter, $ or _. for eg: $name, _name or name.</br> Variable names are case sensitive.</br> Variable names should not be JS keywords</p>")

*/


//         CHAPTER 5
/*
Q1 and 2:
var num1 = 3;
var num2 = 5;
var result = num1 + num2;
document.write("Sum of" +" "+ num1 + " " + "and" + " " + num2 + " " + "is" + " " + result )

var result = num1 - num2;
document.write("</br>Subraction of" +" "+ num1 + " " + "and" + " " + num2 + " " + "is" + " " + result )

var result = num1 / num2;
document.write("</br>Division of" +" "+ num1 + " " + "and" + " " + num2 + " " + "is" + " " + result )


var result = num1 * num2;
document.write("</br>Multiplication of" +" "+ num1 + " " + "and" + " " + num2 + " " + "is" + " " + result )


var result = num1 % num2;
document.write("</br>Modulus of" +" "+ num1 + " " + "and" + " " + num2 + " " + "is" + " " + result)



Q3:

var number;
document.write("</br>value after variable declaration is Undefined")

number = 5;
document.write("</br>Initial Value : " + " " + number)
number++
document.write("</br>Value after increment is : " + " " + number)
number = number + 7;
document.write("</br>Value after addition is :" + " " + number)
--number
document.write("</br>Value after decrement is :" + " " + number)

number = number / 3;
document.write("</br>The reminder is:" + " " + number)

Q4:

var ticket = 600;
ticket = ticket * 5;
document.write("</br>Total cost to buy 5 tickets to a movie is " + ticket + "PKR")

Q5:
document.write("Table of 2 </br> 2 * 1 = 2 </br> 2 * 2 = 4 </br>  2 * 3 = 6 </br>  2 * 4 = 8 </br>  2 * 5 = 10  </br>  2 * 6 = 12 </br>   2 * 7 = 14 </br>  2 * 8 = 16  </br>  2 * 9 = 18 </br>  2 * 10 = 20"   )

Q6:
var celsius = 25;
    var fahrenheit = (celsius * 9 / 5) + 32;
    document.write("</br>" + celsius + "°C is " + fahrenheit + "°F<br>");

    var fahrenheit2 = 70;

    var celsius2 = (fahrenheit2 - 32) * 5 / 9;
    document.write(fahrenheit2 + "°F is " + celsius2 + "°C");


Q7:

var item1 = 650;
document.write("</br>Price of item 1 is " + item1)
var item1quatinty = 3;
document.write("</br>Quantity of item 1 is " + item1quatinty)


var item2 = 100;
document.write("</br>Price of item 2 is " + item2)
var item1quatinty2 = 7;
document.write("</br>Quantity of item 2 is " + item1quatinty2)

var charges = 100;
document.write("</br>Shipping Charges: " + charges)

document.write("</br>Total cost of your order is 2750" )


Q8:
var marks = 980;
document.write("</br> Total Marks : " + marks)
var obtainmarks = 804;
document.write("</br> Obtained Marks : " + obtainmarks)

var percentage = (obtainmarks / marks) * 100;

document.write("</br> Percentage: " + percentage + "%");



Q9:

var usd = 10;
    var sar = 25;
    var pkr = (usd * 104.80) + (sar * 28);
    document.write("<h1>Currency in PKR</h1>");
    document.write("Total Currency in PKR: " + pkr);


Q10:

var val = 5;
val = 5 + 5 * 10 / 2;
document.write("<br><br> The value of 5 after some operations is : " + val)


Q11:
var year = 2025;
var ur = 1999; 
 var age1 = year - ur;

 document.write("<br><br><h1>Age Calculator</h1>")
document.write("<br> Current year : " + year)
document.write("<br> Birth year : " + ur)
document.write("<br> Your age is : " + age1)


Q12:
var radius = 20;
    var pi = 3.142;
    var circumference = 2 * pi * radius;
    var area = pi * radius * radius;

    document.write("<h1>The Geometrizer</h1>");
    document.write("Radius of a circle: " + radius + "<br>");
    document.write("The circumference is: " + circumference + "<br>");
    document.write("The area is: " + area);

Q13:
var favoriteSnack = "Chocolate";
    var currentAge = 12;
    var maxAge = 60;
    var perDay = 3;

    var totalneeded = (maxAge - currentAge) * 365 * perDay;

    document.write("<h1>The Lifetime Supply Calculator</h1>");
    document.write("Favorite Snack: " + favoriteSnack + "<br>");
    document.write("Current Age: " + currentAge + "<br>");
    document.write("Estimated Maximum Age: " + maxAge + "<br>");
    document.write("Amount per day: " + perDay + "<br>");
    document.write("You will need " + totalneeded + " " + favoriteSnack + 
      " to last you until the ripe old age of " + maxAge + ".");  */




//              CHAPTER 6 7 8 

/*
Q1:
var num = 11;

document.write("Result : ")
document.write("<br>The value of num is 11")
document.write("<br>The value of ++num is 12 <br> Now the value of num is 12")
document.write("<br>The value of num++ is 12 <br> Now the value of num 13")
document.write("<br>The value of --num is 12 <br> Now the value of num 12")
document.write("<br>The value of num-- is 12 <br> Now the value of num 11")


Q2:
var a = 2;
var b = 1;
var result = --a - --b + ++b + b--;
document.write("<br> a is : 2")
document.write("<br> b is : 1")
document.write("<br> result is : 3")


Q3:

    var subject1 = "English";
    var subject2 = "Math";
    var subject3 = "Urdu";

    var totalMarks = 100;


    var marks1 = 54;
    var marks2 = 54;
    var marks3 = 48;

    var totalObtained = marks1 + marks2 + marks3;
    var totalMax = totalMarks * 3;
    var percentage = (totalObtained / totalMax) * 100;


    document.write("<table border='1' cellpadding='5'>");
    document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
    document.write("<tr><td>" + subject1 + "</td><td>" + totalMarks + "</td><td>" + marks1 + "</td><td>" + marks1 + "%</td></tr>");
    document.write("<tr><td>" + subject2 + "</td><td>" + totalMarks + "</td><td>" + marks2 + "</td><td>" + marks2 + "%</td></tr>");
    document.write("<tr><td>" + subject3 + "</td><td>" + totalMarks + "</td><td>" + marks3 + "</td><td>" + marks3 + "%</td></tr>");
    document.write("<tr><th>Total</th><th>" + totalMax + "</th><th>" + totalObtained + "</th><th>" + percentage.toFixed(0) + "%</th></tr>");
    document.write("</table>");   */


//                  CHAPTER 9 10

/*
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










