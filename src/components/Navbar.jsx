import { useState } from "react";
import Contact from "./Contact";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <nav className="dark:bg-zinc-950 bg-white sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <a
                href="/"
                className="text-xl uppercase font-bold text-zinc-900 dark:text-white"
              >
                christian penales
              </a>
            </div>
          </div>
          <div className="hidden md:flex space-x-8 items-center text-sm md:text-base">
            <p className="text-sm md:text-base tracking-wide font-light text-zinc-950 dark:text-white">
              penalescjay@gmail.com
            </p>
            <Contact />
          </div>
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md dark:text-white text-zinc-900 hover:text-zinc-600 focus:outline-none"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden text-center">
          <p className="text-sm md:text-base tracking-wide font-light text-zinc-950 dark:text-white">
            penalescjay@gmail.com
          </p>
          <Contact />
        </div>
      )}
    </nav>
  );
}

export default Navbar;
