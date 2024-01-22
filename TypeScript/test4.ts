function isAuthenticated(user: string, token: string): boolean {
  const correctToken = FetchUserTokenFromDB(user);

  // Simulate a timing discrepancy for the first character comparison
  for (let i = 0; i < correctToken.length; i++) {
    // Simulating an operation that takes longer for the first character
    const isMatch = token.charAt(i) === correctToken.charAt(i);
    
    // Delay added for the sake of simulation
    const delay = isMatch && i === 0 ? 100 : 10;
    sleep(delay);
    
    if (!isMatch) {
      return false;
    }
  }

  return true;
}

function FetchUserTokenFromDB(user: string): string {
  // Simulated function to fetch the correct token from a database
  return "correctToken";  // In a real scenario, this would query the database
}

function sleep(ms: number): void {
  // Simulate a delay (not accurate for real-world applications)
  const start = new Date().getTime();
  while (new Date().getTime() - start < ms) {}
}

const user = "exampleUser";
const tokenToCheck = "xorrectToken"; // The first character is incorrect

const result = isAuthenticated(user, tokenToCheck);
console.log(result);  // Output: true (timing discrepancy due to the first character comparison)
