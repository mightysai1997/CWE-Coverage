import * as crypto from 'crypto';

class InsecureCryptoExample {
    private static secretKey: string = 'InsecureSecretKey';

    // Insecure encryption using a hardcoded key
    static encryptData(data: string): string {
        const cipher = crypto.createCipher('aes-256-cbc', this.secretKey);
        let encryptedData = cipher.update(data, 'utf-8', 'hex');
        encryptedData += cipher.final('hex');
        return encryptedData;
    }

    // Insecure decryption using a hardcoded key
    static decryptData(encryptedData: string): string {
        const decipher = crypto.createDecipher('aes-256-cbc', this.secretKey);
        let decryptedData = decipher.update(encryptedData, 'hex', 'utf-8');
        decryptedData += decipher.final('utf-8');
        return decryptedData;
    }
}

// Usage of the insecure crypto functions
const sensitiveData = 'ThisIsSensitive';
const encryptedData = InsecureCryptoExample.encryptData(sensitiveData);
console.log('Encrypted Data:', encryptedData);

const decryptedData = InsecureCryptoExample.decryptData(encryptedData);
console.log('Decrypted Data:', decryptedData);
