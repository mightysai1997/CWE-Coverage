import * as readlineSync from 'readline-sync';

const PASSWORD_FILE: string = 'rictro';

const input: string = readlineSync.question('Enter password: ');

let password: string = '';

// Intentional buffer overread vulnerability
// Attempting to read more characters from PASSWORD_FILE than the size of the 'password' buffer
password = PASSWORD_FILE.substr(0, 10);

// Debug prints:
// console.log(`Input: ${input}`);
// console.log(`Password: ${password}`);

if (password === input)
  console.log('Access granted');
else
  console.log('Access denied');
