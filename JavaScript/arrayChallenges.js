// 1. Declare an Array named 'teaFlavors' that contains the string "green tea", "black tea", and "oolong tea". Access the variable name of the array and store it in a variable named 'firstTea'.

let teaFlavors = ["green tea", "black tea", "oolong tea"];
firstTea = teaFlavors[0];
console.log("First Element: ", firstTea);

// 2. Declare an array named 'cities' containing "London", "Tokyo", "Paris", and "New York". Access the third element in the array and store it in a variable named 'favoriteCity'.

let cities = ["London", "Tokyo", "New York", "Paris"];
let favoriteCity = cities[2];
console.log("Third Element: ", favoriteCity);

// 4. Declare an array named 'citiesVisited' containing "Mumbai", and "Sydney". Add "Berlin" to the array using the 'push' method

let citiesVisited = ["Mumbai", "Sydney"];
citiesVisited.push("Berlin");
console.log(citiesVisited);

// 5. You have an array named 'teaOrders' with "chai", "iced tea", "matcha", and "earl grey". Remove the last element of the array using the 'pop' method and store it in a variable named 'lastOrder'.

let teaOrders = ["iced tea", "matcha", "earl grey"];
let lastOrder = teaOrders.pop();
console.log(teaOrders);
console.log(lastOrder);

// 6. You have an array named 'popularTeas' containing "green tea", "oolong tea", and "chai". Create a soft copy of this array named 'sofyCopyTeas'.

let popularTeas = ["green tea", "oolong tea", "chai"];
