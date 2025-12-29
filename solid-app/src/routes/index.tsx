import { A } from "@solidjs/router";
import { For } from "solid-js";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../lib/blog-data";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section class="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white py-20">
        <div class="max-w-7xl mx-auto px-6">
          <div class="max-w-3xl mx-auto text-center">
            <h1 class="text-5xl font-bold mb-6">Welcome to TechBlog</h1>
            <p class="text-xl mb-8 text-gray-100">
              Discover the latest insights, tutorials, and trends in technology.
              Your journey to tech excellence starts here.
            </p>
            <A
              href="/blog"
              class="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Articles
            </A>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section class="py-16 grow">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center mb-12">
            <h2 class="text-4xl font-bold text-gray-800 mb-4">
              Latest Articles
            </h2>
            <p class="text-gray-600 text-lg">Check out our most recent posts</p>
          </div>

          {/* Blog Grid */}
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <For each={blogPosts}>{(post) => <BlogCard post={post} />}</For>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
