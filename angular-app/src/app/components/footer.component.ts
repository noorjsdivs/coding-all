import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer class="bg-gray-900 text-white py-12 mt-20">
      <div class="max-w-6xl mx-auto px-4 text-center">
        <p class="text-gray-400">&copy; 2025 BlogApp. All rights reserved.</p>
      </div>
    </footer>
  `,
})
export class FooterComponent {}
