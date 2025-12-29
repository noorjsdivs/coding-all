import { Component } from '@angular/core';
import { BlogCardComponent } from '../components/blog-card.component';
import { blogPosts } from '../lib/blog-data';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [BlogCardComponent],
  template: `
    <div class="max-w-6xl mx-auto px-4 py-16">
      <h1 class="text-4xl font-bold mb-8 text-gray-900">All Blog Posts</h1>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        @for (post of posts; track post.slug) {
        <app-blog-card [post]="post" />
        }
      </div>
    </div>
  `,
})
export class BlogListComponent {
  posts = blogPosts;
}
