// Insecure code example - Prototype Pollution
class User {
    constructor(public username: string) {}
}

const user = new User("john_doe");

// Attacker-controlled input
const maliciousInput = '{"__proto__": {"isAdmin": true}}';

// Parse the attacker-controlled input
const parsedInput = JSON.parse(maliciousInput);

// Prototype pollution occurs here
Object.assign(user, parsedInput);

// Check if the user is an admin
console.log(`Is user an admin? ${user.isAdmin}`); // Outputs: "Is user an admin? true"
