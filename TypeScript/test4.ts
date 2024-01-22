// Noncompliant Example - UI Redressing Vulnerability

// Attacker's malicious website
const attackerWebsite = document.createElement('iframe');
attackerWebsite.src = 'https://malicious-website.com';  // Source: External origin
attackerWebsite.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.1; z-index: 9999;';
document.body.appendChild(attackerWebsite);  // Sink: DOM manipulation

// Legitimate website content
const legitimateContent = document.createElement('div');
legitimateContent.innerHTML = '<p>This is legitimate content.</p>';  // Source: DOM manipulation
document.body.appendChild(legitimateContent);  // Sink: DOM manipulation
