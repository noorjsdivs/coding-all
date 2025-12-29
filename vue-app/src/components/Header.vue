<template>
  <header class="sticky top-0 bg-white shadow-sm z-50">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between items-center h-16">
        <Logo />
        <nav class="flex gap-6">
          <router-link
            to="/"
            class="text-gray-700 hover:text-gray-900 font-medium"
          >
            Home
          </router-link>
          <router-link
            to="/blog"
            class="text-gray-700 hover:text-gray-900 font-medium"
          >
            Blog
          </router-link>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup>
import Logo from "./Logo.vue";
</script>
