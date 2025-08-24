//______________________________CHAPTER 31 - 34______________________

/*

//Q1

document.write("<h2>Q1. Current Date and Time</h2>");
var now = new Date();
document.write(now + "<br><br>");


//Q2


document.write("<h2>Q2. Current Month in Words</h2>");
var months = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var currentMonth = months[now.getMonth()];
alert("Current month: " + currentMonth);
document.write("Current month: " + currentMonth + "<br><br>");


//Q3




document.write("<h2>Q3. First 3 Letters of Day</h2>");
var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
var today = days[now.getDay()];
alert("Today is " + today);
document.write("Today is " + today + "<br><br>");


//Q4




document.write("<h2>Q4. Check for Fun Day</h2>");
if (today === "Sat" || today === "Sun") {
    document.write("It's Fun day<br><br>");
} else {
    document.write("It's a weekday<br><br>");
}


//Q5



document.write("<h2>Q5. First or Last Days of Month</h2>");
var date = now.getDate();
if (date < 16) {
    document.write("First fifteen days of the month<br><br>");
} else {
    document.write("Last days of the month<br><br>");
}


//Q6



document.write("<h2>Q6. Minutes Since Jan 1, 1970</h2>");
var msSince1970 = now.getTime();
var minutesSince1970 = msSince1970 / (1000 * 60);
document.write("Current Date: " + now + "<br>");
document.write("Elapsed milliseconds since Jan 1, 1970: " + msSince1970 + "<br>");
document.write("Elapsed minutes since Jan 1, 1970: " + minutesSince1970 + "<br><br>");


//Q7



document.write("<h2>Q7. AM or PM</h2>");
var hour = now.getHours();
if (hour < 12) {
    alert("It's AM");
    document.write("It's AM<br><br>");
} else {
    alert("It's PM");
    document.write("It's PM<br><br>");
}



//Q8



document.write("<h2>Q8. Last Day of 2020</h2>");
var laterDate = new Date("December 31, 2020");
document.write("Later date: " + laterDate + "<br><br>");


//Q9



document.write("<h2>Q9. Days Since 1st Ramadan</h2>");
var ramadan = new Date("June 18, 2015");
var diffDays = Math.floor((now - ramadan) / (1000 * 60 * 60 * 24));
alert(diffDays + " days have passed since 1st Ramadan, 2015");
document.write(diffDays + " days have passed since 1st Ramadan, 2015<br><br>");


//Q10



document.write("<h2>Q10. Seconds Since Start of 2015</h2>");
var refDate = new Date("Dec 5, 2015 22:50:16");
var start2015 = new Date("Jan 1, 2015");
var diffSeconds = Math.floor((refDate - start2015) / 1000);
document.write("On reference date " + refDate + ",<br>");
document.write(diffSeconds + " seconds had passed since beginning of 2015<br><br>");



//Q11



document.write("<h2>Q11. Subtract 1 Hour</h2>");
var current = new Date();
document.write("Current date: " + current + "<br>");
var minusOneHour = new Date();
minusOneHour.setHours(current.getHours() - 1);
document.write("1 hour ago, it was: " + minusOneHour + "<br><br>");


//Q12



document.write("<h2>Q12. 100 Years Back</h2>");
var currentDate = new Date();
var pastDate = new Date();
pastDate.setFullYear(currentDate.getFullYear() - 100);
document.write("Current date: " + currentDate + "<br>");
document.write("100 years back, it was: " + pastDate + "<br><br>");



//Q13



document.write("<h2>Q13. Age and Birth Year</h2>");
var userAge = prompt("Enter your age:");
var thisYear = new Date().getFullYear();
var birthYear = thisYear - userAge;
document.write("Your age is: " + userAge + "<br>");
document.write("Your birth year is: " + birthYear + "<br><br>");


//Q14



document.write("<h2>Q14. K-Electric Bill</h2>");
var customerName = "Ali";
var monthList = ["January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"];
var billMonth = monthList[now.getMonth()];
var unitsUsed = 350;
var ratePerUnit = 12.75;
var netPayable = unitsUsed * ratePerUnit;
var lateFee = 150;
var grossPayable = netPayable + lateFee;

document.write("Customer Name: " + customerName + "<br>");
document.write("Month: " + billMonth + "<br>");
document.write("Units Consumed: " + unitsUsed + "<br>");
document.write("Charges per Unit: " + ratePerUnit.toFixed(2) + "<br>");
document.write("Net Amount Payable (within Due Date): " + netPayable.toFixed(2) + "<br>");
document.write("Late Payment Surcharge: " + lateFee.toFixed(2) + "<br>");
document.write("Gross Amount Payable (after Due Date): " + grossPayable.toFixed(2) + "<br><br>");


*/




//_________________________________CHAPTER 35-38___________________________

