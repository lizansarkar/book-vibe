import React from "react";
import { Link } from "react-router";

const Header = () => {
  return (
    <header className="w-full bg-[#eeeeee] shadow-sm">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar max-w-[1200px] mx-auto bg-[#eeeeee]">
            {/* Mobile Menu Toggle Button */}
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block h-6 w-6 stroke-current">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
                </svg>
              </label>
            </div>
            {/* Logo Name */}
            <div className="flex-1">
              <a href="/" className="text-xl font-bold">Book Vibe</a>
            </div>
            {/* Desktop Menu - Centered */}
            <div className="flex-none hidden md:flex justify-center flex-grow">
              <ul className="menu menu-horizontal gap-5">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/shop">Shop Now</Link>
                <Link to="/blog">Blog</Link>
                <Link to="/contact">Contact</Link>
              </ul>
            </div>
            {/* Search and Profile */}
            <div className="flex-none gap-2">
              <input
                type="text"
                placeholder="Search Books"
                className="input input-bordered w-48 md:w-48 mr-2"
              />
              <div className="dropdown dropdown-end">
                <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost btn-circle avatar"
                >
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
                    />
                  </div>
                </div>
                <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
                >
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* Page content here */}
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
          <ul className="menu bg-base-200 min-h-full w-80 p-4">
            {/* Mobile Menu Close Button */}
            <li>
              <label htmlFor="my-drawer-3" aria-label="close sidebar" className="btn btn-ghost">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </label>
            </li>
            {/* Sidebar content here */}
            <li><a>Home</a></li>
            <li><a>Shop</a></li>
            <li><a>Visit</a></li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;