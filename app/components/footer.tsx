"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribing email:", email);
    setEmail("");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative">
      {/* Main Footer */}
      <div
        className="bg-[#050a30] text-white py-16 relative overflow-hidden bg-cover bg-center"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",

          backgroundBlendMode: "overlay",
          backgroundImage:
            "url('https://techco-react.xpressbuddy.com/static/media/it_solution_hero_bg_1.35f6030741242c887e281ccf3b1ecf8f.svg')",
        }}>
        {/* Circuit Board Pattern Background */}
        <div className="absolute inset-0 opacity-10">
          {/* This would be the circuit pattern in the background */}
        </div>

        <div className="container mx-auto px-4">
          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="flex items-center gap-4">
              <div className="bg-[#0a1142] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Write to us</p>
                <p className="font-bold">info@humaiwebs.com </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#0a1142] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Call Us (USA)</p>
                <p className="font-bold">+44 7961 015201</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="bg-[#0a1142] p-3 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5 text-white">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <div>
                <p className="text-gray-300 text-sm">Our Office</p>
                <p className="font-bold">Office 1-A IK Tower E11/3 Islamabad</p>
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Newsletter */}
            <div>
              <h3 className="font-medium text-lg mb-6">Newsletter</h3>
              <p className="text-gray-300 text-sm mb-4">
                Sign up to Techco weekly newsletter to get the latest updates.
              </p>
              <form onSubmit={handleSubmit} className="flex items-center">
                <div className="relative flex-grow">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400">
                    <rect width="20" height="16" x="2" y="4" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-transparent border border-gray-700 rounded-md py-2 pl-10 pr-3 text-white text-sm focus:outline-none focus:ring-1 focus:ring-gray-500 focus:border-gray-500"
                  />
                </div>
                <button
                  type="submit"
                  className="ml-2 bg-transparent border border-gray-700 hover:bg-gray-800 rounded-md p-2 transition-colors">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4">
                    <path d="m22 2-7 20-4-9-9-4Z" />
                    <path d="M22 2 11 13" />
                  </svg>
                </button>
              </form>

              {/* Social Media */}
              <div className="flex gap-2 mt-8">
                <Link
                  href="#"
                  className="bg-[#0a1142] px-4 py-2 rounded-md text-xs hover:bg-[#0d1654] transition-colors">
                  FACEBOOK
                </Link>
                <Link
                  href="#"
                  className="bg-[#0a1142] px-4 py-2 rounded-md text-xs hover:bg-[#0d1654] transition-colors">
                  TWITTER
                </Link>
                <Link
                  href="#"
                  className="bg-[#0a1142] px-4 py-2 rounded-md text-xs hover:bg-[#0d1654] transition-colors">
                  LINKEDIN
                </Link>
              </div>
            </div>

            {/* Services */}
            <div>
              <h3 className="font-medium text-lg mb-6">Services</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    IT Management Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Data Tracking and Security
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Website Development
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Modern Technology Solution
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    UI/UX Design Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Custom Software Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Information */}
            <div>
              <h3 className="font-medium text-lg mb-6">Information</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    About Techco
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Investors
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Affiliate Program
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Career
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Pricing Plan
                  </Link>
                </li>
              </ul>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-medium text-lg mb-6">Product</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Case Studies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Our Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Overview
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    New Releases
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-gray-300 hover:text-white transition-colors">
                    Solutions
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gradient-to-r from-green-400 via-yellow-500 to-pink-500 py-4 text-white">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">Copyright © 2025, All rights reserved.</p>
          <p className="text-sm">HumAi Webs</p>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="absolute right-4 bottom-20 bg-white rounded-full p-2 shadow-lg"
        aria-label="Back to top">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-gray-800">
          <path d="m18 15-6-6-6 6" />
        </svg>
      </button>
    </footer>
  );
}
