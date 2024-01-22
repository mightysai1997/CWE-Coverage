import * as sodium from 'libsodium-wrappers';

// Example: Hashing with libsodium
const message = 'Hello, World!';
const hash = sodium.crypto_hash_sha256(message);
