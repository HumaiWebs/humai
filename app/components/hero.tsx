import { PhoneCall } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import "@/app/globals.css"; // optional: in case global styles/animations are needed

export default function Hero() {
  return (
    <section className="relative bg-[#05093d] min-h-screen text-white px-6 py-16 flex flex-col lg:flex-row items-center justify-center gap-12 overflow-hidden">
      {/* Background lines/images */}
      <Image
        src=""
        alt="Decorative line"
        className="absolute top-0 left-0 w-40 opacity-70"
        width={700}
        height={50}
      />
      <Image
        src=""
        alt="Decorative line"
        className="absolute bottom-0 left-0 w-40 opacity-70"
        width={700}
        height={50}
      />
      <div className="w-full flex flex-col justify-between h-full">
        <div className="w-full flex items-center justify-center flex-col lg:flex-row">
          {/* Left Section */}
          <div className="max-w-xl space-y-6 z-10">
            <div className="absolute top-[90px] left-[152px] w-full max-w-[1034px] z-[100]">
              <div className="w-full relative h-28">
                <Image
                  src="/images/header-bottom-line.webp"
                  alt="Decorative background"
                  className="top-10 left-10 brightness-[2] object-contain w-32 opacity-40"
                  fill
                />
              </div>
            </div>

            <p className="text-sm text-[#7a7aff] font-semibold">
              PERFECT COMPANY SOLUTION
            </p>
            <h1 className="text-4xl md:text-5xl font-bold">
              We Help Companies in{" "}
              <span className="text-[#2c6eff]">Digitizing</span> Their Businesses.
            </h1>
            <p className="text-gray-300">
              In today’s rapidly evolving digital landscape, staying ahead of the
              curve is essential for businesses aiming to thrive and succeed.
            </p>

            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2c6eff] rounded-full"></span>
                Focus on quality first
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-[#2c6eff] rounded-full"></span>
                Get to the market on time
              </li>
            </ul>

            <div className="flex items-center gap-4 flex-wrap">
              <Link href="/contact" passHref legacyBehavior>
                <a className="bg-[#2c6eff] hover:bg-[#1d4ed8] rounded-full px-6 py-3 text-base text-white">
                  CONTACT US TODAY!
                </a>
              </Link>

              <div className="flex items-center gap-2 bg-green-500 rounded-full px-4 py-2 text-white">
                <PhoneCall size={16} />
                <div className="text-sm">
                  <p className="text-xs">CONTACT US DAILY</p>
                  <p>(+420) 318 568 511</p>
                </div>
              </div>
            </div>
            <div className="absolute bottom-[90px] left-[152px] w-full max-w-[1034px] z-[100]">
              <div className="w-full relative h-28">
                <Image
                  src="/images/hero-bottom-line.webp"
                  alt="Decorative background"
                  className="top-10 left-10 brightness-[2] object-contain w-32 opacity-40"
                  fill
                />
              </div>
            </div>
          </div>

          {/* Right Section with rotating layers */}
          <div className="w-full lg:w-[40%] relative flex justify-center items-center">
            {/* Image 1 (base layer) */}
            <Image
              src="/images/circle_engine_4.ff7d2b5855002c5b9d7f.webp"
              alt="Base Layer"
              className="absolute"
              width={500}
              height={500}
            />

            {/* Image 2 - rotating clockwise */}
            <Image
              src="/images/circle_engine_3.9ec03a6ef0dda5efc029.webp"
              alt="Rotating Layer Clockwise"
              className="absolute animate-spin-slow"
              width={450}
              height={450}
            />

            {/* Image 3 - rotating counterclockwise */}
            <Image
              src="/images/circle_engine_2.c1a725b3f7f22926cc36.webp"
              alt="Rotating Layer Anticlockwise"
              className="absolute animate-spin-reverse-slow"
              width={400}
              height={400}
            />

            {/* Image 4 (top layer) */}
            <Image
              src="/images/circle_engine_1.41a566c9c404c6c0c8dc.webp"
              alt="Top Layer"
              className="absolute"
              width={150}
              height={150}
            />
          </div>
        </div>

      </div>

      {/* Main content wrapper */}
    </section>
  );
}
