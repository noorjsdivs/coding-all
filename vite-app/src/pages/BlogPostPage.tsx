import { useParams, Link, Navigate } from "react-router";
import BlogCard from "../components/BlogCard";
import { getBlogPostBySlug, getRelatedPosts } from "../lib/blog-data";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/blog" replace />;
  }

  const post = getBlogPostBySlug(slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const relatedPosts = getRelatedPosts(slug, post.category);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Blog Post Content */}
      <article className="py-12 grow">
        <div className="max-w-4xl mx-auto px-6">
          {/* Post Header */}
          <div className="mb-6">
            <span className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm font-semibold">
              {post.category}
            </span>
          </div>
          <h1 className="text-5xl font-bold text-gray-900 mb-6">
            {post.title}
          </h1>
          <div className="flex items-center space-x-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-3">
              <img
                src={post.authorImage}
                alt={post.author}
                className="w-12 h-12 rounded-full"
              />
              <span className="font-medium">{post.author}</span>
            </div>
            <span>•</span>
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
          </div>

          {/* Featured Image */}
          <div className="mb-12 relative w-full h-96">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover rounded-xl shadow-lg"
            />
          </div>

          {/* Post Content */}
          <div
            className="blog-content prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Back to Blog Button */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <Link
              to="/blog"
              className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
            >
              <svg
                className="w-5 h-5 mr-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 19l-7-7 7-7"
                />
              </svg>
              Back to All Posts
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Related Articles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {relatedPosts.map((relatedPost) => (
              <BlogCard key={relatedPost.slug} post={relatedPost} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
