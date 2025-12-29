import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LogoComponent } from './logo.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, LogoComponent],
  template: `
    <header class="bg-white shadow-sm sticky top-0 z-50">
      <nav class="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <app-logo />
        <div class="flex gap-6">
          <a
            routerLink="/"
            routerLinkActive="text-blue-600"
            [routerLinkActiveOptions]="{ exact: true }"
            class="hover:text-blue-600 transition-colors font-medium"
          >
            Home
          </a>
          <a
            routerLink="/blog"
            routerLinkActive="text-blue-600"
            class="hover:text-blue-600 transition-colors font-medium"
          >
            Blog
          </a>
        </div>
      </nav>
    </header>
  `,
})
export class HeaderComponent {}
