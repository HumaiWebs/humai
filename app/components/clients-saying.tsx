"use client";

import { useState } from "react";
import Image from "next/image";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const reviews = [
  {
    quote: "Amazing software services",
    text: "The solutions they're providing is helping our business run more smoothly. We've been able to make quick developments with them, meeting our product vision within the timeline we set up. Listen to them because they can give strong advice about how to build good products.",
    name: "Maverick Phoenix",
    role: "Board Member, UNIQA",
    location: "Leeds, Uk",
    avatar: "/images/humera.jpg",

    logo: "/images/client-logo.png",
  },
  {
    quote: "Fantastic communication",
    text: "Working with this team has been a breeze. They respond quickly, deliver on time, and always exceed expectations. I can't recommend them enough.",
    name: "Isabella Rose",
    role: "CTO, Helix Solutions",
    location: "Berlin, Germany",
    avatar: "/images/humera.jpg",
    logo: "/images/client-logo.png",
  },
  {
    quote: "High-quality delivery",
    text: "Their expertise and commitment to quality helped us scale our operations effortlessly. Every milestone was met with great precision.",
    name: "Liam Carter",
    role: "Head of Product, NovaTech",
    location: "Toronto, Canada",
    avatar: "/images/humera.jpg",
    logo: "/images/client-logo.png",
  },
];

export default function ClientSaying() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % reviews.length);
  const prevSlide = () =>
    setCurrent((prev) => (prev - 1 + reviews.length) % reviews.length);

  const review = reviews[current];

  return (
    <section className="bg-tc-light py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-10 items-stretch">
        <div className="bg-white shadow-md rounded-xl p-10 flex-shrink-0 w-full lg:max-w-sm flex flex-col justify-center items-start">
          <h2 className="text-4xl font-bold text-blue-600 mb-2">3,900+</h2>
          <p className="text-xl font-semibold text-gray-900 leading-tight mb-4">
            customers win deals with Techco
          </p>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <Image
                src="/images/clutch.svg"
                alt="Clutch"
                width={32}
                height={32}
              />
              <p className="text-sm font-semibold mt-2">
                From <span className="text-blue-600">200+</span> reviews
              </p>
            </div>
            <div className="text-center">
              <Image src="/images/g2.svg" alt="G2" width={32} height={32} />
              <p className="text-sm font-semibold mt-2">
                From <span className="text-blue-600">300+</span> reviews
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white shadow-md rounded-xl p-10 flex-grow relative overflow-hidden">
          <h3 className="text-xl font-semibold text-blue-600 mb-4">
            “{review.quote}”
          </h3>
          <p className="text-gray-800 text-md mb-6 leading-relaxed max-h-48 overflow-y-auto">
            {review.text}
          </p>
          <div className="flex items-center gap-4">
            <Image
              src={review.avatar}
              alt={review.name}
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <p className="font-bold text-gray-900">{review.name}</p>
              <p className="text-sm text-gray-500">{review.role}</p>
              <p className="text-xs text-gray-400">{review.location}</p>
            </div>
            <div className="ml-auto">
              <Image
                src={review.logo}
                alt="Client logo"
                width={80}
                height={30}
              />
            </div>
          </div>

          <div className="absolute bottom-6 right-6 flex gap-3">
            <button
              onClick={prevSlide}
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200">
              <FaArrowLeft className="text-blue-600" />
            </button>
            <button
              onClick={nextSlide}
              className="p-2 bg-blue-100 rounded-full hover:bg-blue-200">
              <FaArrowRight className="text-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
