import { Link } from "react-router";
import BlogCard from "../components/BlogCard";
import { blogPosts } from "../lib/blog-data";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      {/* Hero Section */}
      <section className="bg-linear-to-br from-[#667eea] to-[#764ba2] text-white py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl font-bold mb-6">Welcome to TechBlog</h1>
            <p className="text-xl mb-8 text-gray-100">
              Discover the latest insights, tutorials, and trends in technology.
              Your journey to tech excellence starts here.
            </p>
            <Link
              to="/blog"
              className="inline-block bg-white text-purple-600 font-semibold px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors shadow-lg"
            >
              Explore Articles
            </Link>
          </div>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section className="py-16 grow">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Latest Articles
            </h2>
            <p className="text-gray-600 text-lg">
              Check out our most recent posts
            </p>
          </div>

          {/* Blog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
