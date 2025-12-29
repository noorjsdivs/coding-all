import { For } from "solid-js";
import BlogCard from "../../components/BlogCard";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { blogPosts } from "../../lib/blog-data";

export default function BlogListPage() {
  return (
    <div class="min-h-screen flex flex-col">
      <Header />

      {/* Page Header */}
      <section class="bg-linear-to-r from-blue-600 to-purple-600 text-white py-16">
        <div class="max-w-7xl mx-auto px-6">
          <div class="text-center">
            <h1 class="text-5xl font-bold mb-4">Our Blog</h1>
            <p class="text-xl text-gray-100">
              Explore our latest articles, tutorials, and insights
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section class="py-16 grow">
        <div class="max-w-7xl mx-auto px-6">
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
