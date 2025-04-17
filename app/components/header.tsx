"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { MenuIcon } from "lucide-react";

function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const navHeight = navRef.current?.scrollHeight;
  return (
    <header className="w-full bg-tc-dark sm:text-white sm:border-none mx-auto px-4 flex justify-between items-center">
      {/* Logo */}
      <div>
        <Image
          src="/images/humai-logo.png"
          alt="TechCo Logo"
          width={200}
          height={40}
          className="mr-2"
          priority
        />
      </div>

      {/* Navigation Desktop */}

      <nav className="hidden flex-1 justify-end sm:flex gap-4 items-center">
        <Link href="/" className="hover:text-blue-400 flex items-center">
          Home
        </Link>
        <Link href="/company" className="hover:text-blue-400 flex items-center">
          Company
        </Link>
        <Link
          href="/portfolio"
          className="hover:text-blue-400 flex items-center"
        >
          Portfolio
        </Link>
        <Link
          href="/services"
          className="hover:text-blue-400 flex items-center"
        >
          Services
        </Link>
        <Link href="/pages" className="hover:text-blue-400 flex items-center">
          Pages
        </Link>
        <Link href="/contact" className="hover:text-blue-400">
          Contact
        </Link>

        {/* CTA Button */}
        <Link
          href="/get-started"
          className="bg-[#0066ff] hover:bg-blue-700 rounded-full px-6 py-3 text-white font-medium flex items-center"
        >
          GET STARTED <span className="ml-2">➔</span>
        </Link>
      </nav>

      {/* Navigation Mobile */}
      <nav
        style={{
          height: open ? `${(navHeight || 0) + 30}px` : "0",
          padding: !open ? 0 : "20px",
        }}
        data-open={open}
        ref={navRef}
        className={`absolute sm:hidden sm:w-0 data-[open=true]:h-[${navHeight}px] h-0 sm:h-full sm:bg-transparent sm:flex-row transition-all ease-in overflow-hidden delay-300 top-[100px] flex flex-col gap-4 items-start sm:text-white bg-white w-full text-gray-800 left-0 z-[1000] sm:static lg:flex space-x-8 sm:items-center`}
      >
        <Link href="/" className="hover:text-blue-400 flex items-center">
          Home
        </Link>
        <Link href="/company" className="hover:text-blue-400 flex items-center">
          Company
        </Link>
        <Link
          href="/portfolio"
          className="hover:text-blue-400 flex items-center"
        >
          Portfolio
        </Link>
        <Link
          href="/services"
          className="hover:text-blue-400 flex items-center"
        >
          Services
        </Link>
        <Link href="/pages" className="hover:text-blue-400 flex items-center">
          Pages
        </Link>
        <Link href="/contact" className="hover:text-blue-400">
          Contact
        </Link>

        {/* CTA Button */}
        <Link
          href="/get-started"
          className="bg-[#0066ff] hover:bg-blue-700 rounded-full px-6 py-3 text-white font-medium flex items-center"
        >
          GET STARTED <span className="ml-2">➔</span>
        </Link>
      </nav>

      <div
        className="sm:hidden sm:w-0 cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
