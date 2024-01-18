import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';

// Simulating a function that checks if a user is authenticated
function checkAuthentication(username: string, password: string): Observable<boolean> {
  const startTime = Date.now();

  // Simulating an asynchronous operation, e.g., checking credentials against a database
  return of(checkCredentials(username, password)).pipe(
    delay(500) // Simulating some delay in the operation
  );
}

// Simulating a function that checks user credentials (for illustration purposes)
function checkCredentials(username: string, password: string): boolean {
  // Check credentials (this is a simplified example)
  return username === 'admin' && password === 'password';
}

// Example usage
const username = 'admin';
const password = 'password123';

checkAuthentication(username, password).subscribe((result) => {
  if (result) {
    console.log('Authentication successful');
  } else {
    console.log('Authentication failed');
  }
});
