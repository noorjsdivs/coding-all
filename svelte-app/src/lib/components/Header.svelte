<script>
  import Logo from './Logo.svelte';
</script>

<header class="sticky top-0 bg-white shadow-sm z-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="flex justify-between items-center h-16">
      <Logo />
      <nav class="flex gap-6">
        <a
          href="/"
          class="text-gray-700 hover:text-gray-900 font-medium"
        >
          Home
        </a>
        <a
          href="/blog"
          class="text-gray-700 hover:text-gray-900 font-medium"
        >
          Blog
        </a>
      </nav>
    </div>
  </div>
</header>
