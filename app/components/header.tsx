"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { MenuIcon, ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";

export type menuItem = {
  name: string;
  link: string;
  children?: menuItem[];
};

const menuItems: menuItem[] = [
  { name: "Home", link: "/" },
  {
    name: "Company",
    link: "/company",
    children: [
      { name: "About Us", link: "/about" },
      { name: "Portfolio", link: "/portfolio" },
      { name: "Our Team", link: "/team" },
      { name: "Careers", link: "/careers" },
    ],
  },
  {
    name: "Services",
    link: "/services",
    children: [
      { name: "Web Development", link: "/services/web" },
      { name: "Mobile Apps", link: "/services/mobile" },
      { name: "Cloud Solutions", link: "/services/cloud" },
    ],
  },
  { name: "Portfolio", link: "/portfolio" },
  {
    name: "Resources",
    link: "/resources",
    children: [
      { name: "Blog", link: "/blog" },
      { name: "Case Studies", link: "/case-studies" },
      { name: "Documentation", link: "/docs" },
    ],
  },
  { name: "Contact", link: "/contact" },
];

function MenuItem({ item }: { item: menuItem }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const dropdownHeight = dropdownRef.current?.scrollHeight;
  const pathname = usePathname();
  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}>
      <Link
        href={item.link}
        className={`hover:text-blue-400 flex items-center gap-1`}>
        {item.name}
        {item.children && <ChevronDown className="w-4 h-4" />}
      </Link>

      {item.children && (
        <div
          ref={dropdownRef}
          style={{
            height: isOpen ? `${dropdownHeight}px` : "0",
          }}
          className="absolute top-[calc(100%+10px)] left-0 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out w-48">
          <div className="py-2 w-full z-50">
            {item.children.map((child, idx) => (
              <Link
                key={idx}
                href={child.link}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-800">
                {child.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

function Header() {
  const [open, setOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const pathname = usePathname();
  const navHeight = navRef.current?.scrollHeight;
  console.log("nav height: ", navHeight);
  return (
    <header className="w-full bg-tc-dark sm:text-white sm:border-none mx-auto px-56 flex justify-between items-center">
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
          className="hover:text-blue-400 flex items-center">
          Portfolio
        </Link>
        <Link
          href="/services"
          className="hover:text-blue-400 flex items-center">
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
          className="bg-[#0066ff] hover:bg-blue-700 rounded-full px-6 py-3 text-white font-medium flex items-center">
          GET STARTED <span className="ml-2">➔</span>
        </Link>
      </nav>

      {/* Navigation Mobile */}
      <nav
        ref={navRef}
        className={`absolute sm:hidden sm:w-0 data-[open=true]:h-[${navHeight}px] h-0 sm:h-full sm:bg-transparent sm:flex-row transition-all ease-in overflow-hidden delay-300 top-[100px] flex flex-col gap-4 items-start sm:text-white bg-white w-full text-gray-800 left-0 z-[1000] sm:static lg:flex space-x-8 sm:items-center`}>
        <Link href="/" className="hover:text-blue-400 flex items-center">
          Home
        </Link>
        <Link href="/company" className="hover:text-blue-400 flex items-center">
          Company
        </Link>
        <Link
          href="/portfolio"
          className="hover:text-blue-400 flex items-center">
          Portfolio
        </Link>
        <Link
          href="/services"
          className="hover:text-blue-400 flex items-center">
          Services
        </Link>
        <Link href="/pages" className="hover:text-blue-400 flex items-center">
          Pages
        </Link>
        <Link href="/contact" className="hover:text-blue-400">
          Contact
        </Link>

        {/* Mobile CTA Button */}
        <Link
          href="/get-started"
          className="bg-[#0066ff] hover:bg-blue-700 rounded-full px-6 py-3 text-white font-medium flex items-center">
          GET STARTED <span className="ml-2">➔</span>
        </Link>
      </nav>

      <div
        className="sm:hidden sm:w-0 cursor-pointer"
        onClick={() => {
          setOpen((prev) => !prev);
        }}>
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
