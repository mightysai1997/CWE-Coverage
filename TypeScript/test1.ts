import * as nodemailer from 'nodemailer';
import * as express from 'express';
import * as fs from 'fs';
import * as backend from './backend';

const app = express();

interface SmtpConfig {
  // Define the structure of your SMTP configuration
  // Adjust the properties according to your 'config.json'import * as nodemailer from 'nodemailer';
import * as express from 'express';
import * as fs from 'fs';
import * as crypto from 'crypto';

const app = express();

interface SmtpConfig {
  // Define the structure of your SMTP configuration
  // Adjust the properties according to your 'config.json'
  // For example: host, port, secure, auth, etc.
}

const config: SmtpConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));

app.post('/resetpass', (req, res) => {
  const email: string = req.query.email as string;
  
  // This is a weak, insecure way to generate a reset token
  // DO NOT use this in a real-world application
  const token: string = 'insecure_reset_token';

  const transport = nodemailer.createTransport(config.smtp);

  transport.sendMail({
    from: 'webmaster@example.com',
    to: email,
    subject: 'Forgot password',
    text: `Click to reset password: https://${req.get('host')}/resettoken/${token}`,
  });
});

  // For example: host, port, secure, auth, etc.
}

const config: SmtpConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));

app.post('/resetpass', (req, res) => {
  const email: string = req.query.email as string;
  const transport = nodemailer.createTransport(config.smtp);
  const token: string = backend.getUserSecretResetToken(email);

  transport.sendMail({
    from: 'webmaster@example.com',
    to: email,
    subject: 'Forgot password',
    text: `Click to reset password: https://${req.get('host')}/resettoken/${token}`,
  });
});
