import React from "react";

const Header = () => {
  return (
    <header className="flex items-center justify-between whitespace-nowrap border-b border-solid border-gray-200 dark:border-gray-800 bg-white dark:bg-background-dark px-10 py-3">
      <div className="flex items-center gap-4 text-[#111318] dark:text-white">
        <div className="size-6 text-primary">
          <svg
            fill="none"
            viewBox="0 0 48 48"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z"
              fill="currentColor"
            />
          </svg>
        </div>
        <h2 className="text-lg font-bold leading-tight tracking-[-0.015em]">
          Feedback Portal
        </h2>
      </div>
      <div className="flex flex-1 justify-end gap-8">
        <div className="flex items-center gap-9 hidden md:flex">
          <a
            className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-300"
            href="#"
          >
            Home
          </a>
          <a
            className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-300"
            href="#"
          >
            Products
          </a>
          <a
            className="text-sm font-medium leading-normal text-[#111318] dark:text-gray-300"
            href="#"
          >
            Support
          </a>
        </div>
        <button className="flex min-w-[84px] cursor-pointer items-center justify-center rounded-lg h-10 px-4 bg-primary text-white text-sm font-bold leading-normal tracking-[0.015em] hover:bg-primary/90 transition-colors">
          <span>Log In</span>
        </button>
      </div>
    </header>
  );
};

export default Header;
