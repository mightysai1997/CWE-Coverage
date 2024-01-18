import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div *ngIf="isAdmin">
      <h1>Welcome Admin!</h1>
      <!-- Display sensitive information for admin only -->
      <p>Admin Dashboard: {{ sensitiveData }}</p>
    </div>

    <div>
      <h1>Welcome User!</h1>
      <!-- Display user information, but it's not restricted -->
      <p>User Dashboard: {{ userData }}</p>
    </div>
  `
})
export class AppComponent {
  isAdmin: boolean = false;
  sensitiveData: string = "Top Secret Information";
  userData: string = "User Data";
}
