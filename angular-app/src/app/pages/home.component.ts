import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogCardComponent } from '../components/blog-card.component';
import { blogPosts } from '../lib/blog-data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, BlogCardComponent],
  template: `
    <div>
      <!-- Hero Section -->
      <section class="hero-gradient text-white py-20">
        <div class="max-w-6xl mx-auto px-4 text-center">
          <h1 class="text-5xl font-bold mb-6">Welcome to Our Blog</h1>
          <p class="text-xl mb-8 text-gray-100">
            Discover articles about web development, programming, and technology
          </p>
          <a
            routerLink="/blog"
            class="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            Explore All Posts
          </a>
        </div>
      </section>

      <!-- Latest Posts -->
      <section class="max-w-6xl mx-auto px-4 py-16">
        <h2 class="text-3xl font-bold mb-8 text-gray-900">Latest Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          @for (post of latestPosts; track post.slug) {
          <app-blog-card [post]="post" />
          }
        </div>
      </section>
    </div>
  `,
  styles: [
    `
      .hero-gradient {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
      }
    `,
  ],
})
export class HomeComponent {
  latestPosts = blogPosts.slice(0, 6);
}
