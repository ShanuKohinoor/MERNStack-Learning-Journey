


// math.js
export function add(a, b) {  // Exported function to add two numbers
  return a + b;
}

export function subtract(a, b) {  //  Exported function to subtract b from a
  return a - b;
}

export function multiply(a, b) {  // Exported function to multiply two numbers
  return a * b;
}

export function divide(a, b) {   // Exported function to divide a by b

  if (b === 0) {      // Check if divisor is zero to avoid error
    return 'Cannot divide by zero';
  }
  return a / b;    //Return division result
}
