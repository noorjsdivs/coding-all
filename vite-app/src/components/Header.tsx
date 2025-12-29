import { Link } from "react-router";
import { Logo } from "./Logo";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Logo />

          {/* Navigation */}
          <div className="flex items-center space-x-8">
            <Link
              to="/"
              className="text-sm font-medium hover:text-blue-600 duration-300 cursor-pointer"
            >
              Home
            </Link>
            <Link
              to="/blog"
              className="text-sm font-medium hover:text-blue-600 duration-300 cursor-pointer"
            >
              Blog
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
}
