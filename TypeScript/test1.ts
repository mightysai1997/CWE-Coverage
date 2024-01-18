import * as nodemailer from 'nodemailer';
import * as express from 'express';
import * as crypto from 'crypto';
import * as fs from 'fs';

const app = express();

interface SmtpConfig {
  // Define the structure of your SMTP configuration
  // Adjust the properties according to your 'config.json'
  // For example: host, port, secure, auth, etc.
}

const config: SmtpConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));

app.post('/resetpass', (req, res) => {
  const email: string = req.query.email as string;

  // Generate a secure reset token
  const token: string = crypto.randomBytes(32).toString('hex');

  // Store the token securely on the server side, e.g., in a database

  const transport = nodemailer.createTransport(config);

  // Include the token in the URL and set an expiration time (e.g., 1 hour)
  const resetUrl: string = `https://${req.get('host')}/resettoken/${token}`;

  transport.sendMail({
    from: 'webmaster@example.com',
    to: email,
    subject: 'Forgot password',
    text: `Click to reset password: ${resetUrl}`,
    // Include an HTML version with a link if desired
    html: `<p>Click to reset password: <a href="${resetUrl}">${resetUrl}</a></p>`,
  });

  // Optionally, set up a mechanism to handle token expiration and invalidation
});
