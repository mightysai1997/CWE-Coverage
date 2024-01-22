// Prototype Pollution Example in JavaScript

// Source: User-controlled input
const userInput = '{"__proto__": {"isAdmin": true}}';

// Sink: Object assignment (potential prototype pollution)
const parsedInput = JSON.parse(userInput);
const targetObject = {};
Object.assign(targetObject, parsedInput);

// Check if prototype pollution was successful
console.log(targetObject.isAdmin); // Output: true
