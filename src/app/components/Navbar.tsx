"use client";
import Link from "next/link";

import React, { useEffect, useState } from "react";
import { ResumeWebsite } from "../constants";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setisSticky] = useState(false);

  const {
    home_page: { navbar },
  } = ResumeWebsite;
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 0) {
        setisSticky(true);
      } else {
        setisSticky(false);
      }
    });
  }, []);

  return (
    <nav
      className={`${
        isSticky ? "fixed bg-blue-950 p-1" : "absolute bg-transparent p-3"
      } top-0 left-0 w-full z-10  `}
    >
      <div className="max-w-7xl mx-auto py-2 flex items-center justify-between">
        <div
          className={`text-3xl font-extrabold font-headingFont ${"text-white"}`}
        >
          {navbar.title.label}
        </div>

        <ul className="hidden md:flex space-x-8 text-slate-700 font-extrabold font-bodyFont">
          {navbar.links.map((item, ind) => (
            <li key={item.link}>
              <Link href={item.link}>
                <p
                  className={`${"text-white"} hover:${
                    isSticky ? "text-gray-300" : "text-red-500"
                  }`}
                >
                  {item.label}
                </p>
              </Link>
            </li>
          ))}
        </ul>
        <button
          onClick={toggleMenu}
          className="md:hidden text-slate-700 focus:outline-none"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
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

      {isMenuOpen && (
        <div className="md:hidden bg-gray-200 bg-opacity-80">
          <ul className="flex flex-col space-y-4 px-4 py-2 font-bold font-bodyFont text-slate-700 justify-center text-center">
            {navbar.links.map((item) => (
              <li key={item.link}>
                <Link href={item.link}>
                  <p className={`${"text-slate-700"} hover:text-red-500`}>
                    {item.label}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
