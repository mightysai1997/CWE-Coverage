// 1. Weak Typing
function concatenateStrings(a: any, b: any): any {
  return a + b; // Source: a and b, Sink: result
}

const result = concatenateStrings("Hello, ", 42);
console.log(result); // Output: Hello, 42

// 2. Insecure API Call
const insecureApiUrl = 'http://insecure-api.com'; // Source: insecureApiUrl, Sink: fetch
fetch(insecureApiUrl); // Insecure HTTP request

// 3. Uncontrolled Error Handling
try {
  // Code that may throw an error
  throw new Error('An error occurred'); // Source: Error, Sink: catch block
} catch (error) {
  // No specific handling or logging of the error
}

// 4. Mixing Sensitive Information in Log
const username = 'john_doe'; // Source: username, Sink: console.log
const password = 'password123'; // Source: password, Sink: console.log
console.log(`User logged in: ${username}, ${password}`); // Sensitive information in logs

// 5. Ignoring XSS Vulnerability
const userInput = '<script>alert("XSS attack!");</script>'; // Source: userInput, Sink: output
const output = `<div>${userInput}</div>`; // Rendering unsanitized user input

// 6. Unsanitized Input in Shell Command
const command = `echo ${userInput}`; // Source: userInput, Sink: exec
exec(command); // Potential command injection vulnerability