/*
 // Q1
  function showDateTime() {
    var now = new Date();
    document.write(now + "<br><br>");
  }
  showDateTime();

  // Q2
  function greetUser(first, last) {
    var fullName = first + " " + last;
    document.write("Hello, " + fullName + "!<br><br>");
  }
  greetUser("Ali", "Khan");

  // Q3
  function addNumbers(a, b) {
    var sum = a + b;
    document.write("Sum is: " + sum + "<br><br>");
  }
  addNumbers(5, 8);

  // Q4
  function calculator(num1, num2, operator) {
    var result;
    if (operator === "+") {
      result = num1 + num2;
    } else if (operator === "-") {
      result = num1 - num2;
    } else if (operator === "*") {
      result = num1 * num2;
    } else if (operator === "/") {
      result = num1 / num2;
    } else {
      result = "Invalid operator";
    }
    document.write("Result: " + result + "<br><br>");
  }
  calculator(10, 2, "*");

  // Q5
  function square(num) {
    var result = num * num;
    document.write("Square is: " + result + "<br><br>");
  }
  square(6);

  // Q6
  function factorial(n) {
    var fact = 1;
    for (var i = 1; i <= n; i++) {
      fact = fact * i;
    }
    document.write("Factorial of " + n + " is: " + fact + "<br><br>");
  }
  factorial(5);

  // Q7
  function count(start, end) {
    for (var i = start; i <= end; i++) {
      document.write(i + " ");
    }
    document.write("<br><br>");
  }
  count(1, 10);

  // Q8
  function calculateHypotenuse(base, perp) {
    function square(x) {
      return x * x;
    }
    var hypo = Math.sqrt(square(base) + square(perp));
    document.write("Hypotenuse is: " + hypo + "<br><br>");
  }
  calculateHypotenuse(3, 4);



  // Q9 (i) Arguments as values
  function calcAreaValue(width, height) {
    var area = width * height;
    document.write("Area (values): " + area + "<br><br>");
  }
  calcAreaValue(5, 10);

  // Q9 (ii) Arguments as variables
  function calcAreaVars() {
    var w = 7;
    var h = 3;
    var area = w * h;
    document.write("Area (variables): " + area + "<br><br>");
  }
  calcAreaVars();

  // Q10
  function isPalindrome(str) {
    var reversed = str.split('').reverse().join('');
    if (str === reversed) {
      document.write(str + " is a palindrome.<br><br>");
    } else {
      document.write(str + " is not a palindrome.<br><br>");
    }
  }
  isPalindrome("madam");
  isPalindrome("hello");

  // Q11
  function titleCase(str) {
    var words = str.split(' ');
    for (var i = 0; i < words.length; i++) {
      words[i] = words[i][0].toUpperCase() + words[i].slice(1);
    }
    var result = words.join(' ');
    document.write("Title Case: " + result + "<br><br>");
  }
  titleCase("the quick brown fox");

  // Q12
  function longestWord(str) {
    var words = str.split(' ');
    var longest = "";
    for (var i = 0; i < words.length; i++) {
      if (words[i].length > longest.length) {
        longest = words[i];
      }
    }
    document.write("Longest Word: " + longest + "<br><br>");
  }
  longestWord("Web Development Tutorial");


  //Q14 The Geometrizer

function calcCirc(radius) {
  let circumference = 2 * Math.PI * radius;
  return "The circumference is " + circumference;
}

function calcArea(radius) {
  let area = Math.PI * radius * radius;
  return "The area is " + area;
}

*/





//________________________________________CHAPTER 38-42_________________

/*

function power(a, b) {
  let result = 1;
  for (let i = 0; i < b; i++) {
    result *= a;
  }
  return result;
}

//Q2 check leap year
function isLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
    return true;
  }
  return false;
}

//Q3, 4 functions to calculate area of triangle using sides a,b,c
function semiPerimeter(a, b, c) {
  return (a + b + c) / 2;
}

function areaOfTriangle(a, b, c) {
  let s = semiPerimeter(a, b, c);
  return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

//Q4 average and percentage of marks
function average(m1, m2, m3) {
  return (m1 + m2 + m3) / 3;
}

function percentage(m1, m2, m3) {
  let total = 300; // assuming each subject is out of 100
  let obtained = m1 + m2 + m3;
  return (obtained / total) * 100;
}

function mainFunction(m1, m2, m3) {
  let avg = average(m1, m2, m3);
  let perc = percentage(m1, m2, m3);
  return { average: avg, percentage: perc };
}

//Q5 custom indexOf for single character
function customIndexOf(str, char) {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === char) {
      return i;
    }
  }
  return -1; // not found
}

//Q6 remove vowels from sentence (max 25 chars)
function removeVowels(str) {
  let vowels = "aeiouAEIOU";
  let result = "";
  for (let i = 0; i < str.length && i < 25; i++) {
    if (!vowels.includes(str[i])) {
      result += str[i];
    }
  }
  return result;
}

//Q7 count occurrences of any two vowels in succession
function countDoubleVowels(str) {
  let count = 0;
  let vowels = "aeiouAEIOU";
  for (let i = 0; i < str.length - 1; i++) {
    if (vowels.includes(str[i]) && vowels.includes(str[i + 1])) {
      count++;
    }
  }
  return count;
}




// Q8: Convert distance in km to meters, feet, inches, centimeters
function kmToMeters(km) {
  return km * 1000;
}

function kmToFeet(km) {
  return km * 3280.84;
}

function kmToInches(km) {
  return km * 39370.1;
}

function kmToCentimeters(km) {
  return km * 100000;
}

// Q9: Calculate overtime pay
function calculateOvertimePay(hoursWorked) {
  const overtimeRate = 12;
  const standardHours = 40;
  if (hoursWorked > standardHours) {
    let overtimeHours = hoursWorked - standardHours;
    return overtimeHours * overtimeRate;
  }
  return 0;
}

// Q10: Currency notes calculation
function calculateCurrencyNotes(amount) {
  let hundreds = Math.floor(amount / 100);
  amount %= 100;
  let fifties = Math.floor(amount / 50);
  amount %= 50;
  let tens = Math.floor(amount / 10);
  amount %= 10;
  return {
    hundreds: hundreds,
    fifties: fifties,
    tens: tens
  };
}

// Example usage:
console.log(calculateCurrencyNotes(470));
// Output: { hundreds: 4, fifties: 1, tens: 2 }

*/













