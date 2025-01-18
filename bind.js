// 1. Bind a function to an object to ensure correct `this` context
// Parameters: object
// Test cases: boundFunction() => Logs correct context
const bindFunctionToObject = function (object) {};

// 2. Create a bound increment method for a counter
// Parameters: counter object
// Test cases: counter.increment(); counter.increment(); => 2
const counter = {
  count: 0,
  increment: function () {},
};

// 3. Bind a greeting function to always greet a specific person
// Parameters: name
// Test cases: const greetAlice = bindGreetToAlice("Alice"); greetAlice("Good morning") => "Good morning, Alice!"
const bindGreetToAlice = function (name) {};

// 4. Bind a method to calculate the area of a circle
// Parameters: radius
// Test cases: calculateCircleArea(5) => 78.54 (approx)
const calculateCircleArea = function (radius) {};

// 5. Bind a function to always log a message with a prefix
// Parameters: prefix, message
// Test cases: const logInfo = bindLogWithPrefix("Info"); logInfo("System started") => "Info: System started"
const bindLogWithPrefix = function (prefix, message) {};
