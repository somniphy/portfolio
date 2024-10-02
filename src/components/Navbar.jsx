// // import { useState } from "react";
// import Contact from "./Contact";
// import ThemeToggler from "./ThemeToggler";

function Navbar() {
  // const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="z-50 w-full bg-zinc-950">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              {/* <a href="/" className="md:text-sm text-xs font-light text-white">
              </a> */}
            </div>
          </div>
          {/* <div className="flex items-center">
             <ThemeToggler />
          </div> */}
          {/* <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md dark:text-white text-gray-900 hover:text-gray-600 focus:outline-none"
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
          </div> */}
        </div>
      </div>

      {/* {isOpen && (
        <div className="md:hidden text-center">
          <p className="text-sm md:text-base tracking-wide font-light text-gray-950 dark:text-white">
            penalescjay@gmail.com
          </p> */}
          {/* <Contact /> */}
          {/* <ThemeToggler className="mt-2" /> */}
        {/* </div>
      )} */}
    </header>
  );
}

export default Navbar;
