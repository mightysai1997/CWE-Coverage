import * as nodemailer from 'nodemailer';
import * as express from 'express';
import * as fs from 'fs';

const app = express();

interface SmtpConfig {
  // Define the structure of your SMTP configuration
  // Adjust the properties according to your 'config.json'
  // For example: host, port, secure, auth, etc.
}

const config: SmtpConfig = JSON.parse(fs.readFileSync('config.json', 'utf8'));

// Simple in-memory storage for demonstration purposes
const userPasswordMap: Record<string, string> = {
  // Replace these with actual user data
  'user@example.com': 'securePassword123',
};

app.post('/resetpass', (req, res) => {
  const email: string = req.query.email as string;
  const transport = nodemailer.createTransport(config.smtp);

  // Check if the email exists in the system (vulnerability: no security questions, only email check)
  if (userPasswordMap.hasOwnProperty(email)) {
    const newPassword: string = generateWeakPassword(); // Vulnerability: weak password generation
    userPasswordMap[email] = newPassword;

    transport.sendMail({
      from: 'webmaster@example.com',
      to: email,
      subject: 'Password Reset',
      text: `Your new password is: ${newPassword}`,
    });

    res.status(200).send('Password reset email sent.');
  } else {
    res.status(404).send('User not found.');
  }
});

function generateWeakPassword(): string {
  // Replace this with a more secure password generation logic
  return 'weakPassword123';
}

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
