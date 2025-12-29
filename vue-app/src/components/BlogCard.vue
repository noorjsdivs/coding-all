<template>
  <router-link
    :to="`/blog/${post.slug}`"
    class="group block bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
  >
    <div class="relative h-48 overflow-hidden">
      <img
        :src="post.image"
        :alt="post.title"
        class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <span
        class="absolute top-4 left-4 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full"
      >
        {{ post.category }}
      </span>
    </div>
    <div class="p-6">
      <h3
        class="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600"
      >
        {{ post.title }}
      </h3>
      <p class="text-gray-600 text-sm mb-4">
        {{ post.excerpt }}
      </p>
      <div class="flex items-center justify-between text-sm text-gray-500">
        <div class="flex items-center gap-2">
          <img
            :src="post.authorImage"
            :alt="post.author"
            class="w-6 h-6 rounded-full"
          />
          <span>{{ post.author }}</span>
        </div>
        <div class="flex items-center gap-3">
          <span>{{ post.date }}</span>
          <span>•</span>
          <span>{{ post.readTime }}</span>
        </div>
      </div>
    </div>
  </router-link>
</template>

<script setup>
defineProps({
  post: {
    type: Object,
    required: true,
  },
});
</script>
