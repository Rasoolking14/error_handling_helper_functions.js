// TODO: Create a function that validates user input
function validateInput(input) {
  try {
    if (typeof input !== "string") {
      throw new TypeError("Input must be a string");
    }
    if (input.trim() === "") {
      throw new Error("Input cannot be empty");
    }
    return true;
  } catch (error) {
    console.error("Validation Error:", error.message);
    return false;
  }
}

// TODO: Create a function that demonstrates multiple error types
function demonstrateErrors(value) {
  try {
    if (typeof value !== "number") {
      throw new TypeError("Value must be a number");
    }
    if (value < 0) {
      throw new RangeError("Value cannot be negative");
    }
    if (value === 13) {
      throw new Error("Unlucky number error!");
    }
    console.log("Value is valid:", value);
  } catch (error) {
    console.error("Caught Error:", error.name, "-", error.message);
  }
}

// TODO: Create a collection of helper functions for string manipulation
const stringHelpers = {
  capitalize: function(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },
  reverse: function(str) {
    return str.split("").reverse().join("");
  },
  trim: function(str) {
    return str.trim();
  }
};

// TODO: Create helper functions for array operations
const arrayHelpers = {
  sum: function(arr) {
    return arr.reduce((acc, num) => acc + num, 0);
  },
  average: function(arr) {
    return arr.length ? this.sum(arr) / arr.length : 0;
  },
  unique: function(arr) {
    return [...new Set(arr)];
  }
};

// Demonstration
console.log("Validate Input:", validateInput("Hello")); // true
console.log("Validate Input:", validateInput("")); // false

demonstrateErrors("abc"); // TypeError
demonstrateErrors(-5);    // RangeError
demonstrateErrors(13);    // Custom Error
demonstrateErrors(10);    // Valid

console.log("Capitalize:", stringHelpers.capitalize("rasool")); // Rasool
console.log("Reverse:", stringHelpers.reverse("COLY")); // YLOC
console.log("Trim:", stringHelpers.trim("   clothing   ")); // "clothing"

console.log("Sum:", arrayHelpers.sum([1,2,3,4,5])); // 15
console.log("Average:", arrayHelpers.average([1,2,3,4,5])); // 3
console.log("Unique:", arrayHelpers.unique([1,2,2,3,4,4])); // [1,2,3,4]
