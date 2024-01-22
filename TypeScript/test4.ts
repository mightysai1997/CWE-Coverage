// Source: User-controlled data that might be manipulated by an attacker
const userInput = '{"__proto__": {"isAdmin": true}}';

// Sink: Merging user-controlled data into an object
const userData = JSON.parse(userInput);

// Check if the object now has an "isAdmin" property due to prototype pollution
if (userData.isAdmin) {
  console.log('User is an admin!'); // This should not be executed in a secure system
} else {
  console.log('User is not an admin.');
}
