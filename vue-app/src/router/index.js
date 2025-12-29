import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../views/HomePage.vue";
import BlogListPage from "../views/BlogListPage.vue";
import BlogPostPage from "../views/BlogPostPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomePage,
  },
  {
    path: "/blog",
    name: "Blog",
    component: BlogListPage,
  },
  {
    path: "/blog/:slug",
    name: "BlogPost",
    component: BlogPostPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
