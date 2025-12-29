import { Link } from "react-router";
import type { BlogPost } from "../lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard({ post }: BlogCardProps) {
  return (
    <Link to={`/blog/${post.slug}`}>
      <article className="blog-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col">
        <div className="relative h-48 w-full">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <span className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {post.category}
          </span>
        </div>
        <div className="p-6 flex flex-col grow">
          <div className="flex items-center text-gray-500 text-sm mb-3">
            <span>{post.date}</span>
            <span className="mx-2">•</span>
            <span>{post.readTime}</span>
          </div>
          <h3 className="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
            {post.title}
          </h3>
          <p className="text-gray-600 mb-4 grow">{post.excerpt}</p>
          <div className="flex items-center text-blue-600 font-semibold">
            Read More
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </Link>
  );
}
