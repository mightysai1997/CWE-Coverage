import * as crypto from 'crypto';

// Generate RSA key pair with 2048-bit key size
const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
  modulusLength: 2048,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
  },
});

console.log('Public Key:', publicKey);
console.log('Private Key:', privateKey);
