"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative p-4 md:p-6 shadow-md bg-white z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="w-24 h-24 relative">
          <Image
            src="/logo.jpg" 
            alt="Logo" 
            width={96} 
            height={96} 
            objectFit="cover" 
            className="rounded-full" 
          />
        </div>

        {/* Hamburger Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            className="w-8 h-8 text-green-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link href="/about" className="hover:underline text-gray-700">
            About
          </Link>
          <Link href="/our-work" className="hover:underline text-gray-700">
            Our Work
          </Link>
          <Link href="/quote" className="hover:underline text-gray-700">
            Get a Quote
          </Link>
        </nav>
      </div>

      {/* Mobile Menu */}
      <nav
        className={`fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } md:hidden`}
      >
        <button
          className="absolute top-4 right-4 text-3xl text-gray-700"
          onClick={() => setIsMenuOpen(false)}
        >
          &times;
        </button>
        <ul className="flex flex-col items-start p-6 space-y-4 mt-12">
          <li>
            <Link href="/about" onClick={() => setIsMenuOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/our-work" onClick={() => setIsMenuOpen(false)}>
              Our Work
            </Link>
          </li>
          <li>
            <Link href="/quote" onClick={() => setIsMenuOpen(false)}>
              Get a Quote
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
