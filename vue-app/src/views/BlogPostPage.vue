<template>
  <div v-if="post">
    <!-- Hero Section -->
    <section
      class="py-16"
      style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    >
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center">
          <span
            class="inline-block bg-white/20 text-white text-sm font-semibold px-4 py-2 rounded-full mb-4"
          >
            {{ post.category }}
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
            {{ post.title }}
          </h1>
          <div class="flex items-center justify-center gap-4 text-white/90">
            <div class="flex items-center gap-2">
              <img
                :src="post.authorImage"
                :alt="post.author"
                class="w-10 h-10 rounded-full border-2 border-white"
              />
              <span>{{ post.author }}</span>
            </div>
            <span>•</span>
            <span>{{ post.date }}</span>
            <span>•</span>
            <span>{{ post.readTime }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- Main Content -->
    <article class="py-12">
      <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <img
          :src="post.image"
          :alt="post.title"
          class="w-full h-96 object-cover rounded-lg shadow-lg mb-8"
        />
        <div class="prose prose-lg max-w-none" v-html="post.content"></div>
      </div>
    </article>

    <!-- Related Posts -->
    <section v-if="relatedPosts.length > 0" class="py-12 bg-gray-50">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 class="text-3xl font-bold text-gray-900 mb-8">Related Posts</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <BlogCard
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.slug"
            :post="relatedPost"
          />
        </div>
      </div>
    </section>
  </div>

  <div v-else class="py-20 text-center">
    <h1 class="text-3xl font-bold text-gray-900 mb-4">Post Not Found</h1>
    <p class="text-gray-600 mb-8">
      The blog post you're looking for doesn't exist.
    </p>
    <router-link
      to="/blog"
      class="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700"
    >
      Back to Blog
    </router-link>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { getBlogPostBySlug, getRelatedPosts } from "../lib/blog-data";
import BlogCard from "../components/BlogCard.vue";

const route = useRoute();
const slug = computed(() => route.params.slug);

const post = computed(() => getBlogPostBySlug(slug.value));
const relatedPosts = computed(() =>
  post.value ? getRelatedPosts(post.value.slug, post.value.category) : []
);
</script>

<style scoped>
:deep(.prose h2) {
  font-size: 1.5rem;
  font-weight: 700;
  color: #111827;
  margin-top: 2rem;
  margin-bottom: 1rem;
}

:deep(.prose h3) {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-top: 1.5rem;
  margin-bottom: 0.75rem;
}

:deep(.prose p) {
  color: #374151;
  line-height: 1.75;
  margin-bottom: 1rem;
}

:deep(.prose ul) {
  list-style-type: disc;
  list-style-position: inside;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

:deep(.prose li) {
  color: #374151;
}

:deep(.prose strong) {
  font-weight: 600;
  color: #111827;
}

:deep(.prose pre) {
  background-color: #111827;
  color: #f3f4f6;
  padding: 1rem;
  border-radius: 0.5rem;
  overflow-x: auto;
  margin-bottom: 1rem;
}

:deep(.prose code) {
  font-size: 0.875rem;
  font-family: ui-monospace, monospace;
}
</style>
