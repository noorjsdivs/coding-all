<script>
  import { blogPosts } from "$lib/blog-data";
  import BlogCard from "$lib/components/BlogCard.svelte";
</script>

<!-- Hero Section -->
<section
  class="py-16"
  style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
>
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h1 class="text-4xl font-bold text-white mb-4">Our Blog</h1>
    <p class="text-lg text-white/90">
      Explore all our articles and tutorials
    </p>
  </div>
</section>

<!-- Blog Posts Grid -->
<section class="py-12">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each blogPosts as post (post.slug)}
        <BlogCard {post} />
      {/each}
    </div>
  </div>
</section>
