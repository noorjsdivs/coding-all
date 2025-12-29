import { Link } from "react-router";

export const Logo = () => {
  return (
    <Link to="/" className="flex items-center space-x-2">
      <h2 className="text-lg font-semibold relative group overflow-hidden cursor-pointer">
        Learn Coding
        <span className="absolute w-full h-0.5 bg-blue-600 left-0 bottom-0 -translate-x-full group-hover:translate-x-0 ease-in-out duration-300" />
      </h2>
    </Link>
  );
};
