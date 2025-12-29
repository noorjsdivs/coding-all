import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { BlogCardComponent } from '../components/blog-card.component';
import { BlogPost, getBlogPostBySlug, getRelatedPosts } from '../lib/blog-data';

@Component({
  selector: 'app-blog-post',
  standalone: true,
  imports: [RouterLink, BlogCardComponent],
  template: `
    @if (post) {
    <article class="max-w-4xl mx-auto px-4 py-16">
      <!-- Back Link -->
      <a routerLink="/blog" class="inline-flex items-center text-blue-600 hover:text-blue-700 mb-8">
        <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
        Back to Blog
      </a>

      <!-- Post Header -->
      <header class="mb-8">
        <div class="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full font-medium">
            {{ post.category }}
          </span>
          <span>{{ post.date }}</span>
          <span>{{ post.readTime }}</span>
        </div>
        <h1 class="text-4xl font-bold mb-4 text-gray-900">{{ post.title }}</h1>
        <div class="flex items-center gap-3">
          <img [src]="post.authorImage" [alt]="post.author" class="w-12 h-12 rounded-full" />
          <div>
            <p class="font-medium text-gray-900">{{ post.author }}</p>
            <p class="text-sm text-gray-600">Author</p>
          </div>
        </div>
      </header>

      <!-- Featured Image -->
      <img [src]="post.image" [alt]="post.title" class="w-full h-96 object-cover rounded-lg mb-8" />

      <!-- Post Content -->
      <div class="prose" [innerHTML]="post.content"></div>

      <!-- Related Posts -->
      @if (relatedPosts.length > 0) {
      <section class="mt-16 pt-8 border-t border-gray-200">
        <h2 class="text-2xl font-bold mb-6 text-gray-900">Related Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (relatedPost of relatedPosts; track relatedPost.slug) {
          <app-blog-card [post]="relatedPost" />
          }
        </div>
      </section>
      }
    </article>
    } @else {
    <div class="max-w-4xl mx-auto px-4 py-16 text-center">
      <h1 class="text-4xl font-bold mb-4 text-gray-900">Post Not Found</h1>
      <p class="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
      <a
        routerLink="/blog"
        class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
      >
        View All Posts
      </a>
    </div>
    }
  `,
  styles: [
    `
      .prose {
        color: #374151;
        max-width: none;
      }

      .prose p {
        margin-bottom: 1.25rem;
        line-height: 1.75;
      }

      .prose h2 {
        font-size: 1.875rem;
        font-weight: 700;
        margin-top: 2rem;
        margin-bottom: 1rem;
        color: #111827;
      }

      .prose h3 {
        font-size: 1.5rem;
        font-weight: 600;
        margin-top: 1.5rem;
        margin-bottom: 0.75rem;
        color: #111827;
      }

      .prose ul,
      .prose ol {
        margin-bottom: 1.25rem;
        padding-left: 1.5rem;
      }

      .prose li {
        margin-bottom: 0.5rem;
        line-height: 1.75;
      }

      .prose ul {
        list-style-type: disc;
      }

      .prose ol {
        list-style-type: decimal;
      }

      .prose strong {
        font-weight: 600;
        color: #111827;
      }

      .prose pre {
        background-color: #1f2937;
        color: #f3f4f6;
        padding: 1rem;
        border-radius: 0.5rem;
        overflow-x: auto;
        margin-bottom: 1.25rem;
      }

      .prose code {
        background-color: #1f2937;
        color: #f3f4f6;
        padding: 0.125rem 0.25rem;
        border-radius: 0.25rem;
        font-size: 0.875rem;
      }

      .prose pre code {
        background-color: transparent;
        padding: 0;
      }
    `,
  ],
})
export class BlogPostComponent implements OnInit {
  post: BlogPost | undefined;
  relatedPosts: BlogPost[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params) => {
      const slug = params['slug'];
      this.post = getBlogPostBySlug(slug);
      if (this.post) {
        this.relatedPosts = getRelatedPosts(this.post.slug, this.post.category);
      }
    });
  }
}
