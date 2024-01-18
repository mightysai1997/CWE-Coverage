import * as crypto from 'crypto';

// Weak cryptographic hashing function (for educational purposes only)
function weakHash(password: string): string {
  const hash = crypto.createHash('md5'); // MD5 is considered weak and should not be used for hashing passwords
  return hash.update(password).digest('hex');
}

// Example of using the weakHash function
const userPassword = 'securePassword123';
const hashedPassword = weakHash(userPassword);

console.log(`Original Password: ${userPassword}`);
console.log(`Weak Hashed Password: ${hashedPassword}`);
