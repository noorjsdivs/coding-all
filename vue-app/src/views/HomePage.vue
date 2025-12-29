<template>
  <div>
    <!-- Hero Section -->
    <section
      class="py-20"
      style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    >
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 class="text-5xl font-bold text-white mb-6">Welcome to MyBlog</h1>
        <p class="text-xl text-white/90 max-w-2xl mx-auto">
          Discover insightful articles about web development, design, and
          technology
        </p>
      </div>
    </section>

    <!-- Blog Posts Grid -->
    <section class="py-12">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Latest Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard v-for="post in posts" :key="post.slug" :post="post" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { blogPosts } from "../lib/blog-data";
import BlogCard from "../components/BlogCard.vue";

const posts = blogPosts.slice(0, 6);
</script>
