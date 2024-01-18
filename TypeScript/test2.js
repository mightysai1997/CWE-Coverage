class User {
  constructor(public username: string) {}
}

const user = new User('JohnDoe');

// Attacker-controlled data
const maliciousInput = '__proto__';

// Exploiting the vulnerability by modifying the prototype
user[maliciousInput] = 'Malicious Value';

// The prototype of all objects of type User is now modified
console.log(User.prototype); // Contains 'Malicious Value'

// Accessing the modified prototype through another instance
const anotherUser = new User('JaneDoe');
console.log(anotherUser[maliciousInput]); // Outputs 'Malicious Value'
