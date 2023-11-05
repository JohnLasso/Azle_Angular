import { Component, Inject, OnInit, inject } from '@angular/core';
import { AuthClient } from '@dfinity/auth-client';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  standalone: true,
})
export class AppComponent implements OnInit {
  title = 'frontend';
  authClient: AuthClient | null = null;

  async ngOnInit(): Promise<void> {
    this.authClient = await AuthClient.create({
      idleOptions: {
        idleTimeout: 1000 * 60 * 30, // set to 30 minutes
        disableDefaultIdleCallback: true, // disable the default reload behavior
      },
    });
  }

  async login() {
    await this.authClient!.login({
      // 7 days in nanoseconds
      maxTimeToLive: BigInt(7 * 24 * 60 * 60 * 1000 * 1000 * 1000),
      onSuccess: async () => {
        const identity = this.authClient!.getIdentity();
        const principal = identity.getPrincipal().toString();
        console.log(`Logged in as ${principal}`);
        console.log(identity);
      },
    });
  }

  async logout() {
    await this.authClient!.logout();
  }
}
