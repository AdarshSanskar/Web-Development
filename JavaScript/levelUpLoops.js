// 1. Write a loop that loops through the array ["green tea", "black tea", "chai", "oolong tea"] and stops the loop when it finds 'chai'. Store all teas before "chai" in a new attay named selectedTeas.

let teas = ["green tea", "black tea", "chai", "oolong tea"];
let selectedTeas = [];
for (let i = 0; i < teas.length; i++) {
  if (teas[i] === "chai") {
    break;
  }
  selectedTeas.push(teas[i]);
}
// console.log(selectedTeas);

// 2. Write a 'for' loop that loops through the array ["London", "New York", "Paris", "Berlin"] and skips 'Paris'. Store other cities in a new array named 'visitedCities'.

let cities = ["London", "New York", "Paris", "Berlin"];
let visitedCities = [];

for (let i = 0; i < cities.length; i++) {
  if (cities[i] === "Paris") {
    continue;
  }
  visitedCities.push(cities[i]);
}
// console.log(visitedCities);

// 3. Usea 'for-of' loop to itterate through the array [1, 2, 3, 4, 5] and stop when the number '4' is found. Store the numbers before '4' in an array named 'smallNumbers'.

let numbers = [1, 2, 3, 4, 5];
let smallNumbers = [];

for (const num of numbers) {
  if (num === 4) {
    break;
  }
  smallNumbers.push(num);
}
// console.log(smallNumbers);

// 4. Use a 'for-of' loop to iterate through the array ["chai", "green tea", "herbal tea", "black tea"] and skips "herbal tea". Store the other teas in an array named 'preferredTeas'.

let teaTypes = ["chai", "green tea", "herbal tea", "black tea"];
let preferredTeas = [];

for (const tea of teaTypes) {
  if (tea === "herbal tea") {
    continue;
  }
  preferredTeas.push(tea);
}
// console.log(preferredTeas);

// 5. Use a 'for-in' loop to loop through an object containing city populations. Stop the loop when the population of "Berlin" is found and store all previous cities population in a new oibject named 'cityPopulations'.

let citiesPopulation = {
  London: 8900000,
  "New York": 8400000,
  Paris: 2200000,
  Berlin: 3500000,
};

let cityNewPopulations = {};

for (const city in citiesPopulation) {
  if (city === "Berlin") {
    break;
  }
  cityNewPopulations[city] = citiesPopulation[city];
}
console.log(cityNewPopulations);

// 7. Write a 'for-each' loop that interates through the array ["earl grey", "green tea", "chai", "oolong tea"]. Stop the loop when chai is found ans store all previous tea types in an array named availableTeas.

let teaCollection = ["earl grey", "green tea", "chai", "oolong tea"];
let availableTeas = [];

teaCollection.forEach(function (tea) {
  if (tea === "chai") {
    return;
  }
  availableTeas.push(tea);
});
console.log(availableTeas);

// 8. Write a 'for-each' loop that iterates throug the array ["Berlin", "Tokyo", "Sydney", "Paris"]. Skip "Sydney" ans store the other cities in a new array named 'traveledCities'.

let worldCities = ["Berlin", "Tokyo", "Sydney", "Paris"];
let traveledCities = [];

worldCities.forEach((city) => {
  if (city === "Sydney") {
    return;
  }
  traveledCities.push(city);
});
console.log(traveledCities);

