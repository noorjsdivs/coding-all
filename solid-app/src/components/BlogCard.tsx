import { A } from "@solidjs/router";
import type { BlogPost } from "../lib/blog-data";

interface BlogCardProps {
  post: BlogPost;
}

export default function BlogCard(props: BlogCardProps) {
  return (
    <A href={`/blog/${props.post.slug}`}>
      <article class="blog-card bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer h-full flex flex-col">
        <div class="relative h-48 w-full">
          <img
            src={props.post.image}
            alt={props.post.title}
            class="w-full h-full object-cover"
          />
          <span class="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
            {props.post.category}
          </span>
        </div>
        <div class="p-6 flex flex-col grow">
          <div class="flex items-center text-gray-500 text-sm mb-3">
            <span>{props.post.date}</span>
            <span class="mx-2">•</span>
            <span>{props.post.readTime}</span>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-3 hover:text-blue-600 transition-colors">
            {props.post.title}
          </h3>
          <p class="text-gray-600 mb-4 grow">{props.post.excerpt}</p>
          <div class="flex items-center text-blue-600 font-semibold">
            Read More
            <svg
              class="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width={2}
                d="M9 5l7 7-7 7"
              />
            </svg>
          </div>
        </div>
      </article>
    </A>
  );
}
