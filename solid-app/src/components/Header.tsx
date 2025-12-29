import { A } from "@solidjs/router";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header class="bg-white shadow-md sticky top-0 z-50">
      <nav class="max-w-7xl mx-auto px-6 py-4">
        <div class="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <div class="flex items-center space-x-8">
            <A
              href="/"
              class="text-sm font-medium hover:text-blue-600 duration-300 cursor-pointer"
            >
              Home
            </A>
            <A
              href="/blog"
              class="text-sm font-medium hover:text-blue-600 duration-300 cursor-pointer"
            >
              Blog
            </A>
          </div>
        </div>
      </nav>
    </header>
  );
}
