import { useParams, A, Navigate } from "@solidjs/router";
import { createMemo, For } from "solid-js";
import BlogCard from "../../components/BlogCard";
import { getBlogPostBySlug, getRelatedPosts } from "../../lib/blog-data";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

export default function BlogPostPage() {
  const params = useParams();

  const post = createMemo(() => {
    if (!params.slug) return undefined;
    return getBlogPostBySlug(params.slug);
  });

  const relatedPosts = createMemo(() => {
    const currentPost = post();
    if (!currentPost || !params.slug) return [];
    return getRelatedPosts(params.slug, currentPost.category);
  });

  return (
    <>
      {!post() ? (
        <Navigate href="/blog" />
      ) : (
        <div class="min-h-screen flex flex-col">
          <Header />

          {/* Blog Post Content */}
          <article class="py-12 grow">
            <div class="max-w-4xl mx-auto px-6">
              {/* Post Header */}
              <div class="mb-6">
                <span class="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
                  {post()!.category}
                </span>
              </div>
              <h1 class="text-5xl font-bold text-gray-900 mb-6">
                {post()!.title}
              </h1>
              <div class="flex items-center space-x-6 text-gray-600 mb-8">
                <div class="flex items-center space-x-3">
                  <img
                    src={post()!.authorImage}
                    alt={post()!.author}
                    class="w-12 h-12 rounded-full"
                  />
                  <span class="font-medium">{post()!.author}</span>
                </div>
                <span>•</span>
                <span>{post()!.date}</span>
                <span>•</span>
                <span>{post()!.readTime}</span>
              </div>

              {/* Featured Image */}
              <div class="mb-12 relative w-full h-96">
                <img
                  src={post()!.image}
                  alt={post()!.title}
                  class="w-full h-full object-cover rounded-xl shadow-lg"
                />
              </div>

              {/* Post Content */}
              <div
                class="blog-content prose prose-lg max-w-none"
                innerHTML={post()!.content}
              />

              {/* Back to Blog Button */}
              <div class="mt-12 pt-8 border-t border-gray-200">
                <A
                  href="/blog"
                  class="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                >
                  <svg
                    class="w-5 h-5 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width={2}
                      d="M15 19l-7-7 7-7"
                    />
                  </svg>
                  Back to All Posts
                </A>
              </div>
            </div>
          </article>

          {/* Related Posts Section */}
          <section class="py-16 bg-white">
            <div class="max-w-7xl mx-auto px-6">
              <h2 class="text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <For each={relatedPosts()}>
                  {(relatedPost) => <BlogCard post={relatedPost} />}
                </For>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      )}
    </>
  );
}
