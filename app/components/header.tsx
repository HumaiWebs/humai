"use client";
import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { MenuIcon, ChevronDown } from "lucide-react";

export type menuItem = {
  name: string;
  link: string;
  children?: menuItem[];
};

const menuItems: menuItem[] = [
  { name: "Home", link: "/" },
  { name: "Company", link: "/company" },
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

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <Link
        href={item.link}
        className="hover:text-blue-400 flex items-center gap-1"
      >
        {item.name}
        {item.children && <ChevronDown className="w-4 h-4" />}
      </Link>

      {item.children && (
        <div
          ref={dropdownRef}
          style={{
            height: isOpen ? `${dropdownHeight}px` : "0",
          }}
          className="absolute top-[calc(100%+10px)] left-0 bg-white shadow-lg rounded-lg overflow-hidden transition-all duration-300 ease-in-out w-48"
        >
          <div className="py-2 w-full z-50">
            {item.children.map((child, idx) => (
              <Link
                key={idx}
                href={child.link}
                className="block px-4 py-2 hover:bg-gray-100 text-gray-800"
              >
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
  const navHeight = navRef.current?.scrollHeight;
  console.log("nav height: ", navHeight);
  return (
    <header className="w-full bg-tc-dark z-50 sm:text-white sm:border-none mx-auto px-4 flex justify-between items-center">
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
        {menuItems.map((item, idx) => (
          <MenuItem key={idx} item={item} />
        ))}

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
        ref={navRef}
        data-open={open}
        className="absolute sm:hidden w-full z-[10000] bg-white left-0 top-[100px] overflow-hidden transition-all duration-300"
        style={{
          height: open ? `${(navHeight || 0) + 40}px` : "0",
          padding: open ? "20px" : "0",
        }}
      >
        {menuItems.map((item, idx) => (
          <div key={idx} className="py-2">
            <Link
              href={item.link}
              className="block text-gray-800 hover:text-blue-400"
            >
              {item.name}
            </Link>
            {item.children && (
              <div className="pl-4 mt-2 border-l border-gray-200">
                {item.children.map((child, childIdx) => (
                  <Link
                    key={childIdx}
                    href={child.link}
                    className="block py-2 text-gray-600 hover:text-blue-400"
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}

        {/* Mobile CTA Button */}
        <Link
          href="/get-started"
          className="bg-[#0066ff] hover:bg-blue-700 rounded-full px-6 py-3 text-white font-medium flex items-center justify-center mt-4"
        >
          GET STARTED <span className="ml-2">➔</span>
        </Link>
      </nav>

      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
      >
        <MenuIcon />
      </div>
    </header>
  );
}

export default Header;
