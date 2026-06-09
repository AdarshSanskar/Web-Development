// Check if a number is greater than another number.

let num1 = 5;
let num2 = 10;

if (num1 > num2) {
  console.log("Num 1 is Greater than Num 2");
} else {
  console.log("Num 2 is Greater than Num 1");
}

// Check if a string is equla to another string

let username = "Adarsh";
let anotherusername = "astile";

if (username == anotherusername) {
  console.log("Pick another Username");
} else {
  console.log("Username Available");
}

//Checking if a variable is a number or not

let score = 44;
if (typeof score == "number") {
  console.log("Yes, this is a number...");
} else {
  console.log("This is not a number...");
}

// Checking if a Boolean value is true or false

let isValid = true;

if (isValid) {
  console.log("Account is Valid");
} else {
  console.log("Account is InValid");
}

// Checking if an array is empty or not

let item = [];

console.log(item.length);

if (item.length === 0) {
  console.log("Array is Empty");
} else {
  console.log("Array is not Empty");
}
