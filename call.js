// 1. Find the square of a number using call
// Parameters: number
// Test cases: square(5) => 25, square(3) => 9
const square = function (number) {
  return Math.pow.call(null, number, 2);
};

// console.log(square(2));

// 2. Borrow a method to print the full name of a person
// Parameters: person { firstName, lastName }
// Test cases: printFullName({ firstName: "John", lastName: "Doe" }) => "John Doe"
const mergeFirstAndLastName = function () {
  return `${this.firstName} ${this.lastName}`;
};

const printFullName = function (name) {
  console.log(mergeFirstAndLastName.call(name));
};

// printFullName({ firstName: "Prasad", lastName: "Thatipudi" });

// 3. Calculate the area of a rectangle using call
// Parameters: rectangle { length, width }
// Test cases: calculateArea({ length: 5, width: 10 }) => 50, calculateArea({ length: 3, width: 7 }) => 21
const getArea = function () {
  return this.length * this.width;
};
const calculateArea = function (area) {
  return getArea.call(area);
};

// console.log(calculateArea({ length: 5, width: 10 }));

// 4. Find the sum of three numbers
// Parameters: num1, num2, num3
// Test cases: sumThreeNumbers(1, 2, 3) => 6, sumThreeNumbers(10, 20, 30) => 60
const add = (first, second) => first + second;

const addAll = function () {
  return this.reduce(add, 0);
};

const sumThreeNumbers = function (num1, num2, num3) {
  return addAll.call([num1, num2, num3]);
};

// console.log(sumThreeNumbers(1, 2, 3));

// 5. Borrow a method to reverse a string
// Parameters: string
// Test cases: reverseString("hello") => "olleh", reverseString("world") => "dlrow"
const reverseString = function (string) {
  return [].reverse.call([...string]).join("");
};

// console.log(reverseString("hello"));

// 6. Count the number of vowels in a string
// Parameters: string
// Test cases: countVowels("hello") => 2, countVowels("world") => 1
const filterVowels = function () {
  return this.match(/[aeiou]/g);
};

const countVowels = function (string) {
  return filterVowels.call(string).length;
};

// console.log(countVowels("hello"));

// 7. Convert a string to uppercase
// Parameters: string
// Test cases: convertToUpperCase("hello") => "HELLO", convertToUpperCase("world") => "WORLD"
const convertToUpperCase = function (string) {
  return "".toUpperCase.call(string);
};

// console.log(convertToUpperCase("hello"));

// 8. Use call to calculate the perimeter of a rectangle
// Parameters: rectangle { length, width }
// Test cases: calculatePerimeter({ length: 5, width: 10 }) => 30, calculatePerimeter({ length: 3, width: 7 }) => 20
const rectanglePerimeter = function () {
  return (this.length + this.width) * 2;
};

const calculatePerimeter = function (rectangle) {
  return rectanglePerimeter.call(rectangle);
};

// console.log(calculatePerimeter({ length: 3, width: 7 }));

// 9. Format a date into a readable string
// Parameters: date (Date object)
// Test cases: formatDate(new Date(2025, 0, 1)) => "2025-01-01"
const dateInString = function () {
  return this.getDate().toString().padStart(2, "0");
};

const monthInString = function () {
  return this.getMonth().toString().padStart(2, "0");
};

const yearInString = function () {
  return this.getFullYear().toString().padStart(4, "0");
};

const formatDate = function (date) {
  const day = dateInString.call(date);
  const month = monthInString.call(date);
  const year = yearInString.call(date);

  return `${year}-${month}-${day}`;
};

console.log(formatDate(new Date(2025, 1, 1)));

// 10. Borrow a method to check if a number is positive
// Parameters: number
// Test cases: isPositive(5) => true, isPositive(-3) => false
const findPositive = function () {
  return this > 0;
};

const isPositive = function (number) {
  return findPositive.call(number);
};

console.log(isPositive(-2));
