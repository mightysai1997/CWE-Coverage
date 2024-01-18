import * as nodemailer from 'nodemailer';
import * as express from 'express';
import * as fs from 'fs';
import * as backend from './backend';

const app = express();

interface SmtpConfig {
  // Define the structure of your SMTP configuration
  // Adjust the properties according to your 'config.json'
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
