import Link from "next/link";
import Image from "next/image";

function Header() {
  return (
    <header className="container mx-auto px-4 flex justify-between items-center">
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

      {/* Navigation */}
      <nav className="hidden lg:flex space-x-8 items-center">
        <Link
          href="/"
          className="text-white hover:text-blue-400 flex items-center">
          Home <span className="ml-1">▼</span>
        </Link>
        <Link
          href="/company"
          className="text-white hover:text-blue-400 flex items-center">
          Company <span className="ml-1">▼</span>
        </Link>
        <Link
          href="/portfolio"
          className="text-white hover:text-blue-400 flex items-center">
          Portfolio <span className="ml-1">▼</span>
        </Link>
        <Link
          href="/services"
          className="text-white hover:text-blue-400 flex items-center">
          Services <span className="ml-1">▼</span>
        </Link>
        <Link
          href="/pages"
          className="text-white hover:text-blue-400 flex items-center">
          Pages <span className="ml-1">▼</span>
        </Link>
        <Link href="/contact" className="text-white hover:text-blue-400">
          Contact
        </Link>

        {/* CTA Button */}
        <Link
          href="/get-started"
          className="bg-[#0066ff] hover:bg-blue-700 rounded-full px-6 py-3 text-white font-medium flex items-center">
          GET STARTED <span className="ml-2">➔</span>
        </Link>
      </nav>
    </header>
  );
}

export default Header;
