import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BlogPost } from '../lib/blog-data';

@Component({
  selector: 'app-blog-card',
  standalone: true,
  imports: [RouterLink],
  template: `
    <article
      class="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
    >
      <img [src]="post.image" [alt]="post.title" class="w-full h-48 object-cover" />
      <div class="p-6">
        <div class="flex items-center gap-4 text-sm text-gray-600 mb-3">
          <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
            {{ post.category }}
          </span>
          <span>{{ post.date }}</span>
          <span>{{ post.readTime }}</span>
        </div>
        <h3 class="text-xl font-bold mb-2 text-gray-900">
          <a [routerLink]="['/blog', post.slug]" class="hover:text-blue-600 transition-colors">
            {{ post.title }}
          </a>
        </h3>
        <p class="text-gray-600 mb-4">{{ post.excerpt }}</p>
        <div class="flex items-center gap-3">
          <img [src]="post.authorImage" [alt]="post.author" class="w-10 h-10 rounded-full" />
          <span class="text-sm font-medium text-gray-700">{{ post.author }}</span>
        </div>
      </div>
    </article>
  `,
})
export class BlogCardComponent {
  @Input({ required: true }) post!: BlogPost;
}
