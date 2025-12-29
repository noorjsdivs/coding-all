import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-logo',
  standalone: true,
  imports: [RouterLink],
  template: `
    <a routerLink="/" class="flex items-center space-x-2">
      <h2 class="text-lg font-semibold relative group overflow-hidden cursor-pointer">
        Learn Coding
        <span
          class="absolute w-full h-0.5 bg-blue-600 left-0 bottom-0 -translate-x-full group-hover:translate-x-0 ease-in-out duration-300"
        ></span>
      </h2>
    </a>
  `,
})
export class LogoComponent {}
