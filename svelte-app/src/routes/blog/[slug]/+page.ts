import { blogPosts, type BlogPost } from "$lib/blog-data";
import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = ({ params }) => {
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    throw error(404, "Post not found");
  }

  const relatedPosts = blogPosts
    .filter((p) => p.slug !== post.slug && p.category === post.category)
    .slice(0, 3);

  const fallbackRelated =
    relatedPosts.length === 0
      ? blogPosts.filter((p) => p.slug !== post.slug).slice(0, 3)
      : relatedPosts;

  return {
    post,
    relatedPosts: fallbackRelated,
  };
};
