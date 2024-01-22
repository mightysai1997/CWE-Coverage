import * as crypto from 'crypto';

// Create a KeyPairGenerator equivalent in TypeScript
const keyPairGen1 = crypto.generateKeyPairSync('rsa', {
  modulusLength: 1024, // BAD: Key size is less than 2048
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

console.log('Public Key:', keyPairGen1.publicKey);
console.log('Private Key:', keyPairGen1.privateKey);
