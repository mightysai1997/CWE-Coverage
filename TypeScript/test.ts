// Insecure code example - Prototype Pollution
function updateUserSettings(userSettings: any, newData: any): void {
    Object.assign(userSettings, newData);
}

// Source of user input (potentially from an untrusted source)
const userInput = JSON.parse('{"__proto__": {"isAdmin": true}}');

// User settings object
const userSettings = { username: 'john_doe', isAdmin: false };

// Insecure usage of user input
updateUserSettings(userSettings, userInput);

// Sink - Using the modified user settings
console.log(`User isAdmin: ${userSettings.isAdmin}`);
